import React from 'react';
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { CartItemsContainer } from '@zocom/cart-container';
// import { CartItem } from '@zocom/cart-item';

export const Cart = () => {

  return (
        <Wrapper style={Styles.CART}>
            <CartItemsContainer>
                
            </CartItemsContainer>

        </Wrapper>
  );
};