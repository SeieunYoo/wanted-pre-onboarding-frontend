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
  const { text, setText, onChange } = useInput();

  const handleDeleteToDo = async (id: number) => {
    await deleteToDo(id);
    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateToDo = async (todoItem: ToDo) => {
    const newToDoItem = {
      todo: text,
      id: todoItem.id,
      isCompleted: todoItem.isCompleted,
    };
    await updateToDo(newToDoItem);
    setIsEdit(false);
    setToDos((todos) =>
      todos.map((todo) => (todo.id === todoItem.id ? newToDoItem : todo)),
    );
  };

  useEffect(() => {
    setText(todo.todo);
  }, []);

  return (
    <>
      <li key={todo.id}>
        <label key={todo.id}>
          <input type="checkbox" />
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
                  handleUpdateToDo(todo);
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
