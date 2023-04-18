import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAccessToken } from '../../utils';
import { PATH } from '../../constants';

const TITLE = {
  signin: '로그인',
  signup: '회원가입',
  todo: '투두리스트',
};

interface Props {
  path: keyof typeof TITLE;
}

export function Header({ path }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10">
      <h3 className="font-bold">{TITLE[path]}</h3>
      {path === 'todo' && (
        <button
          onClick={() => {
            deleteAccessToken();
            navigate(PATH.SIGNIN);
          }}
          className="bg-blue-500"
        >
          로그아웃
        </button>
      )}
    </div>
  );
}
