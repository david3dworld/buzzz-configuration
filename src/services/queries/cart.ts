/* eslint-disable comma-dangle */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import config from '../../config';
import { useCartContext } from '../../context/CartContext';
import routes from '../../routes';
import api from '../api';
import { errorToast, getLocalStorge, handleErrors, saveLocalStorge, successToast } from '../helper';
import cart from '../queryKeys/cart';

const BASE_URL = '/cart';

// GET single cart item
const readOne = (id = '', options = {}) => {
  const response = useQuery([cart.readOne, id], () => api.get({ url: `${BASE_URL}/${id}` }), {
    ...options,
    onSuccess: () => {
      successToast('');
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });

  return response;
};

// GET all cart items
const read = (options = {}) => {
  const { localCart } = useCartContext();
  const isAuthenticated = getLocalStorge(config.isAuthenticated);
  if (!isAuthenticated) {
    return { data: localCart, isLoading: false };
  }
  const response = useQuery([cart.read], () => api.get({ url: `${BASE_URL}/` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
    // enabled: !!isAuthenticated,
  });
  return response;
};

// DELETE all cart items
const del = (options = {}) => {
  const queryClient = useQueryClient();
  const { mutate, ...response } = useMutation(api.delete, {
    mutationKey: [cart.delete],
    ...options,
    onSettled: () => {
      queryClient.invalidateQueries([cart.read]);
    },
    onError: () => {},
  });
  return {
    ...response,
    mutate: (body: any) => mutate(`${BASE_URL}/${body.id}`),
  };
};

// UPDATE cart item
const update = () => {
  const queryClient = useQueryClient();

  const response = useMutation(
    (body: any) => api.put({ url: `${BASE_URL}/${body.id}`, body: body.payload }),
    {
      onMutate: async (newQuantity) => {
        await queryClient.cancelQueries([cart.read]);
        const prevQuantityData: Array<any> | undefined = queryClient.getQueryData([cart.read]);
        const singleItem = prevQuantityData?.find((item) => item.id === newQuantity.id);
        singleItem.quantity = newQuantity.payload.quantity;
        queryClient.setQueryData([cart.read], prevQuantityData);
        return { prevQuantityData, newQuantity };
      },
      onError: () => {},
      onSettled: () => {
        queryClient.invalidateQueries([cart.read]);
      },
    }
  );
  return response;
};

// Create cart item
const create = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [cart.create],
    onSuccess: () => {
      saveLocalStorge([], config.userCart);
      if (router.query?.next) {
        const nextUrl = router.query.next as string;
        router.push(`/${nextUrl}`);
      } else {
        if (router.pathname === routes.preview.name) {
          setTimeout(() => {
            router.push(routes.marketplace.path);
          }, 1000);
        }
        if (router.pathname === routes.dashboard.design.preview.name) {
          setTimeout(() => {
            router.push(routes.dashboard.myBuzz.path);
          }, 1000);
        }
        successToast('Your item has been added to the cat');
      }
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => {
      mutate({ url: `${BASE_URL}/`, body });
      queryClient.invalidateQueries([cart.read]);
    },
  };
};

// Create multiple cart items
const multiple = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [cart.create],
    onSuccess: () => {
      saveLocalStorge([], config.userCart);
      if (router.query?.next) {
        const nextUrl = router.query.next as string;
        router.push(nextUrl);
      } else {
        if (router.pathname === routes.cart.path) {
          router.push(routes.marketplace.path);
        }
        successToast('Your item has been added to the cat');
      }
    },
    onError: (err: any) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (body: any) => {
      mutate({ url: `${BASE_URL}/mutiple-item`, body });
      queryClient.invalidateQueries([cart.read]);
    },
  };
};

const queries = { read, readOne, del, update, create, multiple };

export default queries;
