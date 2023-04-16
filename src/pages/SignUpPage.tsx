import Form from '../components/Form';

function SignUpPage() {
  return (
    <>
      <h3 className="font-bold">회원가입</h3>
      <Form formType={'signup'} />
    </>
  );
}

export default SignUpPage;
