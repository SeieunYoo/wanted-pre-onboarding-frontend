import React, { useEffect } from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import { localStorageKey, path } from '../constants';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem(localStorageKey.ACCESS_TOKEN);
    if (accessToken) {
      navigate(path.TODO);
    }
  }, []);
  return (
    <>
      <h3 className="font-bold">로그인</h3>
      <Form formType="signin" />
      <Link to={path.SIGNUP}>
        <span>회원가입 하실래요?</span>
      </Link>
    </>
  );
}

export default SignInPage;
