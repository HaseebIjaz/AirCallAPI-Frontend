import Axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from 'src/config';

export const axios = Axios.create({
  timeout: 1000 * 120, //Wait for 120 seconds
  baseURL: API_URL,
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers !== undefined) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      config.headers.Authorization = 'Bearer ' + jwt;
    }
  }
  return config;
});

axios.interceptors.response.use(
  (response: any) => {
    if (response.statusCode >= 300) {
      toast.error(response?.message);
    }
    if (response.data.access_token) {
      localStorage.setItem('jwt', response?.data?.access_token);
    }
    if (response.data.refresh_token) {
      localStorage.setItem('refresh', response?.data?.access_token);
    }
    return response.data;
  },
  (error) => {
    toast.error(error?.response?.data?.message);

    return Promise.reject(error);
  }
);

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
