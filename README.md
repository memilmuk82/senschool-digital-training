# 학교로 찾아가는 디지털 직무연수 - 센스쿨 활용

2026 중부 중등 학교로 찾아가는 AI·디지털 역량 강화 직무연수용 웹 슬라이드입니다. 별도 프레젠테이션 프로그램이나 프레임워크 없이 HTML, CSS, JavaScript로만 동작합니다.

## 발표 방법

`index.html`을 웹 서버로 열면 첫 장에서 시작합니다. 주소 끝의 `#/slide/숫자`로 특정 슬라이드를 바로 열 수 있습니다.

- `→`, `Space`, `PageDown`: 다음 단계 또는 다음 장
- `←`, `PageUp`: 이전 단계 또는 이전 장
- `Home`, `End`: 첫 장, 마지막 장
- `F`: 전체화면
- `O`: 전체 슬라이드 개요
- `P`: PDF 출력
- `?`: 단축키 도움말

화면 아래 버튼으로도 이동, 개요, 전체화면, PDF 출력을 실행할 수 있습니다.

## PDF 저장

슬라이드 아래의 **PDF 출력** 버튼 또는 `P` 키를 누른 뒤 브라우저 인쇄 창에서 **PDF로 저장**을 선택합니다. 인쇄용 화면에는 단계별로 공개되는 정답도 모두 표시됩니다.

## GitHub Pages

`main` 브랜치에 변경 사항을 올리면 `.github/workflows/pages.yml`이 공개에 필요한 파일만 `_site`에 모아 GitHub Pages로 배포합니다. 원본 로그인 캡처와 작업용 파일은 배포 결과물에 포함되지 않습니다.

저장소의 **Settings → Pages → Build and deployment → Source**가 **GitHub Actions**로 설정되어 있어야 합니다.

## 네이버웍스 기반 학교 업무 효율화

완성된 90분 연수 슬라이드는 `naver-works-training/` 경로에 함께 배포합니다.

- 웹 슬라이드: `naver-works-training/`
- PPTX: `naver-works-training/downloads/네이버웍스_기반_학교_업무_효율화_90분_연수_완성본.pptx`

## 내용 수정

- 슬라이드 내용·순서: `slides-data.js`
- 디자인·인쇄 스타일: `styles.css`
- 이동·단축키·개요·출력: `app.js`
- 페이지 배포 파일 선별: `scripts/build-pages.mjs`
