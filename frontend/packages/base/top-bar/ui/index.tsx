import './style.scss';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { Logo } from '@zocom/logo';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className='top-bar'>
      <img src={Logo} alt='logo' onClick={() => navigate('/')}/>
      {/* <CartButton
        style={CartButtonStyles.MENU}
        animate={animate ? Animation.ANIMATE : Animation.NONE}
      ></CartButton> */}
      <CartButton style={CartButtonStyles.MENU}></CartButton>
    </div>
  );
};
