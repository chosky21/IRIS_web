# 연구실 소식(Lab News) 자동 연동 설정

Lab News 카드는 두 파일에서 내용을 가져옵니다.

| 파일 | 내용 | 갱신 방법 |
|---|---|---|
| `js/ig-posts.js` | Instagram 게시물 (2020년 이후) | GitHub Action이 매일 06:00(KST) 자동 갱신 |
| `js/posts.js` | LinkedIn 게시물 등 직접 추가하는 소식 | 파일을 직접 수정 |

카드를 누르면 원래 게시물(Instagram/LinkedIn)로 이동합니다.

## 1. Instagram 계정을 프로페셔널 계정으로 전환 (한 번만)
Instagram 앱 → 프로필 → ☰ → 설정 → **계정 유형 및 도구** → **프로페셔널 계정으로 전환** → "크리에이터" 또는 "비즈니스" 선택.
(Facebook 페이지 연결은 필요 없습니다.)

## 2. Meta 개발자 앱 만들기 (한 번만)
1. https://developers.facebook.com 에 로그인 → **내 앱** → **앱 만들기**
2. 사용 사례에서 **"Instagram에서 메시지 및 콘텐츠 관리"** 선택 → 앱 이름(예: IRIS Lab Site) 입력 → 만들기
3. 앱 대시보드 → **Instagram** → **Instagram 로그인을 통한 API 설정**
4. **"액세스 토큰 생성"** 항목에서 **계정 추가** → @iris.unist 로 로그인·허용
5. 생성된 **액세스 토큰을 복사**합니다 (60일 동안 유효한 장기 토큰).

> 계정 추가가 안 되면: 앱 대시보드 → 앱 역할 → 역할 → Instagram 테스터로 @iris.unist 추가 후,
> Instagram 웹(설정 → 앱 및 웹사이트 → 테스터 초대)에서 수락하고 다시 시도하세요.

## 3. GitHub에 토큰 저장 (한 번만)
1. https://github.com/chosky21/IRIS_web → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** → Name: `IG_TOKEN`, Secret: 복사한 토큰 → Add secret
3. **Settings** → **Actions** → **General** → 맨 아래 **Workflow permissions** → **Read and write permissions** 선택 → Save

## 4. 첫 동기화 실행
저장소 → **Actions** 탭 → (처음이면 "I understand… enable" 클릭) → **Sync Instagram posts to Lab News** → **Run workflow**.
1~2분 뒤 `js/ig-posts.js`와 `assets/news/` 에 게시물이 생기고, 몇 분 안에 홈페이지에 반영됩니다.
이후에는 매일 자동으로 새 게시물을 가져옵니다.

## 5. 토큰 자동 연장 (선택, 권장)
Instagram 토큰은 60일마다 만료됩니다. 자동으로 연장하려면:
1. https://github.com/settings/personal-access-tokens/new → Fine-grained token
2. Repository access: **Only select repositories → IRIS_web**
3. Permissions → Repository permissions → **Secrets: Read and write** → Generate token → 복사
4. 3번과 같은 화면에서 Secret 하나 더 추가: Name `GH_PAT`, Secret: 방금 복사한 토큰

이렇게 하면 매일 동기화할 때 Instagram 토큰도 같이 연장됩니다.
`GH_PAT`을 넣지 않으면 60일마다 2-4~2-5 단계로 새 토큰을 받아 `IG_TOKEN`을 바꿔 주세요.

## LinkedIn 게시물 추가 (수동)
LinkedIn 회사 페이지는 공개 API가 없어 자동 연동이 불가능합니다.
`js/posts.js` 를 열어 예시처럼 한 줄씩 추가하세요. 사진은 `assets/news/` 에 올리고 경로를 `image`에 적으면 됩니다.
링크만 Claude에게 보내 주셔도 정리해 드립니다.
