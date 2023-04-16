import { AxiosResponse } from 'axios';
import { axiosBasic } from '../client';
import { User, PostSignInResponse } from './types';

export const signup = (user: User): Promise<AxiosResponse<void>> => {
  return axiosBasic.post('/auth/signup', user);
};

export const signin = (
  user: User,
): Promise<AxiosResponse<PostSignInResponse>> => {
  return axiosBasic.post('/auth/signin', user);
};
