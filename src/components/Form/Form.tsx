import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validation } from '../../utils/vaildation';

type formType = 'signup' | 'signin';

export default function Form({ formType }: { formType: formType }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const signUpOrLogIn = formType === 'signup' ? '회원가입' : '로그인';
  const nextPath = formType === 'signup' ? '/signin' : '/todo';
  const navigate = useNavigate();

  const disabled =
    validation.email(values.email) && validation.password(values.password);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${signUpOrLogIn}이 완료되었습니다.`);
    navigate(nextPath);
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-fit rounded-lg shadow-md gap-10"
      onSubmit={handleSubmit}
    >
      <input
        data-testid="email-input"
        placeholder="이메일"
        value={values.email}
        onChange={onChange}
        name="email"
        className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
      />
      <input
        data-testid="password-input"
        placeholder="비밀번호"
        value={values.password}
        onChange={onChange}
        name="password"
        className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
      />
      <button
        data-testid={`${formType}-button`}
        className="bg-blue-600 disabled:bg-gray-500"
        disabled={!disabled}
      >
        {signUpOrLogIn}
      </button>
    </form>
  );
}
