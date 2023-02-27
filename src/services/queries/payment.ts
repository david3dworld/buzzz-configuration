import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { errorToast, handleErrors } from '../helper';
import payment from '../queryKeys/payment';

const BASE_URL = '/payment/paystack';

// Initialize Payment
const create = (options = {}) => {
  const { mutate, ...response } = useMutation(api.get, {
    mutationKey: [payment.create],
    ...options,
    onSuccess: (res) => {
      window.open(res.authorization_url, '_blank');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: () => mutate({ url: `${BASE_URL}/create-payment-ref` }),
  };
};

const queries = { create };

export default queries;
