/* eslint-disable comma-dangle */
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import routes from '../../routes';
import api from '../api';
import { errorToast, getLocalStorge, handleErrors, successToast } from '../helper';
import users from '../queryKeys/users';

const BASE_URL = '/users';

// GET single cart item
const readOne = (options = {}) => {
  const user = getLocalStorge('user-data-key');
  const userId = user?.id;
  // if (!user) return;
  const response = useQuery(
    [users.readOne, userId],
    () => api.get({ url: `${BASE_URL}/${userId}` }),
    {
      ...options,
      enabled: !!userId,
      onSuccess: () => {
        // successToast('');
      },
      onError: (err: any) => {
        errorToast(handleErrors(err));
      },
    }
  );

  return response;
};

// UPDATE shipping address
const update = () => {
  const router = useRouter();
  const user = getLocalStorge('user-data-key');
  const { mutate, ...response } = useMutation(api.patch, {
    mutationKey: [users.patch],
    onSuccess: () => {
      successToast('Profile updated successfully');
      if (router.query.from) {
        router.push(routes.dashboard.cart.path);
      }
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => {
      mutate({ url: `${BASE_URL}/${user.id}`, body });
    },
  };
};

const queries = { readOne, update };

export default queries;
