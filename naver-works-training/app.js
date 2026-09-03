(() => {
  const deck = window.PUBLIC_DECK || [];
  const mainCount = deck.filter((item) => !item.appendix).length;
  const appendixCount = deck.length - mainCount;
  const stage = document.querySelector("#stage");
  const counter = document.querySelector("#counter");
  const progress = document.querySelector("#progress span");
  const notes = document.querySelector("#notes");
  const overview = document.querySelector("#overview");
  let current = 0;
  let printMode = false;

  const fromHash = () => {
    const match = location.hash.match(/slide=(\d+)/);
    return Math.min(Math.max((match ? Number(match[1]) : 1) - 1, 0), Math.max(deck.length - 1, 0));
  };

  const label = (index) => {
    if (deck[index]?.appendix) return `A${index - mainCount + 1} / A${appendixCount}`;
    return `${String(index + 1).padStart(2,"0")} / ${String(mainCount).padStart(2,"0")}`;
  };

  function scaleStage() {
    const scale = Math.min((innerWidth - 36) / 1600, (innerHeight - 36) / 900);
    stage.style.transform = `translate(-50%, -50%) scale(${Math.max(scale,.1)})`;
  }

  function render() {
    const item = deck[current];
    if (!item) return;
    stage.innerHTML = `<img src="${item.image}" alt="${item.title.replaceAll('"','&quot;')}" />`;
    counter.textContent = label(current);
    progress.style.width = `${Math.min((current + 1) / mainCount, 1) * 100}%`;
    notes.innerHTML = `<div class="notes-head"><strong>강사 노트</strong><button class="notes-close" type="button" aria-label="닫기">×</button></div><div class="notes-body">${item.notes || "별도의 강사 노트가 없습니다."}</div>`;
    document.title = `${label(current)} · ${item.title}`;
    history.replaceState(null, "", `#slide=${current + 1}`);
    document.querySelector("#prev").disabled = current === 0;
    document.querySelector("#next").disabled = current === deck.length - 1;
    overview.querySelectorAll(".overview-item").forEach((button) => button.classList.toggle("active", Number(button.dataset.index) === current));
  }

  function go(index) {
    current = Math.min(Math.max(index, 0), deck.length - 1);
    render();
  }

  function buildOverview() {
    overview.innerHTML = `<div class="overview-panel"><div class="overview-head"><div><small>본편 ${mainCount}장 · 관리자 부록 ${appendixCount}장</small><h1>슬라이드 개요</h1></div><button class="overview-close" type="button" aria-label="닫기">×</button></div><div class="overview-grid">${deck.map((item,index) => `<button class="overview-item" type="button" data-index="${index}"><span class="num">${item.appendix ? `A${index-mainCount+1}` : String(index+1).padStart(2,"0")}</span><h2>${item.title}</h2></button>`).join("")}</div></div>`;
  }

  function toggleOverview(force) {
    overview.classList.toggle("open", force ?? !overview.classList.contains("open"));
  }

  function toggleNotes(force) {
    notes.classList.toggle("open", force ?? !notes.classList.contains("open"));
  }

  function preparePrint() {
    if (printMode) return;
    printMode = true;
    document.body.classList.add("print-mode");
    stage.innerHTML = deck.map((item) => `<img class="print-slide" src="${item.image}" alt="${item.title.replaceAll('"','&quot;')}" />`).join("");
    stage.style.transform = "none";
  }

  function restorePrint() {
    if (!printMode) return;
    printMode = false;
    document.body.classList.remove("print-mode");
    render();
    scaleStage();
  }

  document.querySelector("#prev").addEventListener("click", () => go(current - 1));
  document.querySelector("#next").addEventListener("click", () => go(current + 1));
  document.querySelector("#overview-toggle").addEventListener("click", () => toggleOverview());
  document.querySelector("#notes-toggle").addEventListener("click", () => toggleNotes());
  document.querySelector("#fullscreen").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
  document.querySelector("#print").addEventListener("click", () => { preparePrint(); requestAnimationFrame(() => print()); });
  notes.addEventListener("click", (event) => { if (event.target.closest(".notes-close")) toggleNotes(false); });
  overview.addEventListener("click", (event) => {
    if (event.target.closest(".overview-close")) return toggleOverview(false);
    const item = event.target.closest(".overview-item");
    if (item) { go(Number(item.dataset.index)); toggleOverview(false); }
  });
  addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (["arrowright","pagedown"," "].includes(key)) { event.preventDefault(); go(current + 1); }
    else if (["arrowleft","pageup"].includes(key)) { event.preventDefault(); go(current - 1); }
    else if (key === "home") go(0);
    else if (key === "end") go(deck.length - 1);
    else if (key === "o") toggleOverview();
    else if (key === "n") toggleNotes();
    else if (key === "p") { preparePrint(); requestAnimationFrame(() => print()); }
    else if (key === "f") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    else if (key === "escape") { toggleOverview(false); toggleNotes(false); }
  });
  addEventListener("hashchange", () => { const next = fromHash(); if (next !== current) go(next); });
  addEventListener("resize", scaleStage);
  addEventListener("beforeprint", preparePrint);
  addEventListener("afterprint", restorePrint);

  buildOverview();
  current = fromHash();
  render();
  scaleStage();
})();
