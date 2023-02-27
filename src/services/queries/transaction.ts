import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { errorToast, handleErrors } from '../helper';
import transaction from '../queryKeys/transaction';

const BASE_URL = '/transaction';

// GET all transactions
const read = (options = {}) => {
  const response = useQuery([transaction.read], () => api.get({ url: `${BASE_URL}` }), {
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

const queries = { read };

export default queries;
