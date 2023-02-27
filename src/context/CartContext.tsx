import { useRouter } from 'next/router';
import React, { useContext, createContext, useState, useMemo, ReactElement } from 'react';
import config from '../config';
import routes from '../routes';
import { getLocalStorge, saveLocalStorge } from '../services/helper';

interface IProps {
  children: ReactElement;
}

const CartContext = createContext<any>(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }: IProps) => {
  const [localCart, setLocalCart] = useState(getLocalStorge(config.userCart) || []);
  const router = useRouter();

  // ! Update theme
  const addCart = (id: string, item: any) => {
    const check = localCart.find((el: any) => id === el.product.id);
    if (check) {
      const filtCart = localCart.filter((el: any) => id !== el.product.id);
      const newCart = [item, ...filtCart];
      setLocalCart(newCart);
      saveLocalStorge(newCart, config.userCart);
    } else {
      const newCart = [item, ...localCart];
      setLocalCart(newCart);
      saveLocalStorge(newCart, config.userCart);
    }
  };

  const increase = (id: string, quantity: number) => {
    const newCartItem = localCart.map((el: any) => {
      if (el.id === id) {
        return { ...el, quantity: quantity + 1 };
      }
      return el;
    });
    setLocalCart(newCartItem);
    saveLocalStorge(newCartItem, config.userCart);
  };

  const decrease = (id: string, quantity: number) => {
    const newCartItem = localCart.map((el: any) => {
      if (el.id === id) {
        return { ...el, quantity: quantity - 1 };
      }
      return el;
    });
    setLocalCart(newCartItem);
    saveLocalStorge(newCartItem, config.userCart);
  };

  const deleteItem = (id: string) => {
    const newCartItem = localCart.filter((el: any) => el.id !== id);
    setLocalCart(newCartItem);
    saveLocalStorge(newCartItem, config.userCart);
    router.push(routes.marketplace.path);
  };

  const memoizedData = useMemo(
    () => ({
      localCart,
      addCart,
      increase,
      deleteItem,
      decrease,
    }),
    [localCart],
  );
  return <CartContext.Provider value={memoizedData}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
