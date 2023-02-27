import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import config from '../../config';
import routes from '../../routes';
import cartQueries from './cart';
import api from '../api';
import {
  // BUZZZ_TOKEN_KEY,
  errorToast,
  getLocalStorge,
  handleErrors,
  saveLocalStorge,
  // saveLocalStorge,
  successToast,
} from '../helper';
import auth from '../queryKeys/auth';
import { getCartDetails } from '../../helper/helper';

const BASE_URL = '/auth';

const create = (options = {}) => {
  const router = useRouter();
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [auth.create],
    ...options,
    onSuccess: () => {
      successToast('Signup successful');
      setTimeout(() => {
        router.push(routes.auth.login.path);
      }, 1000);
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}/signup`, body }),
  };
};

// ? Using update for login
const update = (options = {}) => {
  const router = useRouter();
  const { mutate: mutateCart } = cartQueries.multiple();

  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [auth.update],
    ...options,
    onSuccess: (data: any) => {
      successToast('Login successful');
      saveLocalStorge(data?.data?.accessToken, config.tokenKey);
      saveLocalStorge(data?.data?.user, config.userDataKey);
      saveLocalStorge(true, config.isAuthenticated);
      const oldCart = getLocalStorge(config.userCart);
      setTimeout(() => {
        if (router.query?.next) {
          const nextUrl = router.query.next as string;
          router.push(`/${nextUrl}`);
        } else {
          router.push(routes.dashboard.home.path);
        }
      }, 1000);
      if (oldCart && oldCart.length > 0) {
        mutateCart(getCartDetails(oldCart));
      }
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}/signin`, body, auth: false }),
  };
};

const patch = (options = {}) => {
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [auth.patch],
    ...options,
    onSuccess: () => {
      successToast('Check for your email for the next step');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => mutate({ url: `${BASE_URL}/forgot-password`, body }),
  };
};

const queries = { create, update, patch };

export default queries;
