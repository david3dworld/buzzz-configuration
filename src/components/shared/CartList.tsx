/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import config from '../../config';
import { useCartContext } from '../../context/CartContext';
import { useLocalStorage } from '../../hooks';

import queries from '../../services/queries/cart';
import RemoveModal from './RemoveModal';

interface IProp {
  item: any;
}

const CartList = (props: IProp) => {
  const [isAuthenticated] = useLocalStorage(config.isAuthenticated);
  const [show, setShow] = useState(false);
  const { increase, decrease, deleteItem } = useCartContext();

  const { item } = props;

  const toggleModal = () => setShow(!show);

  const { mutate } = queries.update();
  const value = queries.del();
  // console.log(value);

  const increaseLocal = () => {
    if (isAuthenticated) {
      const quantity = item.quantity + 1;
      mutate({ payload: { quantity }, id: item.id });
      return;
    }
    increase(item.id, item.quantity);
  };
  const decreaseLocal = () => {
    const quantity = item.quantity - 1;
    if (quantity === 0) {
      toggleModal();
    } else {
      if (isAuthenticated) {
        mutate({ payload: { quantity }, id: item.id });
        return;
      }
      decrease(item.id, item.quantity);
    }
  };

  const clickNo = () => {
    toggleModal();
  };

  const clickYes = () => {
    if (isAuthenticated) {
      value.mutate({ id: item.id });
      return;
    }
    deleteItem(item.id);
  };
  return (
    <div>
      <div key={item.id} className="body mb-3">
        <div className="d-xl-flex d-none justify-content-between">
          <div className="d-flex">
            <div>
              <img src="/images/cart-image.png" alt="Product-img" className="" />
            </div>
            <div className="mx-5">
              <p>{item?.name || item?.product.name}</p>
              <button onClick={() => toggleModal()} type="button" className="remove_button">
                <p className="remove mt-2">Remove</p>
              </button>
            </div>
          </div>

          <div className="col-6 right">
            <p className="text-center">{item?.price || item?.product.name}</p>
            <div className="d-flex justify-content-between counter">
              <button onClick={decreaseLocal} type="button" className="quantity">
                -
              </button>
              <div className="cart_quantity quantity">
                <p>{item?.quantity}</p>
              </div>
              <button onClick={increaseLocal} type="button" className="quantity">
                +
              </button>
            </div>
            <p className="text-right">{item?.total}</p>
          </div>
        </div>

        {/* mobile */}
        <div className="d-block d-xl-none mobile">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img src="/images/cart-image.png" alt="item" className="cart-img" />

              <div className="mx-3">
                <p className="name">{item?.name || item?.product.name}</p>
                <p>{item?.price || item?.product.price}</p>
                <p className="free">Free shipping</p>
                <p className="disc">Disc 6%</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-auto mb-0 counter">
              <button onClick={decreaseLocal} type="button" className="quantity">
                -
              </button>
              <div className="cart_quantity quantity">
                <p>{item?.quantity}</p>
              </div>
              <button onClick={increaseLocal} type="button" className="quantity">
                +
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <RemoveModal
        show={show}
        onHide={toggleModal}
        clickNo={clickNo}
        clickYes={clickYes}
        loading={value.isLoading}
      />
      {/* <DeleteModal
        show={showR}
        clickYes={clickYes}
        onHide={toggleRemove}
        title={value.isLoading ? <Spinner /> : 'Yes'}
        loading={value.isLoading}
      /> */}
    </div>
  );
};

export default CartList;
