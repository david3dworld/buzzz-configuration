import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import queries from '../services/queries/cart';
import userQueries from '../services/queries/users';
import { Button, CartDetails } from '../components';
import { calcCartTotal } from '../helper/helper';
import routes from '../routes';
import config from '../config';
import { useLocalStorage } from '../hooks';

const Index = () => {
  const [isAuthenticated] = useLocalStorage(config.isAuthenticated);
  const router = useRouter();
  const cartData = queries.read();
  const { data: userData } = userQueries.readOne();
  const decision = () => {
    if (!!isAuthenticated === false) {
      router.push(`${routes.auth.login.path}?next=cart`);
      return;
    }
    if (userData.shipping_address) {
      router.push(routes.dashboard.design.review.path);
    } else {
      router.push(`${routes.dashboard.settings.shipping.path}?from=cart`);
    }
  };
  return (
    <div>
      <div className="container pb-3 buzzz-dashboard-cart">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between top">
              <h1>Your Cart</h1>
              <Link href={routes.marketplace.path}>
                <a href={routes.marketplace.path}>
                  <p>Continue Shopping</p>
                </a>
              </Link>
            </div>

            <CartDetails cartData={cartData.data} isLoading={cartData.isLoading} />

            {cartData.data?.length > 0 && (
              <>
                <div className="d-flex justify-content-between subtotal">
                  <div className="d-xl-flex d-block justify-content-xl-end">
                    <h2 className="text-uppercase mx-xl-5">subtotal</h2>
                    <p className="mt-xl-0 mt-3">{calcCartTotal(cartData.data)}</p>
                  </div>
                  <div className="cart-btn d-xl-none d-block mt-0 mt-2">
                    <Button title="Check out" onClick={decision} />
                  </div>
                </div>
                <div className="cart-btn d-xl-block d-none">
                  <Button title="Check out" onClick={decision} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
