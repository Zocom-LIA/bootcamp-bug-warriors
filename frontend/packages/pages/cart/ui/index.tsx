// import React from 'react';
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { CartItemsContainer } from '@zocom/cart-container';
import { CartItem } from './cart-item';
import { TopBar } from '@zocom/top-bar';
import { CartTotalPrice } from '@zocom/cart-total-price';
import { Button, ButtonType } from '@zocom/button';
import { useSelector } from 'react-redux';
import { RootState } from '@zocom/store';


export const Cart = () => {
  const menuList = useSelector((state: RootState) => state.cart.menuList);
  const combinedItems = [...menuList.wonton, ...menuList.dip];

  return (
        <Wrapper style={Styles.CART}>
          <TopBar />
            <CartItemsContainer>

              {combinedItems.map((item) => (
                <CartItem
                  menuItem={item}
                />
              ))}
            </CartItemsContainer>

            <CartTotalPrice wonton={menuList.wonton} dip={menuList.dip}/>

            <Button onClick={() => {console.log("Take my money", combinedItems)}} type={ButtonType.REGULAR}>TAKE MY MONEY!</Button>
        </Wrapper>
  );
};