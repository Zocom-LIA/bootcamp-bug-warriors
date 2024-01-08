import React from 'react';
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { CartItemsContainer } from '@zocom/cart-container';
import { CartItem } from '@zocom/cart-item';
import { TopBar } from '@zocom/top-bar';
import { CartTotalPrice } from '@zocom/cart-total-price';
import { Button, ButtonType } from '@zocom/button';
import { useSelector } from 'react-redux';
import { RootState } from '@zocom/store';



const menuItems = [
  {
    name: 'KARLSTAD',
    
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'BANGKOK',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'OAXACA',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'PARIS',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  }
];


export const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart.menuList);

  
  return (
        <Wrapper style={Styles.CART}>
          <TopBar />
            <CartItemsContainer>

              {/* Display items placed in cart */}
              {menuItems.map((item) => (
                <CartItem
                  menuItem={[item.name, item.price, item.ingredients?.join(', ')]}
                />
              ))}
            </CartItemsContainer>

            {/* Display correct amount */}
            <CartTotalPrice />

            {/* on click -> send order */}
            <Button type={ButtonType.REGULAR}>TAKE MY MONEY!</Button>
        </Wrapper>
  );
};