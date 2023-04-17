import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToDos } from '../apis/todos';
import { ToDo } from '../types';
import { ToDoInput, ToDoItem } from '../components/ToDo';
import { getAccessToken, deleteAccessToken } from '../utils';
import { path } from '../constants';

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
      navigate(path.SIGNIN);
    }
    getToDoList();
  }, []);

  return (
    <>
      <h3>투두 리스트</h3>
      <button
        onClick={() => {
          deleteAccessToken();
          navigate(path.SIGNIN);
        }}
      >
        로그아웃
      </button>
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
