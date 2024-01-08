import './style.scss';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { Logo } from '@zocom/logo';
import React from 'react';

export const TopBar = () => {
  return (
    <div className='top-bar'>
      <img src={Logo} alt='logo' />
      {/* <CartButton
        style={CartButtonStyles.MENU}
        animate={animate ? Animation.ANIMATE : Animation.NONE}
      ></CartButton> */}
      <CartButton style={CartButtonStyles.MENU}></CartButton>
    </div>
  );
};
