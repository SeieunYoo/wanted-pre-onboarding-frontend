import axios, { AxiosInstance } from 'axios';
import { localStorageKey } from '../constants';

export const axiosBasic: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
});

axiosBasic.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKey.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
