import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthForm } from '../components/Form';
import { PATH } from '../constants';
import { getAccessToken } from '../utils';
import { Header } from '../components/Header';

function SignInPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      navigate(PATH.TODO);
    }
  }, []);
  
  return (
    <>
      <Header path="signin"/>
      <AuthForm formType="signin" />
      <Link to={PATH.SIGNUP}>
        <span>회원가입 하실래요?</span>
      </Link>
    </>
  );
}

export default SignInPage;
