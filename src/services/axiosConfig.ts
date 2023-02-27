import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';
// import routes from '../routes';
import { getLocalStorge } from './helper';

export const baseURL = 'http://54.226.54.6:5000/v1';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
});

const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getLocalStorge(config.tokenKey);
  if (!request.headers) return request;
  request.headers!.Authorization = `Bearer ${token}`;
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError) => {
  const statusCode = error.response!.status;

  // You can add 403 here " || statusCode === 403"
  if (statusCode === 401) {
    // localStorage.clear();
    // window.location.href = `${routes.auth.login.path}?next=${window.location.pathname}`;
  }
  return Promise.reject(error);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
