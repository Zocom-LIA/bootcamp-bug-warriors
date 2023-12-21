import React from 'react'
import { CartTop, CartBottom } from '@zocom/cart-button';
import './style.scss'

export enum CartButtonStyles {
  'MENU' = 'menu',
  'CART' = 'cart'
}

export type CartButtonProps = {
  style?: CartButtonStyles
}


export const CartButton = ({ style }: CartButtonProps) => {
  return (
    <div className={`button-${style}`}>
      <span>1</span>
      <span className='cart-logo'>
        <img src={CartTop} alt='cart logo'/>
        <img src={CartBottom} alt='cart logo'/>
      </span>
    </div>
  )
}