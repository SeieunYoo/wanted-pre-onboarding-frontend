import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Form from '../components/Form';
import { path } from '../constants';
import { getAccessToken } from '../utils';

function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      navigate(path.TODO);
    }
  }, []);

  return (
    <>
      <h3 className="font-bold">회원가입</h3>
      <Form formType={'signup'} />
      <Link to={path.SIGNIN}>
        <span>로그인 하러가기</span>
      </Link>
    </>
  );
}

export default SignUpPage;
