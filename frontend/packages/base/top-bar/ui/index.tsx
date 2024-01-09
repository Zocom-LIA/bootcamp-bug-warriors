import './style.scss';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { Logo } from '@zocom/logo';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const TopBar = () => {
  const currentRoute = useLocation().pathname;

  return (
    <div className='top-bar'>
      <img src={Logo} alt='logo' />
      {/* <CartButton
        style={CartButtonStyles.MENU}
        animate={animate ? Animation.ANIMATE : Animation.NONE}
      ></CartButton> */}
      {currentRoute === '/' ? (
        <CartButton style={CartButtonStyles.MENU}></CartButton>
      ) : currentRoute === '/cart' ? (
        <CartButton style={CartButtonStyles.CART}></CartButton>
      ) : null}
    </div>
  );
};
