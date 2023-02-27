import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { errorToast, handleErrors } from '../helper';
import product from '../queryKeys/product';

const BASE_URL = '/product';

// GET all products
const read = (options = {}) => {
  const response = useQuery([product.read], () => api.get({ url: `${BASE_URL}` }), {
    ...options,
    onSuccess: () => {
      // successToast('');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });

  return response;
};

// GET one product
const readOne = (id = '', options = {}) => {
  const response = useQuery([product.readOne, id], () => api.get({ url: `${BASE_URL}/${id}` }), {
    ...options,
    onSuccess: () => {
      // successToast('');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });

  return response;
};

const queries = { read, readOne };

export default queries;
