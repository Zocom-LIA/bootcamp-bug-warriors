// import React from 'react';
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { CartItemsContainer } from '@zocom/cart-container';
import { CartItem } from './cart-item';
import { TopBar } from '@zocom/top-bar';
import { CartTotalPrice } from '@zocom/cart-total-price';
import { useSelector } from 'react-redux';
import { RootState } from '@zocom/store';
import { OrderButton } from '@zocom/order-button';

export const Cart = () => {
  const menuList = useSelector((state: RootState) => state.cart.menuList);
  const combinedItems = [...menuList.wonton, ...menuList.dip];

  return (
    <Wrapper style={Styles.CART}>
      <TopBar />
      {/* <CartItemsContainer> */}
      <section className='cart__items-container'>
        <div className='cart__item-container'>
          {combinedItems.map((item, i) => (
            <CartItem key={i} menuItem={item} />
          ))}
        </div>
        <div className='cart__total-container'>
          <CartTotalPrice wonton={menuList.wonton} dip={menuList.dip} />
          <OrderButton />
        </div>
      </section>
    </Wrapper>
  );
};
