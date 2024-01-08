import React from 'react';
import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { CartItemsContainer } from '@zocom/cart-container';
import { CartItem } from '@zocom/cart-item';

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
  },
];

export const Cart = () => {

  return (
        <Wrapper style={Styles.CART}>
            <CartItemsContainer>
              {menuItems.map((item) => (
                <CartItem
                  menuItem={[item.name, item.price, item.ingredients?.join(', ')]}
                />
              ))}
            </CartItemsContainer>

        </Wrapper>
  );
};