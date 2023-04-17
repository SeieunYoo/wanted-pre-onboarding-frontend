import React, { useEffect, useState } from 'react';
import { getToDos, createToDo, deleteToDo } from '../apis/todos';
import { ToDo } from '../types';
import useInput from '../hooks/useInput';

function ToDosPage() {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const { text, setText, onChange } = useInput();

  const getToDoList = async () => {
    const data = await getToDos();
    setToDos(data);
  };

  const createToDos = async () => {
    const { data } = await createToDo({ todo: text });
    setToDos([...todos, data]);
    setText('');
  };

  const deleteToDos = async (id: number) => {
    await deleteToDo(id);
    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <>
      <h3>투두 리스트</h3>
      <input data-testid="new-todo-input" value={text} onChange={onChange} />
      <button data-testid="new-todo-add-button" onClick={() => createToDos()}>
        추가
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label key={todo.id}>
              <input type="checkbox" />
              <span>{todo.todo}</span>
              <button data-testid="modify-button" className="text-red-500">
                수정
              </button>
              <button
                data-testid="delete-button"
                className="text-blue-500"
                onClick={() => {
                  deleteToDos(todo.id);
                }}
              >
                삭제
              </button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDosPage;
