import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToDos } from '../apis/todos';
import { ToDo } from '../types';
import { ToDoInput, ToDoItem } from '../components/ToDo';
import { getAccessToken } from '../utils';
import { PATH } from '../constants';
import { Header } from '../components/Header';

function ToDosPage() {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const navigate = useNavigate();
  
  const getToDoList = async () => {
    const data = await getToDos();
    setToDos(data);
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      navigate(PATH.SIGNIN);
    }
    getToDoList();
  }, []);

  return (
    <>
      <Header path="todo" />
      <ToDoInput setToDos={setToDos} />
      <ul className='rounded-lg shadow-md gap-10 h-[300px]'>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} setToDos={setToDos} />
        ))}
      </ul>
    </>
  );
}

export default ToDosPage;
