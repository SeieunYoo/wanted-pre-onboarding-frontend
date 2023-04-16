import Form from '../components/Form';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <>
      <h3 className="font-bold">회원가입</h3>
      <Form formType={'signup'} />
      <Link to="/signin">
        <span>로그인 하러가기</span>
      </Link>
    </>
  );
}

export default SignUpPage;
