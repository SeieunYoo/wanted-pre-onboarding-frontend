import React, { useState, useEffect } from 'react';
import { ToDo } from '../../types';
import useInput from '../../hooks/useInput';
import { deleteToDo, updateToDo } from '../../apis/todos';
import { Input } from '../Input';

interface Props {
  todo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
export function ToDoItem({ todo, setToDos }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  let isCompleted = todo.isCompleted;
  const { value, setValue, onChange } = useInput<string>('');

  const handleDeleteToDo = async (id: number) => {
    await deleteToDo(id);
    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateToDo = async (id: number) => {
    const newToDoItem = {
      todo: value,
      id: id,
      isCompleted: isCompleted,
    };
    const { data } = await updateToDo(newToDoItem);
    setToDos((todos) => todos.map((todo) => (todo.id === id ? data : todo)));
  };

  useEffect(() => {
    setValue(todo.todo);
  }, []);

  return (
    <>
      <li key={todo.id}>
        <label key={todo.id}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              isCompleted = !isCompleted;
              handleUpdateToDo(todo.id);
            }}
          />
          {isEdit ? (
            <Input
              data-testid="modify-input"
              value={value}
              onChange={onChange}
            />
          ) : (
            <span>{todo.todo}</span>
          )}
          {isEdit ? (
            <>
              <button
                data-testid="submit-button"
                onClick={() => {
                  handleUpdateToDo(todo.id);
                  setIsEdit(false);
                }}
                className="border-2 border-green-500 text-green-500"
              >
                제출
              </button>
              <button
                data-testid="cancel-button"
                onClick={() => {
                  setIsEdit(false);
                }}
                className="border-2 border-black text-black"
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button
                data-testid="modify-button"
                className="border-2 border-red-500 text-red-500"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                수정
              </button>
              <button
                data-testid="delete-button"
                className="border-2 border-blue-500 text-blue-500"
                onClick={() => {
                  handleDeleteToDo(todo.id);
                }}
              >
                삭제
              </button>
            </>
          )}
        </label>
      </li>
    </>
  );
}
