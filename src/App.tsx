import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ToDosPage from './pages/ToDosPage';
import { path } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/*" element={<SignUpPage />} />
        <Route path={path.SIGNUP} element={<SignUpPage />} />
        <Route path={path.SIGNIN} element={<SignInPage />} />
        <Route path={path.TODO} element={<ToDosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
