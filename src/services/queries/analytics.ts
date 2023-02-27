import { useQuery } from '@tanstack/react-query';
import analytics from '../queryKeys/analytics';
import api from '../api/index';

const BASE_URL = '/analytics/orders';
const REVENUE_URL = '/analytics/revenue';
const CUSTOMER_URL = '/analytics/customer';

const readOrders = (options = {}) => {
  const response = useQuery([analytics.readOrders], () => api.get({ url: `${BASE_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });

  return response;
};

const readBusinnessRevenue = (options = {}) => {
  const response = useQuery([analytics.readRevenue], () => api.get({ url: `${REVENUE_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });
  return response;
};
const readCustomers = (options = {}) => {
  const response = useQuery([analytics.readCustomers], () => api.get({ url: `${CUSTOMER_URL}` }), {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });
  return response;
};

const analyticsQueries = { readOrders, readBusinnessRevenue, readCustomers };

export default analyticsQueries;
