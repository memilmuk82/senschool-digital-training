'use strict';

const ASSET = './outputs';
const CAP = `${ASSET}/captures`;
const BRAND = `${ASSET}/assets/brand`;
const LOGO = `${ASSET}/assets/logos`;

const img = (src, alt, caption = '', className = '') => `
  <figure class="media ${className}">
    <div class="media-box"><img src="${src}" alt="${alt}" /></div>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>`;

const mark = (n, text) => `<span class="number-mark"><b>${n}</b>${text}</span>`;
const tag = (text, tone = 'blue') => `<span class="tag tag-${tone}">${text}</span>`;
const kbd = (text) => `<kbd>${text}</kbd>`;

window.SLIDES = [
  {
    id: 1,
    section: '도입',
    title: '2026 중부 중등 학교로 찾아가는 AI·디지털 역량 강화 직무연수',
    layout: 'cover',
    body: `<img class="cover-image" src="${BRAND}/01_cover_jungbu_training.png" alt="2026 중부 중등 학교로 찾아가는 AI·디지털 역량 강화 직무연수" />
      <p class="cover-presenter">종로산업정보학교 교사 이진선</p>`,
  },
  {
    id: 2,
    section: '도입',
    title: '사전 역량진단 설문',
    layout: 'qr-single',
    body: `<img class="qr-poster" src="${BRAND}/02_pre_training_survey_qr.png" alt="사전 역량진단 QR 코드" />
      <p class="qr-side-note">연수 시작 전<br /><strong>사전 역량진단</strong>에 참여해 주세요.</p>`,
  },
  {
    id: 3,
    section: 'Chrome·협업·Drive',
    title: '01. 자료가 어디에 있는지부터',
    subtitle: '찾기 · 소통 · 공동 편집 · 보관의 자리를 정합니다.',
    layout: 'section',
    body: `<div class="service-journey">
      <div>${img(`${LOGO}/chrome.svg`, 'Google Chrome 로고')}<strong>Chrome</strong><span>업무 환경</span></div>
      <i>›</i>
      <div>${img(`${LOGO}/naver-works.svg`, 'NAVER WORKS 로고')}<strong>NAVER WORKS</strong><span>소통·축적</span></div>
      <i>›</i>
      <div>${img(`${LOGO}/google-drive.png`, 'Google Drive 로고')}<strong>Google Drive</strong><span>공동 편집</span></div>
      <i>›</i>
      <div>${img(`${LOGO}/onedrive.svg`, 'Microsoft OneDrive 로고')}<strong>OneDrive</strong><span>Microsoft 문서</span></div>
    </div>`,
  },
  {
    id: 4,
    section: 'Chrome·협업·Drive',
    title: 'Chrome 프로필은 ‘업무 환경’을 옮깁니다',
    subtitle: '내 기기에서는 업무용 프로필, 공용 PC에서는 흔적을 남기지 않는 창을 사용합니다.',
    layout: 'media-compare',
    body: `<div class="two-media">
      <section>${img(`${CAP}/automated/chrome/CAP-CHROME-AUTO-01_manage-profile.png`, 'Chrome 프로필 맞춤설정 화면', '내 기기 · 업무용 프로필')}
        <div class="mini-list"><p>북마크·비밀번호·설정을 기기 간 이어 쓰기</p><p>개인용과 업무용 프로필 분리</p></div></section>
      <section>${img(`${CAP}/automated/chrome/CAP-CHROME-AUTO-02_incognito.png`, 'Chrome 시크릿 모드 시작 화면', '공용 PC · 시크릿 또는 InPrivate')}
        <div class="mini-list"><p>업무가 끝나면 <strong>모든 시크릿 창 닫기</strong></p><p>다운로드한 파일도 직접 삭제</p></div></section>
    </div>
    <aside class="warning-strip">시크릿 모드는 방문 기록 저장을 줄이지만, 다운로드 파일과 기관·통신망의 기록까지 없애지는 않습니다.</aside>`,
    source: `<a href="https://support.google.com/chrome/answer/2364824">Google Chrome 도움말 · 여러 프로필 관리</a>`,
  },
  {
    id: 5,
    section: 'Chrome·협업·Drive',
    title: '파일의 위치를 네 칸으로 구분합니다',
    subtitle: '기능보다 먼저 “원본이 어디에 있는가”를 확인합니다.',
    layout: 'cards',
    body: `<div class="open-grid four">
      <article><span class="big-icon">💻</span><h3>기기 로컬</h3><p>이 PC에서만 보임</p><small>빠르지만 다른 기기·인수인계에 약함</small></article>
      <article><span class="big-icon">☁️</span><h3>내 Drive</h3><p>내가 소유한 작업본</p><small>다른 기기에서 열고 편집</small></article>
      <article><span class="big-icon">👥</span><h3>조직 공유 공간</h3><p>팀이 함께 관리</p><small>담당자가 바뀌어도 자료가 남음</small></article>
      <article><span class="big-icon">📎</span><h3>메시지 첨부</h3><p>전달 당시의 복사본</p><small>최신본·원본 위치를 따로 확인</small></article>
    </div>
    <div class="check-rail"><span>다른 기기에서 열까?</span><span>함께 고칠까?</span><span>담당자가 바뀔까?</span><span>최신본을 확인해야 할까?</span></div>`,
  },
  {
    id: 6,
    section: 'Chrome·협업·Drive',
    title: 'NAVER WORKS 네 도구는 역할이 다릅니다',
    layout: 'media-cards',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/approved/public/CAP-PUBLIC-05_naver-service-nav.png`, 'NAVER WORKS 상단 서비스 아이콘', '상단 서비스 아이콘에서 도구 전환', 'nav-service-strip')}
      <div class="role-list">
        <p>${tag('즉시', 'teal')}<strong>메시지</strong><span>빠르게 묻고 확인</span></p>
        <p>${tag('기록', 'blue')}<strong>메일</strong><span>공식적으로 전달</span></p>
        <p>${tag('축적', 'yellow')}<strong>게시판</strong><span>다시 찾을 정보</span></p>
        <p>${tag('파일', 'navy')}<strong>Drive</strong><span>조직 자료 관리</span></p>
      </div>
    </div>`,
  },
  {
    id: 7,
    section: 'Chrome·협업·Drive',
    title: '메시지: 빠르게 묻고 바로 확인',
    layout: 'media-steps',
    body: `<div class="media-split">
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-02_message-self-sent.png`, 'NAVER WORKS 나와의 메시지 화면', '나와의 메시지는 간단한 메모·기기 간 전달에도 유용')}
      <ol class="action-steps">
        <li>${mark(1, '<strong>나에게 보내기</strong><span>링크·짧은 메모·파일 임시 전달</span>')}</li>
        <li>${mark(2, '<strong>파일과 링크</strong><span>대화 맥락과 함께 빠르게 공유</span>')}</li>
        <li>${mark(3, '<strong>공지·읽음 확인</strong><span>바로 확인할 내용에 사용</span>')}</li>
      </ol>
    </div>
    <aside class="rule-strip">오래 보관하고 다시 찾을 정보는 게시판이나 Drive로 옮깁니다.</aside>`,
  },
  {
    id: 8,
    section: 'Chrome·협업·Drive',
    title: '메일: 기록이 필요한 전달',
    layout: 'media-compare',
    body: `<div class="two-media compact">
      ${img(`${CAP}/approved/public/CAP-PUBLIC-01_mail-compose.png`, 'NAVER WORKS 메일 작성 화면', '작성 · 예약 발송 · 보안등급 · 첨부')}
      ${img(`${CAP}/approved/public/CAP-PUBLIC-02_mail-self-sent.png`, 'NAVER WORKS 보낸 메일 확인 화면', '발송 뒤 보낸메일에서 기록 확인')}
    </div>
    <div class="feature-rail"><span>예약 발송</span><span>보안등급</span><span>첨부·번역</span><span>보낸메일 확인</span></div>`,
  },
  {
    id: 9,
    section: 'Chrome·협업·Drive',
    title: '게시판: 다시 찾아볼 정보를 쌓기',
    layout: 'media-gallery',
    body: `<div class="gallery three">
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-06_board-compose.png`, 'NAVER WORKS 게시판 글쓰기', '① 게시판 선택·제목·본문·첨부')}
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-05_board-settings.png`, 'NAVER WORKS 게시글 알림 설정', '② 댓글·알림 설정 확인')}
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-07_board-posted.png`, '등록된 테스트 게시글', '③ 등록 뒤 다시 찾을 수 있는 정보')}
    </div>
    <aside class="rule-strip">필독·권한·알림은 “누가 반드시 봐야 하는가”에 맞춰 정합니다.</aside>`,
  },
  {
    id: 10,
    section: 'Chrome·협업·Drive',
    title: 'WORKS Drive: 조직 자료를 함께 관리',
    layout: 'media-steps',
    body: `<div class="media-split">
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-08_drive-new-menu.png`, 'WORKS Drive 새로 만들기 메뉴', '조직 공간에 파일과 폴더 만들기')}
      <div class="statement-stack">
        <h3>파일 업로드 · 보기 · 다운로드</h3>
        <p>편집이 끝난 대용량 배포 자료와 완료 자료를 보관합니다.</p>
        <p>공동 편집이 필요한 Google 문서·시트·슬라이드는 Google Drive에서 작업합니다.</p>
      </div>
    </div>`,
  },
  {
    id: 11,
    section: 'Chrome·협업·Drive',
    title: '센스쿨 NAVER WORKS에는 500GB가 할당되어 있습니다',
    layout: 'capacity',
    body: `<div class="capacity-hero"><img src="${LOGO}/works-drive.svg" alt="WORKS Drive 아이콘" /><strong>500<span>GB</span></strong><p>센스쿨에서 사용하는 실제 조직 계정의 할당량</p></div>
      ${img(`${CAP}/automated/naver-works/CAP-NW-AUTO-09_drive-storage.png`, 'WORKS Drive 저장공간 500GB 표시', '공개 상품의 공통 용량이 아니라 현재 센스쿨 계정 기준')}`,
  },
  {
    id: 12,
    section: 'Chrome·협업·Drive',
    title: 'Google Drive: 내 작업과 Google 문서의 중심',
    layout: 'media-steps',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/automated/google-drive/CAP-GD-AUTO-01_storage-200gb.png`, 'Google Drive 저장공간 200GB 표시', '서울시교육청 Google 계정 · 200GB')}
      <div class="statement-stack">
        <h3>내 드라이브</h3><p>내가 소유한 작업 파일과 폴더</p>
        <h3>공유 문서함</h3><p>다른 사람이 공유한 자료</p>
        <h3>Google 문서 도구</h3><p>문서·시트·슬라이드를 웹에서 함께 편집</p>
      </div>
    </div>`,
  },
  {
    id: 13,
    section: 'Chrome·협업·Drive',
    title: 'OneDrive 1TB와 탐색기 연동',
    subtitle: '서울시교육청 Microsoft 365 협약 계정을 기준으로 합니다.',
    layout: 'capacity',
    body: `<div class="capacity-hero onedrive"><img src="${LOGO}/onedrive.svg" alt="Microsoft OneDrive 아이콘" /><strong>1<span>TB</span></strong><p>Word · Excel · PowerPoint 온라인 편집</p></div>
      <div class="explorer-illustration"><div class="explorer-side">OneDrive<br /><b>학교 계정</b></div><div class="explorer-files"><span>수업계획.docx</span><span>예산.xlsx</span><span>연수자료.pptx</span></div></div>
      <aside class="warning-strip">계정 발급·접속·기존 자료 이관 절차는 학교 정보부장 또는 담당자에게 확인합니다.</aside>`,
  },
  {
    id: 14,
    section: 'Chrome·협업·Drive',
    title: '공유는 링크보다 권한이 먼저입니다',
    layout: 'permission',
    body: `<div class="permission-layout">
      ${img(`${CAP}/google-drive/CAP-GD-OFFICIAL-02_share-access.webp`, 'Google Drive 공유와 액세스 권한 화면', '링크를 만들기 전 대상과 역할 확인')}
      <div class="permission-rows">
        <header><span><img src="${LOGO}/google-drive.png" alt="" />Google Drive</span><span><img src="${LOGO}/works-drive.svg" alt="" />WORKS Drive</span></header>
        <p><b>편집</b><span>뷰어 · 댓글 작성자 · 편집자</span><span>파일 특성에 따라 제한</span></p>
        <p><b>보기·다운로드</b><span>링크·조직·지정 사용자</span><span>사내 구성원·지정 사용자</span></p>
        <p><b>공개 범위</b><span>누구에게 열 것인가</span><span>누구에게 열 것인가</span></p>
      </div>
    </div>
    <aside class="warning-strip">민감정보는 최소 권한으로 공유하고, 목적이 끝나면 공유를 해제합니다.</aside>`,
    source: `<a href="https://support.google.com/drive/answer/2494822">Google Drive 공유 도움말</a>`,
  },
  {
    id: 15,
    section: 'Chrome·협업·Drive',
    title: '편집할까요, 보기·다운로드만 할까요?',
    subtitle: '파일 종류와 이후 작업을 보고 저장 위치를 고릅니다.',
    layout: 'practice',
    body: `<div class="decision-cards three">
      <article><img src="${LOGO}/google-drive.png" alt="" /><h3>Google Drive · 200GB</h3><p>Google 문서·시트·슬라이드를 함께 편집</p></article>
      <article><img src="${LOGO}/onedrive.svg" alt="" /><h3>OneDrive · 1TB</h3><p>Word·Excel·PowerPoint 작업과 탐색기 연동</p></article>
      <article><img src="${LOGO}/works-drive.svg" alt="" /><h3>WORKS Drive · 500GB</h3><p>완료 자료의 보기·다운로드와 분산 보관</p></article>
    </div>
    <div class="question-flow"><b>공동 편집이 필요한가?</b><i>→</i><b>어떤 문서 형식인가?</b><i>→</i><b>확정 파일인가?</b></div>`,
  },
  {
    id: 16,
    section: '파일 전송·화면 공유·PC 중계',
    title: '02. ‘보내기’와 ‘띄우기’를 구분합니다',
    subtitle: '파일, 화면, 인터넷은 서로 다른 길로 움직입니다.',
    layout: 'section',
    body: `<div class="section-symbols"><span>📄<b>파일 전송</b></span><i>≠</i><span>▣<b>화면 공유</b></span><i>≠</i><span>◉<b>인터넷 공유</b></span></div>`,
  },
  {
    id: 17,
    section: '파일 전송·화면 공유·PC 중계',
    title: '연결 문제는 세 종류입니다',
    layout: 'cards',
    body: `<div class="open-grid three concept-cards">
      <article><span class="big-icon">📄</span><h3>파일 전송</h3><p>파일 한 개를 다른 기기로 보냅니다.</p><small>근거리 공유 · Quick Share · AirDrop</small></article>
      <article><span class="big-icon">▣</span><h3>화면 공유</h3><p>지금 보이는 화면을 다른 디스플레이에 띄웁니다.</p><small>Miracast · Cast · AirPlay</small></article>
      <article><span class="big-icon">◉</span><h3>인터넷 공유</h3><p>기기들이 만날 임시 네트워크를 만듭니다.</p><small>모바일 핫스팟</small></article>
    </div>`,
  },
  {
    id: 18,
    section: '파일 전송·화면 공유·PC 중계',
    title: '기기 조합에 따라 가능한 방식이 다릅니다',
    layout: 'matrix',
    body: `<table class="compat-table">
      <thead><tr><th>송신 기기</th><th>파일 전송</th><th>화면 공유</th><th>주요 수신 조건</th></tr></thead>
      <tbody>
        <tr><th>Windows</th><td>근거리 공유 · Quick Share</td><td>${tag('Miracast')}</td><td>지원 디스플레이 또는 교사 PC 수신</td></tr>
        <tr><th>Android</th><td>Quick Share</td><td>${tag('Smart View', 'teal')} ${tag('Cast', 'teal')}</td><td>기기·앱에 맞는 수신 규격</td></tr>
        <tr><th>Chromebook</th><td>Quick Share</td><td>${tag('Google Cast', 'yellow')}</td><td>Cast 수신기</td></tr>
        <tr><th>iPhone·iPad</th><td>AirDrop</td><td>${tag('AirPlay', 'navy')}</td><td>Apple TV·Mac·지원 수신기</td></tr>
      </tbody>
    </table>
    <aside class="rule-strip">같은 Wi-Fi에 연결됐다는 사실만으로 서로 다른 규격이 호환되지는 않습니다.</aside>`,
  },
  {
    id: 19,
    section: '파일 전송·화면 공유·PC 중계',
    title: '파일 보내기: 근거리 공유·Quick Share·AirDrop',
    layout: 'media-gallery',
    body: `<div class="gallery four quick-share">
      ${img(`${CAP}/quick-share/CAP-QS-OFFICIAL-04_send-step1.webp`, 'Windows Quick Share 파일 선택', '① Windows에서 파일 선택')}
      ${img(`${CAP}/quick-share/CAP-QS-OFFICIAL-05_send-step2.webp`, 'Quick Share 공유 메뉴', '② Quick Share 선택')}
      ${img(`${CAP}/quick-share/CAP-QS-OFFICIAL-06_send-step3.webp`, 'Quick Share 기기 선택', '③ 받을 Android 기기 선택')}
      ${img(`${CAP}/quick-share/CAP-QS-OFFICIAL-07_send-step4.webp`, 'Quick Share 전송 완료', '④ 수신 확인')}
    </div>
    <div class="protocol-strip"><span><b>Windows ↔ Windows</b> 근거리 공유</span><span><b>Android ↔ Windows</b> Quick Share</span><span><b>Apple ↔ Apple</b> AirDrop</span></div>`,
    source: `<a href="https://www.android.com/quick-share/with-windows-pc/">Android Quick Share 공식 안내</a>`,
  },
  {
    id: 20,
    section: '파일 전송·화면 공유·PC 중계',
    title: '화면 띄우기 1: Windows + K',
    subtitle: 'Miracast 지원 디스플레이를 찾아 복제하거나 확장합니다.',
    layout: 'media-compare',
    body: `<div class="two-media">
      ${img(`${CAP}/approved/windows/CAP-WIN-SAFE-04_cast-panel.png`, 'Windows 캐스트 패널', `${kbd('Win + K')} · 연결 대상 선택`)}
      ${img(`${CAP}/samsung/CAP-SAMSUNG-OFFICIAL-04_windows-wireless-display.jpeg`, 'Windows 무선 디스플레이 연결 화면', '송신·수신 장치 모두 Miracast 지원 여부 확인')}
    </div>
    <aside class="rule-strip">${kbd('Win + K')}는 연결 대상을, ${kbd('Win + P')}는 복제·확장 같은 표시 방식을 고릅니다.</aside>`,
  },
  {
    id: 21,
    section: '파일 전송·화면 공유·PC 중계',
    title: '무선 디스플레이가 없다면 먼저 설치합니다',
    layout: 'media-steps',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/approved/public/CAP-PUBLIC-04_optional-feature.png`, 'Windows 선택적 기능의 무선 디스플레이', '웹 설치 파일이 아니라 Windows 선택적 기능')}
      <ol class="action-steps dense">
        <li>${mark(1, '<strong>Windows Update</strong><span>업데이트 확인</span>')}</li>
        <li>${mark(2, '<strong>시스템</strong><span>이 PC에 다른 화면 표시</span>')}</li>
        <li>${mark(3, '<strong>선택적 기능</strong><span>기능 보기</span>')}</li>
        <li>${mark(4, '<strong>무선 디스플레이</strong><span>검색 → 다음 → 설치</span>')}</li>
      </ol>
    </div>
    <aside class="warning-strip">학교 관리 PC에서는 관리자 정책으로 설치가 제한될 수 있습니다. 현장에서 우회하지 말고 담당자에게 확인합니다.</aside>`,
    source: `<a href="https://support.microsoft.com/ko-kr/windows/screen-mirroring-and-projecting-to-your-pc-or-wireless-display">Microsoft 무선 화면 표시 공식 안내</a>`,
  },
  {
    id: 22,
    section: '파일 전송·화면 공유·PC 중계',
    title: '설치 후 교사 PC를 수신기로 준비합니다',
    layout: 'media-compare',
    body: `<div class="two-media">
      ${img(`${CAP}/approved/windows/CAP-WIN-SAFE-02_projection-settings.png`, '이 PC에 화면 표시 설정', '① 수신 조건과 연결 요청 설정')}
      ${img(`${CAP}/approved/windows/CAP-WIN-SAFE-03_receiver-ready.png`, '무선 디스플레이 연결 대기 화면', '② 무선 디스플레이 앱 실행 · 연결 대기')}
    </div>
    <div class="process-line"><span>설정</span><i>→</i><span>앱 실행</span><i>→</i><span>송신 기기에서 연결</span><i>→</i><span>허용</span></div>`,
  },
  {
    id: 23,
    section: '파일 전송·화면 공유·PC 중계',
    title: 'Android: Smart View와 Cast',
    layout: 'media-compare',
    body: `<div class="two-media">
      ${img(`${CAP}/samsung/CAP-SAMSUNG-OFFICIAL-01_smart-view.jpg`, 'Galaxy Smart View 진입 화면', 'Galaxy · Smart View · Miracast 계열')}
      ${img(`${CAP}/samsung/CAP-SAMSUNG-OFFICIAL-03_smart-view-interface.jpg`, 'Galaxy Smart View 인터페이스', '수신 장치를 고르고 화면 비율·연결 상태 확인')}
    </div>
    <aside class="rule-strip">YouTube·Chrome 같은 앱의 Cast 버튼은 Google Cast 수신기를 찾습니다. Smart View와 같은 것으로 보지 않습니다.</aside>`,
    source: `<a href="https://www.samsung.com/us/support/answer/ANS10001896/">Samsung Smart View 공식 안내</a>`,
  },
  {
    id: 24,
    section: '파일 전송·화면 공유·PC 중계',
    title: 'Chromebook: Chrome에서 Cast',
    layout: 'process',
    body: `<div class="browser-cast"><div class="browser-top"><span></span><span></span><span></span><b>Chrome</b><i>⋮</i></div><div class="cast-menu"><strong>전송, 저장, 공유</strong><p>전송…</p><small>소스 · 탭 / 화면 / 파일</small></div></div>
      <ol class="horizontal-steps"><li>Chrome 메뉴</li><li>전송</li><li>소스 선택</li><li>Cast 수신기 선택</li></ol>
      <aside class="rule-strip">Chromebook의 기본 화면 공유 경로는 Google Cast입니다. Miracast 수신기와 동일하게 취급하지 않습니다.</aside>`,
    source: `<a href="https://support.google.com/chromebook/answer/3289520">Google Chromebook 화면 전송 도움말</a>`,
  },
  {
    id: 25,
    section: '파일 전송·화면 공유·PC 중계',
    title: 'iPhone은 Windows 무선 디스플레이에 바로 안 됩니다',
    layout: 'media-compare',
    body: `<div class="two-media">
      ${img(`${CAP}/apple/CAP-IOS-OFFICIAL-01_airplay-mirror.png`, 'iPhone 제어센터의 화면 미러링', '① 제어센터 · 화면 미러링')}
      ${img(`${CAP}/apple/CAP-IOS-OFFICIAL-02_screen-mirroring.png`, 'iPhone의 AirPlay 수신기 선택', '② Apple TV · Mac · AirPlay 수신기 선택')}
    </div>
    <aside class="warning-strip">Windows PC로 중계하려면 별도의 AirPlay 수신 소프트웨어·동글·지원 기기가 필요합니다.</aside>`,
    source: `<a href="https://support.apple.com/ko-kr/102661">Apple AirPlay 공식 안내</a>`,
  },
  {
    id: 26,
    section: '파일 전송·화면 공유·PC 중계',
    title: '같은 Wi-Fi인데 안 보일 때: 모바일 핫스팟',
    layout: 'diagram',
    body: `<div class="hotspot-diagram"><div class="teacher-pc"><span>교사 PC</span><b>모바일 핫스팟</b><small>임시 네트워크 생성</small></div><div class="wifi-waves">)))</div><div class="device-row"><span>노트북</span><span>태블릿</span><span>휴대폰</span></div></div>
      <div class="caution-grid"><p><b>암호</b> 공개 범위를 확인</p><p><b>데이터</b> 사용량 확인</p><p><b>배터리</b> 소모에 주의</p><p><b>주파수</b> 5GHz가 안 보이면 2.4GHz 검토</p></div>
      <aside class="rule-strip">최신 Windows에서는 핫스팟 QR을 보여 줄 수 있지만, 실제 암호와 QR은 연수 자료에 넣지 않습니다.</aside>`,
  },
  {
    id: 27,
    section: '파일 전송·화면 공유·PC 중계',
    title: '현장에서는 이 순서로 판단합니다',
    layout: 'decision-route',
    body: `<ol class="route-six">
      <li><b>1</b><strong>기기 조합</strong><span>Windows · Android · Chromebook · iPhone</span></li>
      <li><b>2</b><strong>전송 규격</strong><span>Miracast · Cast · AirPlay</span></li>
      <li><b>3</b><strong>직접 연결</strong><span>지원되면 바로 연결</span></li>
      <li><b>4</b><strong>교사 PC 중계</strong><span>수신 앱·지원 환경</span></li>
      <li><b>5</b><strong>핫스팟</strong><span>별도 네트워크</span></li>
      <li class="fallback"><b>6</b><strong>유선 대안</strong><span>무선이 어려울 때</span></li>
    </ol>
    <div class="protocol-legend"><span>${tag('Miracast')} Windows·Galaxy</span><span>${tag('Google Cast', 'teal')} Android·Chromebook</span><span>${tag('AirPlay', 'navy')} iPhone·iPad</span></div>`,
  },
  {
    id: 28,
    section: 'SenGPT',
    title: '03. 한 번의 질문을 반복 가능한 일로',
    subtitle: '나만의 에이전트 · 대화 예약 · 워크플로우',
    layout: 'section',
    body: `<div class="section-symbols sengpt"><span>👤<b>에이전트</b><small>반복할 역할</small></span><i>＋</i><span>◷<b>예약</b><small>실행 시각</small></span><i>＋</i><span>⌘<b>워크플로우</b><small>여러 단계</small></span></div>`,
  },
  {
    id: 29,
    section: 'SenGPT',
    title: '대화·에이전트·예약·워크플로우의 차이',
    layout: 'cards',
    body: `<div class="open-grid four mode-cards">
      <article><span class="mode-word">요청</span><h3>일반 대화</h3><p>현재 요청과 대화 맥락</p><small>지금 한 번 실행</small></article>
      <article><span class="mode-word">역할</span><h3>나만의 에이전트</h3><p>모델·프롬프트·파일·도구</p><small>필요할 때 반복</small></article>
      <article><span class="mode-word">시각</span><h3>대화 예약</h3><p>에이전트·요청·반복·결과 전달</p><small>정해진 때 실행</small></article>
      <article><span class="mode-word">단계</span><h3>워크플로우</h3><p>시작 조건·여러 단계·입출력</p><small>수동 또는 조건 실행</small></article>
    </div>`,
  },
  {
    id: 30,
    section: 'SenGPT',
    title: '하나의 사례를 세 가지 기능으로 확장합니다',
    subtitle: '교육정책·디지털교육 주간 브리핑',
    layout: 'diagram',
    body: `<div class="case-map">
      <article class="agent"><b>1</b><h3>나만의 에이전트</h3><p>공식 소식을 찾고<br />교사 관점 브리핑 작성</p></article>
      <div class="branch"><i>↗</i><i>↘</i></div>
      <div class="branch-targets"><article><b>2</b><h3>대화 예약</h3><p>정해진 때 같은 에이전트 실행<br />결과를 이메일로 확인</p></article><article><b>3</b><h3>워크플로우</h3><p>브리핑을 핵심 3줄·영향·<br />확인할 일로 재구성</p></article></div>
    </div>
    <aside class="rule-strip">예약과 워크플로우는 직렬 단계가 아니라 같은 에이전트를 확장하는 서로 다른 경로입니다.</aside>`,
  },
  {
    id: 31,
    section: 'SenGPT',
    title: 'Opus 5를 고르고 마법봉으로 확장합니다',
    layout: 'media-process',
    body: `<div class="sengpt-process">
      <div class="screen-stack">
        ${img(`${CAP}/automated/sengpt-briefing/29_agent-model-opus5.png`, 'SenGPT 에이전트 모델 Claude Opus 5 선택', '실제 제작 모델 · Claude Opus 5', 'primary-screen')}
        ${img(`${CAP}/automated/sengpt-briefing/03_prompt-after-magic-wand.png`, 'SenGPT 마법봉으로 확장된 프롬프트', '마법봉은 초안을 역할·절차·제약·형식으로 확장', 'secondary-screen')}
      </div>
      <ol class="vertical-rail"><li>Opus 5</li><li>이름·설명</li><li>짧은 프롬프트</li><li class="magic">마법봉</li><li>대화 시작 가이드 2~3개</li></ol>
    </div>
    <div class="starter-guides"><span>최근 7일 소식 브리핑</span><span>서울시교육청 확인할 일</span><span>신청·연수 마감 체크리스트</span></div>`,
    source: `<a href="https://wrks.ai/guides/agent/00-create-agent.html">SenGPT 나만의 에이전트 공식 가이드</a>`,
  },
  {
    id: 32,
    section: 'SenGPT',
    title: '하네스와 루프로 짧게 검토합니다',
    subtitle: '긴 문장을 새로 쓰지 않고, 결과를 고정할 조건과 검증 절차만 잡습니다.',
    layout: 'harness-loop',
    body: `<div class="harness-loop">
      <section class="harness"><h3>하네스 · 흔들리지 않게 고정</h3>
        <p><b>역할</b> 교사를 위한 공식 정보 브리핑</p><p class="editable"><b>주제</b> 교육정책·디지털교육</p><p class="editable"><b>공식 출처</b> 교육부·서울시교육청·KERIS</p><p><b>성공 기준</b> 원문·기관명·게시일·링크, 최대 3건</p><p class="editable"><b>결과 형식</b> 한눈에 보기·영향·확인할 일</p><p><b>금지</b> 추측·개인정보 포함</p>
      </section>
      <section class="loop"><h3>루프 · 부족하면 다시 확인</h3><ol><li>공식 사이트 검색</li><li>기관·게시일·링크 검증</li><li>부족하면 검색어 변경</li><li>억지로 건수 채우지 않기</li><li>중복·개인정보 최종 점검</li></ol></section>
    </div>
    <aside class="warning-strip">실습에서는 노란색 세 칸만 바꾸고 한 번 실행한 뒤 조건 충족 여부를 확인합니다.</aside>`,
  },
  {
    id: 33,
    section: 'SenGPT',
    title: '에이전트는 서비스와 연결될 때 할 수 있는 일이 넓어집니다',
    subtitle: '필요한 도구만 최대 5개 선택합니다.',
    layout: 'tools',
    body: `<div class="tool-columns">
      <article><h3>계정 연결 서비스</h3><p>M365 메일·일정</p><p>Google Calendar</p><p>Notion</p><p>M365 파일·회의실</p><p>Gmail · Google Drive</p></article>
      <article><h3>전문 정보 도구</h3><p>국가법령정보</p><p>국가통계포털</p><p>한국은행 통계·전자공시</p><p>나라장터·국회 의안정보</p></article>
      <article><h3>내부 도구</h3><p>코드 실행</p><p class="focus-tool">웹 검색</p><p>시각화·차트</p><p>문서 요약</p></article>
    </div>
    <div class="status-rail"><span>${tag('연결됨', 'teal')} 사용 가능</span><span>${tag('만료됨', 'yellow')} 다시 인증</span><span>${tag('승인 필요', 'navy')} 기관 정책 확인</span></div>`,
  },
  {
    id: 34,
    section: 'SenGPT',
    title: '이 사례에는 웹 검색 하나만 연결합니다',
    layout: 'media-gallery',
    body: `<div class="gallery three sengpt-results">
      ${img(`${CAP}/automated/sengpt-briefing/10_agent-sample-result.png`, '웹 검색 도구가 없어 최신 정보를 확인하지 못한 결과', '1 · 최신 정보 확인 실패')}
      ${img(`${CAP}/automated/sengpt-briefing/11_web-search-tool-corrected.png`, 'SenGPT 웹 검색 도구 선택', '2 · 웹 검색만 켜기')}
      ${img(`${CAP}/automated/sengpt-briefing/14_agent-web-result.png`, '공식 링크가 포함된 실제 브리핑 결과', '3 · 공식 원문 결과 확인')}
    </div>
    <div class="verify-rail"><span>기관명</span><span>게시일</span><span>원문 링크</span><span>기간·건수</span><span>교사에게 미치는 영향</span></div>`,
  },
  {
    id: 35,
    section: 'SenGPT',
    title: '예약은 연결 서비스를 새로 고르는 기능이 아닙니다',
    layout: 'media-steps',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/approved/public/CAP-PUBLIC-03_schedule-filled.png`, 'SenGPT 대화 예약 입력 화면', '에이전트·요청·실행 조건·이메일 결과')}
      <div class="schedule-flow"><p><b>에이전트</b><span>프롬프트 · 참고 파일 · 연결 도구</span></p><i>↓</i><p><b>대화 예약</b><span>시각 · 반복 · 요청 · 수신자</span></p><i>↓</i><p><b>결과 확인</b><span>대화 또는 이메일</span></p></div>
    </div>
    <aside class="rule-strip">연결이 만료된 에이전트는 예약 실행에서도 도구 사용이 실패할 수 있습니다.</aside>`,
  },
  {
    id: 36,
    section: 'SenGPT',
    title: '예약 결과는 이렇게 메일로 옵니다',
    layout: 'media-compare',
    body: `<div class="two-media email-result">
      ${img(`${CAP}/automated/sengpt-briefing/27_schedule-email-arrived.png`, 'SenGPT 예약 결과 메일 제목', '① 제목에서 예약 실행 결과 확인')}
      ${img(`${CAP}/automated/sengpt-briefing/28_schedule-email-body.png`, 'SenGPT 예약 결과 메일 본문', '② 완료 상태·브리핑·공식 원문 링크 확인')}
    </div>
    <div class="verify-rail"><span>실행 완료</span><span>실행 조건</span><span>브리핑 본문</span><span>공식 원문 링크</span></div>`,
  },
  {
    id: 37,
    section: 'SenGPT',
    title: '예약 공유 전 개인정보와 공개 범위를 확인합니다',
    layout: 'media-warning',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/sengpt-updates/CAP-SEN-OFFICIAL-102_scheduled-email-recipients.png`, 'SenGPT 예약 이메일 수신자 설정', '수신자는 최대 5명 · 공유 범위 변화 주의')}
      <div class="privacy-rules"><p><b>1</b> 수신자 주소를 다시 확인</p><p><b>2</b> 공유 시 대화 공개 범위를 확인</p><p><b>3</b> 학생·교직원 개인정보를 요청과 결과에 넣지 않기</p><p><b>4</b> 외부 발송은 대상과 내용을 실행 전에 검토</p></div>
    </div>`,
    source: `<a href="https://docs.wrks.ai/">SenGPT 공식 문서</a>`,
  },
  {
    id: 38,
    section: 'SenGPT',
    title: '워크플로우는 이미 만든 에이전트를 이어 씁니다',
    layout: 'media-process',
    body: `<div class="workflow-map"><article><b>1</b><h3>브리핑 에이전트</h3><p>공식 소식 검색·검증·브리핑</p></article><i>→</i><article><b>2</b><h3>일반 AI 재구성</h3><p>핵심 3줄 · 교사 영향 · 확인할 일</p></article><i>→</i><article><b>✓</b><h3>실행 결과</h3><p>텍스트로 확인</p></article></div>
      ${img(`${CAP}/automated/sengpt-briefing/23_workflow-corrected.png`, '수정 완료된 SenGPT 워크플로우', '에이전트 → 일반 AI 두 단계', 'workflow-screen')}`,
  },
  {
    id: 39,
    section: 'SenGPT',
    title: '[선택] AI 도우미에게 자연어로 구조를 요청합니다',
    layout: 'media-prompt',
    body: `<div class="media-split wide-left">
      ${img(`${CAP}/automated/sengpt-briefing/19_workflow-ai-request.png`, 'SenGPT 워크플로우 AI 도우미 요청', '시작 조건·에이전트·결과 형식·금지할 외부 작업')}
      <div class="prompt-summary"><h3>요청에 반드시 넣을 것</h3><p>시작 조건: <b>바로 실행</b></p><p>사용할 에이전트: <b>주간 브리핑</b></p><p>결과: <b>핵심 3줄·영향·체크리스트</b></p><p>금지: <b>메일·Notion·문서·파일 변경</b></p></div>
    </div>`,
  },
  {
    id: 40,
    section: 'SenGPT',
    title: '[선택] 자동 생성 결과도 반드시 검토합니다',
    layout: 'media-compare',
    body: `<div class="two-media">
      ${img(`${CAP}/automated/sengpt-briefing/20_workflow-ai-built.png`, '요청하지 않은 Notion 단계가 포함된 1차 워크플로우', '1차 결과 · 요청하지 않은 Notion 단계')}
      ${img(`${CAP}/automated/sengpt-briefing/22_workflow-correction-request.png`, 'SenGPT 워크플로우 수정 요청', '수정 요청 · Notion 제거, 에이전트→일반 AI')}
    </div>
    <aside class="warning-strip">자연어 자동 생성은 초안입니다. 외부 전송·문서 작성·파일 변경 단계가 생기지 않았는지 먼저 확인합니다.</aside>`,
  },
  {
    id: 41,
    section: 'SenGPT',
    title: '[선택] 수정된 흐름을 저장하고 실행합니다',
    layout: 'media-gallery',
    body: `<div class="gallery three workflow-final">
      ${img(`${CAP}/automated/sengpt-briefing/23_workflow-corrected.png`, '수정된 두 단계 워크플로우', '① 두 단계 구조 확인')}
      ${img(`${CAP}/automated/sengpt-briefing/24_workflow-enabled.png`, 'SenGPT 워크플로우 사용 설정', '② 저장·사용 ON·수동 실행')}
      ${img(`${CAP}/automated/sengpt-briefing/26_workflow-run-result.png`, 'SenGPT 워크플로우 실행 결과', '③ 결과와 실행 상태 확인')}
    </div>`,
  },
  {
    id: 42,
    section: '마무리',
    title: '이 상황에서는 무엇을 선택할까요?',
    subtitle: '도구 이름보다 선택 이유를 한 문장으로 말해 봅니다.',
    layout: 'quiz',
    revealCount: 6,
    body: `<div class="quiz-grid">
      <article><h3>나에게 링크와 짧은 메모 보내기</h3><div class="answer" data-reveal="1"><b>나와의 메시지</b><span>가장 빠르게 나에게 전달</span></div></article>
      <article><h3>공식적으로 전달하고 기록 남기기</h3><div class="answer" data-reveal="2"><b>메일</b><span>제목·수신자·발송 기록</span></div></article>
      <article><h3>모두가 다시 찾아볼 공지와 자료</h3><div class="answer" data-reveal="3"><b>게시판</b><span>축적·검색·권한·필독</span></div></article>
      <article><h3>파일을 어디에 둘까요?</h3><div class="answer" data-reveal="4"><b>편집 방식으로 결정</b><span>Google / OneDrive / WORKS Drive</span></div></article>
      <article><h3>화면이 서로 보이지 않습니다</h3><div class="answer" data-reveal="5"><b>규격부터 확인</b><span>Miracast / Cast / AirPlay</span></div></article>
      <article><h3>반복 역할·정해진 시각·여러 단계</h3><div class="answer" data-reveal="6"><b>에이전트 · 예약 · 워크플로우</b><span>무엇을 반복할지로 구분</span></div></article>
    </div>`,
  },
  {
    id: 43,
    section: '선택형 보너스 팁',
    title: '[선택] Win+Shift+S, 캡처 뒤에 할 일이 더 중요합니다',
    layout: 'media-gallery',
    body: `<ol class="capture-flow"><li>${kbd('Win + Shift + S')}<span>필요한 영역</span></li><li>알림 열기<span>편집 화면</span></li><li>텍스트 작업<span>복사·가리기</span></li><li>도형<span>투명 면·빨간 테두리</span></li><li>저장<span>스크린샷 폴더</span></li></ol>
      <div class="gallery three snipping">
        ${img(`${CAP}/official/snipping-tool/CAP-SNIP-OFFICIAL-05_capture-bar.png`, 'Microsoft 캡처 도구 캡처 방식 선택', '캡처 방식')}
        ${img(`${CAP}/official/snipping-tool/CAP-SNIP-OFFICIAL-01_text-actions.png`, 'Microsoft 캡처 도구 텍스트 작업', '모든 텍스트 복사 · 빠른 가리기')}
        ${img(`${CAP}/official/snipping-tool/CAP-SNIP-OFFICIAL-04_shape-opacity.png`, 'Microsoft 캡처 도구 도형 투명도', '도형 색 · 투명도 · 크기')}
      </div>
      <div class="feature-rail"><span>${kbd('Win + Shift + R')} 화면 일부 녹화</span><span>QR 링크 인식은 업데이트된 앱에서 확인</span></div>`,
    source: `<a href="https://support.microsoft.com/en-us/windows/apps/use-snipping-tool-to-capture-screenshots">Microsoft 캡처 도구 공식 안내</a>`,
  },
  {
    id: 44,
    section: '선택형 보너스 팁',
    title: '[선택] 교실에서 바로 쓰는 Windows 단축키',
    layout: 'shortcuts',
    body: `<div class="shortcut-grid">
      <p>${kbd('Win+Shift+S')}<b>화면 일부 캡처</b><span>설정 메뉴의 필요한 부분만 저장</span></p>
      <p>${kbd('Win+Shift+R')}<b>화면 일부 녹화</b><span>앱 사용 절차 기록</span></p>
      <p>${kbd('Win+V')}<b>클립보드 기록</b><span>복사한 링크·문구 재사용</span></p>
      <p>${kbd('Win+Z')}<b>스냅 레이아웃</b><span>자료와 설명 화면 나란히</span></p>
      <p>${kbd('Win+H')}<b>음성 입력</b><span>짧은 안내·메모 입력</span></p>
      <p>${kbd('Win+K')}<b>Cast 연결</b><span>Miracast 수신기 찾기</span></p>
      <p>${kbd('Win+P')}<b>투사 모드</b><span>복제·확장 선택</span></p>
      <p>${kbd('Win+Shift+←/→')}<b>다른 모니터로</b><span>창을 전자칠판 쪽으로 이동</span></p>
      <p>${kbd('Win+D')}<b>바탕 화면</b><span>열린 창 잠시 숨기기</span></p>
      <p>${kbd('Win+L')}<b>PC 잠금</b><span>공용 공간에서 자리 비우기</span></p>
    </div>`,
    source: `<a href="https://support.microsoft.com/ko-kr/windows/windows%EC%9D%98-%EB%B0%94%EB%A1%9C-%EA%B0%80%EA%B8%B0-%ED%82%A4-dcc61a57-8ff0-cffe-9796-cb9706c75eec">Microsoft Windows 바로 가기 키</a>`,
  },
  {
    id: 45,
    section: '선택형 보너스 팁',
    title: '[선택] 25H2라고 모든 PC의 화면이 같지는 않습니다',
    layout: 'cards',
    body: `<div class="open-grid three update-columns">
      <article><h3>일반 PC에서 확인할 후보</h3><p>Windows Share 편집·압축</p><p>파일 탐색기 공유·탭 개선</p><p>Snap 안내·단축키 힌트</p></article>
      <article><h3>Copilot+ PC 전용 후보</h3><p>Click to Do</p><p>자연어 Windows 검색</p><p>설정 에이전트</p></article>
      <article><h3>화면이 다른 이유</h3><p>앱 버전·순차 배포</p><p>Copilot+ 하드웨어</p><p>언어·지역·학교 정책</p></article>
    </div>
    <aside class="rule-strip">25H2는 새 기능이 한날한시에 모든 PC에서 켜지는 업데이트가 아닙니다.</aside>`,
    source: `<a href="https://learn.microsoft.com/windows/whats-new/whats-new-windows-11-version-25h2">Microsoft Learn · Windows 11 25H2</a>`,
  },
  {
    id: 46,
    section: '선택형 보너스 팁',
    title: '[선택] PowerToys에서 ZoomIt을 켭니다',
    layout: 'zoomit',
    body: `<div class="zoomit-layout">
      ${img(`${CAP}/official/powertoys/CAP-PT-OFFICIAL-01_zoomit-demo-frame-2.png`, 'Microsoft ZoomIt 확대와 그리기 예시', '작은 설정 화면을 확대하고 바로 표시')}
      <div class="zoomit-shortcuts"><p>${kbd('Ctrl+1')}<b>화면 확대</b><span>휠로 배율 · 클릭하면 그리기</span></p><p>${kbd('Ctrl+2')}<b>확대 없이 그리기</b><span>R 빨간 펜 · E 모두 지우기</span></p><p>${kbd('Ctrl+4')}<b>실시간 확대</b><span>확대 상태에서 화면 조작</span></p><p>${kbd('Ctrl+5')}<b>화면 녹화</b><span>다시 눌러 종료</span></p></div>
    </div>
    <div class="install-links"><a href="https://aka.ms/getPowertoys">PowerToys · Microsoft Store<br /><small>aka.ms/getPowertoys</small></a><a href="https://aka.ms/installpowertoys">PowerToys · 공식 GitHub<br /><small>aka.ms/installpowertoys</small></a><a href="https://learn.microsoft.com/sysinternals/downloads/zoomit">ZoomIt · 독립 실행판<br /><small>learn.microsoft.com/sysinternals/downloads/zoomit</small></a></div>`,
  },
  {
    id: 47,
    section: '선택형 보너스 팁',
    title: '[선택] 교사에게 유용한 PowerToys 네 가지',
    layout: 'powertoys',
    body: `<div class="powertoys-grid">
      <article>${img(`${CAP}/official/powertoys/CAP-PT-OFFICIAL-02_find-my-mouse-frame-2.png`, 'PowerToys Find My Mouse', '')}<h3>Mouse Utilities</h3><p>${kbd('Ctrl')} 두 번 · ${kbd('Win+Shift+H')}</p><small>커서 찾기·클릭 강조</small></article>
      <article><div class="text-extractor-demo"><span>이미지 속 문장</span><i>→</i><b>클립보드</b></div><h3>Text Extractor</h3><p>${kbd('Win+Shift+T')}</p><small>영역 속 글자 복사 · OCR 재확인</small></article>
      <article>${img(`${CAP}/official/powertoys/CAP-PT-OFFICIAL-04_always-on-top.png`, 'PowerToys Always On Top', '')}<h3>Always On Top</h3><p>${kbd('Win+Ctrl+T')}</p><small>체크리스트·연결 창 고정</small></article>
      <article>${img(`${CAP}/official/powertoys/CAP-PT-OFFICIAL-05_awake-settings.png`, 'PowerToys Awake 설정', '')}<h3>Awake</h3><p>트레이에서 활성화</p><small>발표·업로드 중 화면 꺼짐 방지</small></article>
    </div>
    <aside class="rule-strip">Text Extractor와 캡처 도구의 텍스트 작업은 목적이 겹칩니다. 둘 중 편한 하나만 사용해도 됩니다.</aside>`,
    source: `<a href="https://learn.microsoft.com/windows/powertoys/">Microsoft PowerToys 공식 문서</a>`,
  },
  {
    id: 48,
    section: '마무리',
    title: '내일 바로 할 세 가지',
    layout: 'final',
    body: `<div class="final-actions"><p><b>1</b> 업무용 Chrome 프로필 점검</p><p><b>2</b> Drive 공유 권한 한 번 확인</p><p><b>3</b> SenGPT 에이전트 역할 한 문장 작성</p></div>
      <div class="final-qr-pair"><img src="${BRAND}/48_post_training_diagnosis_qr.png" alt="사후 역량진단 QR 코드" /><img src="${BRAND}/48_satisfaction_survey_qr.png" alt="만족도 조사 QR 코드" /></div>`,
  },
];
