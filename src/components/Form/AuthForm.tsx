import React from 'react';
import { useNavigate } from 'react-router-dom';
import { validation } from '../../utils/vaildation';
import { signup, signin, ErrorResponse } from '../../apis/auth';
import { PATH } from '../../constants';
import { setAccessToken } from '../../utils';
import useInput from '../../hooks/useInput';
import { Input } from '../Input';

type FormType = 'signup' | 'signin';

export function AuthForm({ formType }: { formType: FormType }) {
  const { value, onChange } = useInput({
    email: '',
    password: '',
  });

  const isSignUp = formType === 'signup';
  const signUpOrLogIn = isSignUp ? '회원가입' : '로그인';
  const nextPath = isSignUp ? PATH.SIGNIN : PATH.TODO;

  const navigate = useNavigate();

  const disabled =
    validation.email(value.email) && validation.password(value.password);

  const handleSignUp = async () => {
    try {
      const { status } = await signup(value);
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
      const { status, data } = await signin(value);
      if (status === 200) {
        setAccessToken(data.access_token); //로그인에 성공하면 로컬스토리지에 저장
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
      <Input
        data-testid="email-input"
        placeholder="이메일"
        value={value.email}
        onChange={onChange}
        name="email"
        type="email"
      />
      <Input
        data-testid="password-input"
        placeholder="비밀번호"
        value={value.password}
        onChange={onChange}
        name="password"
        type="password"
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
