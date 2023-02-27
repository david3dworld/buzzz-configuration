import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api';
import {
  // BUZZZ_TOKEN_KEY,
  errorToast,
  handleErrors,
  // saveLocalStorge,
  successToast,
} from '../helper';
import profile from '../queryKeys/profile';
import users from '../queryKeys/users';

const BASE_URL = '/users';

const update = (id = '', options = {}) => {
  const { mutate, ...response } = useMutation(api.patch, {
    mutationKey: [profile.update],
    ...options,
    onSuccess: () => {
      successToast('Profile updated successfully');
      useQueryClient().invalidateQueries([users.readOne]);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}/${id}`, body }),
  };
};

const queries = { update };

export default queries;
