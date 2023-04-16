import React from 'react';
import Form from '../components/Form';

function SignInPage() {
  return (
    <>
      <h3 className="font-bold">로그인</h3>
      <Form formType="signin" />
    </>
  );
}

export default SignInPage;
