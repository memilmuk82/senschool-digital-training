'use strict';

(function () {
  const slides = window.SLIDES || [];
  const frame = document.querySelector('#slideFrame');
  const counter = document.querySelector('#counter');
  const progressFill = document.querySelector('#progressFill');
  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');
  const overviewButton = document.querySelector('#overviewButton');
  const printButton = document.querySelector('#printButton');
  const fullscreenButton = document.querySelector('#fullscreenButton');
  const overviewDialog = document.querySelector('#overviewDialog');
  const overviewGrid = document.querySelector('#overviewGrid');
  const helpDialog = document.querySelector('#helpDialog');
  const printDeck = document.querySelector('#printDeck');

  const state = {
    index: 0,
    reveals: new Map(),
  };

  const parseHash = () => {
    const match = window.location.hash.match(/^#\/slide\/(\d+)$/);
    if (!match) return 0;
    return Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1));
  };

  const slideHash = (index) => `#/slide/${index + 1}`;

  function brandHeader(slide) {
    return `
      <header class="slide-chrome">
        <div class="brand-crop" aria-label="서울특별시중부교육지원청">
          <img src="./outputs/assets/brand/01_cover_jungbu_training.png" alt="" />
        </div>
        <span class="section-label">${slide.section}</span>
      </header>`;
  }

  function sourceFooter(slide) {
    return `
      <footer class="slide-footer">
        <span class="slide-source">${slide.source || ''}</span>
        <span class="slide-number">${String(slide.id).padStart(2, '0')}</span>
      </footer>`;
  }

  function renderSlide(slide, options = {}) {
    const print = options.print === true;
    const revealAll = options.revealAll === true;
    const special = ['cover', 'qr-single'].includes(slide.layout);
    const article = document.createElement('article');
    article.className = `slide slide-${slide.layout}${print ? ' is-print' : ''}`;
    article.dataset.slideId = String(slide.id);
    article.setAttribute('aria-label', `${slide.id}번 슬라이드: ${slide.title}`);

    if (special) {
      article.innerHTML = `<div class="special-body">${slide.body}</div>${sourceFooter(slide)}`;
    } else {
      article.innerHTML = `
        ${brandHeader(slide)}
        <div class="title-block">
          <h1>${slide.title}</h1>
          ${slide.subtitle ? `<p>${slide.subtitle}</p>` : ''}
        </div>
        <div class="slide-body">${slide.body}</div>
        ${sourceFooter(slide)}`;
    }

    const reveal = revealAll ? Number.POSITIVE_INFINITY : (state.reveals.get(slide.id) || 0);
    article.querySelectorAll('[data-reveal]').forEach((element) => {
      const step = Number(element.dataset.reveal);
      const shown = revealAll || step <= reveal;
      element.classList.toggle('is-hidden-reveal', !shown);
      element.setAttribute('aria-hidden', String(!shown));
    });
    return article;
  }

  function updateHash(replace = false) {
    const value = slideHash(state.index);
    if (window.location.hash === value) return;
    if (replace) window.history.replaceState(null, '', value);
    else window.location.hash = value;
  }

  function render(options = {}) {
    const slide = slides[state.index];
    frame.replaceChildren(renderSlide(slide));
    frame.focus({ preventScroll: true });
    counter.textContent = `${String(state.index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progressFill.style.width = `${((state.index + 1) / slides.length) * 100}%`;
    prevButton.disabled = state.index === 0 && (state.reveals.get(slide.id) || 0) === 0;
    nextButton.disabled = state.index === slides.length - 1 && (state.reveals.get(slide.id) || 0) >= (slide.revealCount || 0);
    document.title = `${String(slide.id).padStart(2, '0')} · ${slide.title}`;
    if (options.updateHash !== false) updateHash();
  }

  function goTo(index, options = {}) {
    state.index = Math.max(0, Math.min(slides.length - 1, index));
    if (options.revealEnd) state.reveals.set(slides[state.index].id, slides[state.index].revealCount || 0);
    else if (!options.keepReveal) state.reveals.set(slides[state.index].id, 0);
    render({ updateHash: options.updateHash !== false });
  }

  function next() {
    const slide = slides[state.index];
    const max = slide.revealCount || 0;
    const current = state.reveals.get(slide.id) || 0;
    if (current < max) {
      state.reveals.set(slide.id, current + 1);
      render();
      return;
    }
    if (state.index < slides.length - 1) goTo(state.index + 1);
  }

  function previous() {
    const slide = slides[state.index];
    const current = state.reveals.get(slide.id) || 0;
    if (current > 0) {
      state.reveals.set(slide.id, current - 1);
      render();
      return;
    }
    if (state.index > 0) goTo(state.index - 1, { revealEnd: true });
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await document.documentElement.requestFullscreen?.();
  }

  function openOverview() {
    overviewDialog.showModal();
    overviewGrid.querySelector(`[data-slide="${state.index}"]`)?.scrollIntoView({ block: 'center' });
  }

  function buildOverview() {
    overviewGrid.replaceChildren();
    slides.forEach((slide, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.slide = String(index);
      button.innerHTML = `<span>${String(slide.id).padStart(2, '0')}</span><small>${slide.section}</small><strong>${slide.title}</strong>`;
      button.addEventListener('click', () => {
        overviewDialog.close();
        goTo(index);
      });
      overviewGrid.append(button);
    });
  }

  function buildPrintDeck() {
    printDeck.replaceChildren();
    slides.forEach((slide) => {
      const page = document.createElement('article');
      page.className = 'print-page';
      const canvas = document.createElement('div');
      canvas.className = 'print-canvas';
      canvas.append(renderSlide(slide, { print: true, revealAll: true }));
      page.append(canvas);
      printDeck.append(page);
    });
  }

  function scaleFrame() {
    const gutter = window.innerWidth < 720 ? 8 : 28;
    const controlsRoom = window.innerWidth < 720 ? 0 : 34;
    const scale = Math.min(
      (window.innerWidth - gutter * 2) / 1600,
      (window.innerHeight - gutter * 2 - controlsRoom) / 900,
    );
    frame.style.transform = `translate(-50%, -50%) scale(${Math.max(0.1, scale)})`;
  }

  const navigationKeys = new Set(['ArrowRight', 'ArrowLeft', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'f', 'F', 'o', 'O', 'p', 'P', '?']);
  document.addEventListener('keydown', (event) => {
    const interactive = event.target instanceof Element && event.target.closest('a, button, input, textarea, select, [contenteditable="true"]');
    if (event.key === 'Escape') return;
    if (interactive || event.ctrlKey || event.metaKey || event.altKey || !navigationKeys.has(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') next();
    else if (event.key === 'ArrowLeft' || event.key === 'PageUp') previous();
    else if (event.key === 'Home') goTo(0);
    else if (event.key === 'End') goTo(slides.length - 1);
    else if (event.key.toLowerCase() === 'f') toggleFullscreen();
    else if (event.key.toLowerCase() === 'o') openOverview();
    else if (event.key.toLowerCase() === 'p') window.print();
    else if (event.key === '?') helpDialog.showModal();
  });

  let touchStart = null;
  frame.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  }, { passive: true });
  frame.addEventListener('touchend', (event) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    const elapsed = Date.now() - touchStart.time;
    touchStart = null;
    if (elapsed < 900 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) next(); else previous();
    }
  }, { passive: true });

  prevButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);
  overviewButton.addEventListener('click', openOverview);
  printButton.addEventListener('click', () => window.print());
  fullscreenButton.addEventListener('click', toggleFullscreen);
  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => button.closest('dialog')?.close());
  });

  window.addEventListener('hashchange', () => {
    const index = parseHash();
    if (index !== state.index) goTo(index, { updateHash: false });
  });
  window.addEventListener('resize', scaleFrame, { passive: true });
  document.addEventListener('fullscreenchange', scaleFrame);

  if (!slides.length) {
    frame.textContent = '표시할 슬라이드가 없습니다.';
    return;
  }

  state.index = parseHash();
  updateHash(true);
  buildOverview();
  buildPrintDeck();
  scaleFrame();
  render({ updateHash: false });
})();
