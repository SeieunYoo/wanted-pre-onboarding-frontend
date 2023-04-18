# Wanted pre onboarding frontend

### 스택
- react, typescript, axios, react-router, tailwind, eslint , prettier

### 기능
- 회원가입,로그인,로그아웃,투두 CRUD

### 프로젝트의 실행 방법
```
git clone https://github.com/SeieunYoo/wanted-pre-onboarding-frontend.git
cd wanted-pre-onboarding-frontend
npm install & npm start
```
### 배포
[배포링크](https://wanted-pre-onboarding-frontend-git-main-seieunyoo.vercel.app/)

### 데모영상 
![IMG_0575 (5)](https://user-images.githubusercontent.com/101736358/232882542-427d62c4-9d67-4af8-a526-49bf4c4cfd60.gif)

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
