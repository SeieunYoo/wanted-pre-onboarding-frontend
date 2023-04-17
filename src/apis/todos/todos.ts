import { axiosBasic } from '../client';
import { CreateToDoType } from './types';

export const getToDos = () => {
  return axiosBasic.get('/todos').then((response) => response.data);
};

export const createToDo = (todo: CreateToDoType) => {
  return axiosBasic.post('/todos', todo);
};

export const deleteToDo = (id: number) => {
  return axiosBasic.delete(`/todos/${id}`);
};
