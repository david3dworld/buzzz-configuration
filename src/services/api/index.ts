import axios from 'axios';
import axiosInstance, { baseURL } from '../axiosConfig';

type Request = {
  url: string;
  body?: any;
  auth?: boolean;
};

const del = (url: string) => axiosInstance.delete(url);

const get = async ({ url, auth = true }: Request) => {
  return (await (auth ? axiosInstance.get(url) : axios.get(url))).data;
};

const post = async ({ url, body, auth = true }: Request) => {
  return (await (auth ? axiosInstance.post(url, body) : axios.post(`${baseURL}${url}`, body))).data;
};

const patch = ({ url, body }: Request) => axiosInstance.patch(url, body);

const put = ({ url, body }: Request) => axiosInstance.put(url, body);

const api = {
  delete: del,
  get,
  patch,
  post,
  put,
};

export default api;
