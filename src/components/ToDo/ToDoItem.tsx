import React, { useState, useEffect } from 'react';
import { ToDo } from '../../types';
import useInput from '../../hooks/useInput';
import { deleteToDo, updateToDo } from '../../apis/todos';

interface Props {
  todo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
export function ToDoItem({ todo, setToDos }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  let isCompleted = todo.isCompleted;
  const { text, setText, onChange } = useInput();

  const handleDeleteToDo = async (id: number) => {
    await deleteToDo(id);
    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateToDo = async (id: number) => {
    const newToDoItem = {
      todo: text,
      id: id,
      isCompleted: isCompleted,
    };
    const { data } = await updateToDo(newToDoItem);
    setToDos((todos) => todos.map((todo) => (todo.id === id ? data : todo)));
  };

  useEffect(() => {
    setText(todo.todo);
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
            <input
              data-testid="modify-input"
              value={text}
              onChange={onChange}
            />
          ) : (
            <span>{todo.todo}</span>
          )}
          {isEdit ? (
            <>
              <button
                data-testid="submit-button"
                className="text-red-500"
                onClick={() => {
                  handleUpdateToDo(todo.id);
                  setIsEdit(false);
                }}
              >
                제출
              </button>
              <button
                data-testid="cancel-button"
                className="text-blue-500"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button
                data-testid="modify-button"
                className="text-red-500"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                수정
              </button>
              <button
                data-testid="delete-button"
                className="text-blue-500"
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
