import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../api/index';
import order from '../queryKeys/order';
import {
  // BUZZZ_TOKEN_KEY,
  errorToast,
  handleErrors,
  // saveLocalStorge,
  successToast,
} from '../helper';

const BASE_URL = '/order';

const readAllOrders = (options = {}) => {
  const response = useQuery([order.readAllOrders], () => api.get({ url: `${BASE_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });

  return response;
};

const readSingleOrder = (id = '', options = {}) => {
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [order.readSingleOrder, id],
    ...options,
    onSuccess: () => {
      successToast('Signup successful');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}`, body }),
  };
};

const queries = { readAllOrders, readSingleOrder };

export default queries;
