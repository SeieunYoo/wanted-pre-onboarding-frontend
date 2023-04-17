import React, { useEffect, useState } from 'react';
import { getToDos } from '../apis/todos';
import { ToDo } from '../types';
import { ToDoInput, ToDoItem } from '../components/ToDo';

function ToDosPage() {
  const [todos, setToDos] = useState<ToDo[]>([]);

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
      <ToDoInput setToDos={setToDos} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} setToDos={setToDos} />
        ))}
      </ul>
    </>
  );
}

export default ToDosPage;
