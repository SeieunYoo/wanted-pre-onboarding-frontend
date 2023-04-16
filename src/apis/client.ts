import axios, { AxiosInstance } from 'axios';

export const axiosBasic: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
});