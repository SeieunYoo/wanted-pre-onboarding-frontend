import React, { useState, useCallback } from 'react';

const useInput = () => {
  const [text, setText] = useState<string>('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return { text, onChange, setText };
};

export default useInput;
