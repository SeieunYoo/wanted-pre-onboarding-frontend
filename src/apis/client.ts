import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from '../utils';

export const axiosBasic: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
});

axiosBasic.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
