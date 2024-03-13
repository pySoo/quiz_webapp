# Quiz Webapp

## 🌐 Website

[웹사이트 이동](https://classting-assignment-pysoo.vercel.app)

<br />

## 🚀 Getting Started

```bash
yarn install
```

```bash
yarn dev
```

```bash
yarn test
```

<br />

## 📈 설계 방식 및 개선 사항

## 퀴즈 진행 플로우

### 퀴즈 진행 중 예외 사항 처리

- 시작하기 버튼을 누르면 **`/quiz/0`** url로 진입하고 API 데이터를 받아옵니다.
- 데이터는 **로컬 스토리지에 저장**하여 새로고침 시에도 퀴즈를 이어서 진행할 수 있습니다.
- 이전 페이지로 이동 시 **이전에 선택한 Button을 active 상태**로 표시합니다.
- 뒤로가기 시 재선택을 하는 경우를 고려하여 filter 함수를 통해 **기존의 답을 제거하고 새로운 답을 추가**합니다.
- 시작 페이지가 아니고 **퀴즈 데이터가 존재하지 않는 url인 경우**, alert 안내 후 **시작 페이지로 이동**합니다.

### 퀴즈 종료 후 예외 사항 처리

- 퀴즈 종료 후 **뒤로가기를 통해 이전 페이지로 진입**하는 경우 퀴즈가 종료됨을 안내하고 **시작 페이지로 이동**합니다.
- **퀴즈 데이터가 없는 상태**로 종료 페이지에 진입한 경우 (url을 직접 입력한 경우) alert 안내 후 **시작 페이지로 이동**합니다.

<br />

## 테스트 코드

- jest를 이용하여 **퀴즈 정답 개수와 퀴즈 정오답 비율을 검증**하는 단위 테스트 코드를 작성하였습니다.
- UI의 경우 **변경될 가능성이 높기 때문에** 테스트 코드의 안정성이 떨어질 가능성이 있다고 생각하여 jest를 이용하여 단위 테스트 코드를 작성하게 되었습니다.
- 따라서 **불변성을 보장하는 순수 함수** 위주의 단위 테스트를 진행해보았습니다.

<br />

## 성능 개선

### Suspense, lazy를 이용한 코드 스플리팅

- CSR의 **초기 로딩 시간이 긴 문제를 개선** 하기 위해 Route 페이지 별로 코드 스플리팅을 적용하여 **번들 사이즈를 줄였습니다.**

### 빌드 시간 단축을 위한 Vite 번들링

- **빌드 속도가 느린 CRA의 단점을 개선** 하기 위해 번들링 도구로 Vite를 선택하였습니다.
- Vite의 **esbuild와 브라우저의 ESM을 이용한 번들링**을 활용하여 개발 속도를 개선했습니다.

<br />

## **에러 핸들링**

### ErrorBoundary를 활용한 에러 상황 선택지 제공

- ErrorBoundary를 이용하여 사용자에게 **API 재호출** 또는 **메인 페이지로 이동** 하는 두 가지 선택지를 주었습니다.

### Axios Interceptors를 이용한 API 에러 처리

- Axios interceptors를 이용하여 axios 에러 핸들링을 한 곳에서 처리하였습니다. 공식 문서를 참고하여 **API response code에 따라** 다른 에러 메세지를 출력합니다.

<br />

## ⚒️ 사용 기술

|        Category        |                                                                                                                                                       Technologies                                                                                                                                                        |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **프레임워크 및 언어** |                                                  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black">                                                  |
|     **빌드 도구**      |                                                                                                          <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">                                                                                                           |
|     **상태 관리**      |                                                <img src="https://img.shields.io/badge/React_query-FF4154?&style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/zustand-ddDF1E?&style=for-the-badge&logo=zustand&logoColor=white">                                                 |
|      **스타일링**      |                                                                                               <img src="https://img.shields.io/badge/Styled_Components-D26AC2?&style=for-the-badge&logo=StyledComponents&logoColor=white">                                                                                                |
|     **코드 관리**      | <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> |

<br />

## 📦 폴더 구조

```
📦 src
├── 📂 apis
|── 📂 components
|   └── 📂 Shared
├── 📂 hooks
├── 📂 pages
├── 📂 routes
├── 📂 store
├── 📂 styles
├── 📂 test
├── 📂 types
├── 📂 utils
└── main.tsx
```
