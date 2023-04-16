import { AxiosError } from 'axios';

export interface User {
  email: string;
  password: string;
}

export interface PostSignInResponse {
  access_token: string;
}

export interface ErrorResponse
  extends AxiosError<{
    statusCode: number;
    message: string;
    error: string;
  }> {}
