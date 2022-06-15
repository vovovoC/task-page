import axios from 'axios';
import { API_URL } from './config';

const apiInstance = axios.create({
  baseURL: API_URL
});

apiInstance.interceptors.request.use(function (config: any) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return {
    ...config
  };
});

export { apiInstance };