# Portfolio Static Pages

PDF 포트폴리오를 정적 HTML로 재구현한 프로젝트입니다.

## Structure

```text
.
├─ index.html
├─ projects/
│  ├─ puppyrun.html
│  └─ algoboza.html
├─ assets/
│  ├─ css/
│  │  ├─ base.css
│  │  ├─ home.css
│  │  └─ project-detail.css
│  ├─ js/
│  │  └─ main.js
│  └─ images/
│     └─ projects/
│        ├─ puppyrun/
│        └─ algoboza/
└─ reference/
```

## File Roles

- `index.html`: 포트폴리오 홈입니다.
- `projects/{project}.html`: 프로젝트별 상세 페이지입니다.
- `assets/css/base.css`: 전체 페이지 공통 토큰, 기본 스타일, 버튼 스타일입니다.
- `assets/css/home.css`: 홈 화면 전용 레이아웃입니다.
- `assets/css/project-detail.css`: 프로젝트 상세 페이지 공통 레이아웃입니다.
- `assets/js/main.js`: 이메일 복사 등 공통 인터랙션입니다.
- `assets/images/projects/{project}/`: 프로젝트별 실제 사용 이미지입니다.
- `reference/`: PDF에서 추출한 참고 이미지입니다. 배포 화면에서는 직접 사용하지 않습니다.

## Adding A Project

1. `projects/new-project.html`을 추가합니다.
2. 실제 화면에서 쓰는 이미지는 `assets/images/projects/new-project/`에 둡니다.
3. 상세 페이지 레이아웃은 `assets/css/project-detail.css`를 재사용합니다.
4. 프로젝트별로만 필요한 스타일이 커질 때만 별도 CSS를 추가합니다.
