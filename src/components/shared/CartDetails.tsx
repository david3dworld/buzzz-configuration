import React from 'react';
import routes from '../../routes';
import { EmptyBox } from '../empty';
import CartList from './CartList';
import Spinner from './Spinner';

interface IProps {
  isLoading: boolean;
  cartData: any;
}

const CartDetails = ({ cartData, isLoading }: IProps) => {
  return (
    <div className="buzzz-dashboard-cart">
      <div className="d-xl-flex d-none justify-content-between bottom">
        <h2 className="text-uppercase">products</h2>

        <div className="d-flex right">
          <h2 className="text-uppercase">price</h2>
          <h2 className="text-uppercase">quantity</h2>
          <h2 className="text-uppercase">total</h2>
        </div>
      </div>
      <hr />
      <div>
        {isLoading && (
          <div className="mt-5 mb-6">
            <Spinner />
          </div>
        )}
        {(!cartData || cartData?.length === 0) && !isLoading && (
          <EmptyBox
            src="/svg/empty_state.svg"
            title="Cart is empty"
            buttonTitle="Start Shopping"
            link={routes.marketplace.path}
          />
        )}
        {cartData?.map((item: any, i: number) => (
          <CartList key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartDetails;
