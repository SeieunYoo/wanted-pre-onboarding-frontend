import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

function SignInPage() {
  return (
    <>
      <h3 className="font-bold">로그인</h3>
      <Form formType="signin" />
      <Link to="/signin">
        <span>회원가입 하실래요?</span>
      </Link>
    </>
  );
}

export default SignInPage;
