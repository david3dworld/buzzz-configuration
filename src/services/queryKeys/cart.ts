const namespace = 'cart';

export default {
  create: `${namespace}/create`, // create  (POST request)
  multiple: `${namespace}/multiple`, // create multiple  (POST request)
  read: `${namespace}/read`, // get all (GET request)
  readOne: `${namespace}/readOne`, // get one e.g get by id (GET request)
  update: `${namespace}/update`,
  patch: `${namespace}/patch`,
  put: `${namespace}/put`,
  delete: `${namespace}/delete`,
};
