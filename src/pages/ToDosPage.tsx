import React, { useEffect, useState } from 'react';
import { getToDos } from '../apis/todos';
import { Todo } from '../types/types';

function ToDosPage() {
  const [todos, setToDos] = useState<Todo[]>([]);

  const getToDoList = async () => {
    const data = await getToDos();
    setToDos(data);
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <>
      <h3>투두 리스트</h3>
      <ul>
        {todos.map((todo) => (
          <label key={todo.id}>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
        ))}
      </ul>
    </>
  );
}

export default ToDosPage;
