import React from 'react';
import queries from '../../services/queries/cart';

const CartNumber = () => {
  const { data } = queries.read();
  return (
    <div className="cart_number" data-cart={data?.length}>
      <div className="cart_number_value">{data?.length}</div>
      <img src="/svg/shopping-cart.svg" alt="icon" />
    </div>
  );
};

export default CartNumber;
