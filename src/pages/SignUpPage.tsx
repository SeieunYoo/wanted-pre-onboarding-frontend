import React, { useState } from 'react';
import { validation } from '../utils/vaildation';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const disabled =
    validation.email(values.email) && validation.password(values.password);
    const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("회원가입이 완료되었습니다.");
    navigate("/signin");
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h3 className='font-bold'>회원가입페이지</h3>
      <form className="flex flex-col items-center justify-center w-fit rounded-lg shadow-md gap-10" onSubmit={handleSubmit}>
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
          data-testid="signup-button"
          className="bg-blue-600 disabled:bg-gray-500"
          disabled={!disabled}
        >
          회원가입
        </button>
      </form>
    </div>
    </>
  );
}

export default SignUpPage;
