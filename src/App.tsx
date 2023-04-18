import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ToDosPage from './pages/ToDosPage';
import { PATH } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/*" element={<SignUpPage />} />
        <Route path={PATH.SIGNUP} element={<SignUpPage />} />
        <Route path={PATH.SIGNIN} element={<SignInPage />} />
        <Route path={PATH.TODO} element={<ToDosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
