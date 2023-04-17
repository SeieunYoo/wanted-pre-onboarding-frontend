import React from 'react';
import { createToDo } from '../../apis/todos';
import { ToDo } from '../../types';
import useInput from '../../hooks/useInput';

interface Props {
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export function ToDoInput({ setToDos }: Props) {
  const { text, setText, onChange } = useInput();

  const handleCreateToDo = async () => {
    const { data } = await createToDo({ todo: text });
    setToDos((todos) => [...todos, data]);
    setText('');
  };

  return (
    <>
      <input data-testid="new-todo-input" value={text} onChange={onChange} />
      <button
        data-testid="new-todo-add-button"
        onClick={() => handleCreateToDo()}
      >
        추가
      </button>
    </>
  );
}
