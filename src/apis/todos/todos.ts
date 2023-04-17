import { axiosBasic } from '../client';

export const getToDos = () => {
  return axiosBasic.get('/todos').then((response) => response.data);
};
