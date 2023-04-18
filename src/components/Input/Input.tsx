import React, { InputHTMLAttributes } from 'react';

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        {...rest}
        className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
      />
    </>
  );
}
