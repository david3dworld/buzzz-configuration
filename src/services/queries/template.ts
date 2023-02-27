import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../api';
import { errorToast, handleErrors, successToast } from '../helper';
import template from '../queryKeys/template';

const BASE_URL = '/template';

const create = (options = {}) => {
  const { mutate, ...response } = useMutation(api.post, {
    mutationKey: [template.create],
    ...options,
    onSuccess: () => {
      successToast('');
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

const read = (options = {}) => {
  const response = useQuery([template.read], () => api.get({ url: `${BASE_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });

  return response;
};

const queries = { create, read };

export default queries;
