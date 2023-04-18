# Wanted pre onboarding frontend

### 스택
- typescript, axios, react-router, tailwind, eslint , prettier

### 기능
- 회원가입,로그인,로그아웃,투두 CRUD

### 배포
[배포링크](https://wanted-pre-onboarding-frontend-git-main-seieunyoo.vercel.app/)

### 디렉토리 구조
```
 📦src
 ┣ 📂apis
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂todos
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜todos.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📜client.ts
 ┣ 📂components
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜AuthForm.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Input
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜Input.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┗ 📂ToDo
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜ToDoInput.tsx
 ┃ ┃ ┗ 📜ToDoItem.tsx
 ┣ 📂constants
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜localStorageKey.ts
 ┃ ┗ 📜path.ts
 ┣ 📂hooks
 ┃ ┗ 📜useInput.ts
 ┣ 📂pages
 ┃ ┣ 📜SignInPage.tsx
 ┃ ┣ 📜SignUpPage.tsx
 ┃ ┗ 📜ToDosPage.tsx
 ┣ 📂types
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜types.ts
 ┣ 📂utils
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜localStorage.ts
 ┃ ┗ 📜vaildation.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
 ```