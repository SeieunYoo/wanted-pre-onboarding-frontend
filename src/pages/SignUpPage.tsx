import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Form from '../components/Form';
import { PATH } from '../constants';
import { getAccessToken } from '../utils';
import { Header } from '../components/Header';

function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      navigate(PATH.TODO);
    }
  }, []);

  return (
    <>
      <Header path="signup" />
      <Form formType="signup" />
      <Link to={PATH.SIGNIN}>
        <span>로그인 하러가기</span>
      </Link>
    </>
  );
}

export default SignUpPage;
