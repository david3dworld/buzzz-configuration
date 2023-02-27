import { useMutation } from '@tanstack/react-query';
import api from '../api';
import { errorToast, handleErrors, successToast } from '../helper';
import password from '../queryKeys/password';

const BASE_URL = '/auth';

const update = (options = {}) => {
  const { mutate, ...response } = useMutation(api.patch, {
    mutationKey: [password.update],
    ...options,
    onSuccess: () => {
      successToast('Password changed successfully');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}/update-password`, body }),
  };
};

const queries = { update };

export default queries;
