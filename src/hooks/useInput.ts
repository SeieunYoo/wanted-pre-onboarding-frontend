import React, { useState, useCallback } from 'react';

type UseInputReturn<T> = {
  value: T;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

const useInput = <T extends unknown>(initialValue: T): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof initialValue === 'string') {
        setValue(e.target.value as unknown as T);
      } else {
        const { name, value } = e.target;
        setValue((prev) => ({ ...(prev as object), [name]: value } as T));
      }
    },
    [initialValue],
  );

  return { value, onChange, setValue };
};

export default useInput;
