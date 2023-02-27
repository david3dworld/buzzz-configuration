import { Id, toast } from 'react-toastify';

export const BUZZZ_TOKEN_KEY = 'BUZZZ_TOKEN_KEY';

export const errorToast = (message?: string, fallback = 'Something went wrong', toastId?: Id) => {
  toast.error(message || fallback, {
    toastId,
  });
};

export const successToast = (message?: string, fallback = 'Successful', toastId?: Id) => {
  toast.success(message || fallback, { toastId });
};

export const saveLocalStorge = (data: any, key: string) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    return true;
  } catch (error) {
    return false;
  }
};

export const getLocalStorge = (key: string) => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData);
  } catch (error) {
    return null;
  }
};

export const checkToken = () => {
  const token = getLocalStorge(BUZZZ_TOKEN_KEY);
  if (!token) return false;
  return true;
};

export function handleErrors(err: any) {
  const { response, message } = err;
  const { data } = response;

  if (!data) return message;

  const errorMessage: string = data?.message || 'Something went wrong';

  return errorMessage;
}
