import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../components/Form';
import { path } from '../constants';
import { getAccessToken } from '../utils';

function SignInPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = getAccessToken();
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
