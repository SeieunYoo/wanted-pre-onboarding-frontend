import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validation } from '../../utils/vaildation';
import { signup, signin, ErrorResponse } from '../../apis/auth';
import { localStorageKey, path } from '../../constants';

type FormType = 'signup' | 'signin';

export default function Form({ formType }: { formType: FormType }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const isSignUp = formType === 'signup';
  const signUpOrLogIn = isSignUp ? '회원가입' : '로그인';
  const nextPath = isSignUp ? path.SIGNIN : path.TODO;

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

  const handleSignUp = async () => {
    try {
      const { status } = await signup(values);
      if (status === 201) {
        alert(`${signUpOrLogIn}이 완료되었습니다.`);
        navigate(nextPath);
      }
    } catch (error) {
      const err = error as ErrorResponse;
      alert(err?.response?.data.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const { status, data } = await signin(values);
      if (status === 200) {
        localStorage.setItem(localStorageKey.ACCESS_TOKEN, data.access_token); //로그인에 성공하면 로컬스토리지에 저장
        alert(`${signUpOrLogIn}이 완료되었습니다.`);
        navigate(nextPath);
      }
    } catch (error) {
      const err = error as ErrorResponse;
      alert(err?.response?.data.message);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSignUp ? handleSignUp() : handleSignIn();
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
