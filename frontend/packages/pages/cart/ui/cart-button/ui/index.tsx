import { CartTop, CartBottom } from '@zocom/cart-button';
import { useSelector } from 'react-redux';
import './style.scss';
import { RootState } from '@zocom/store';

export enum CartButtonStyles {
  'MENU' = 'menu',
  'CART' = 'cart',
}

export enum Animation {
  'ANIMATE' = 'cart-handle-animate',
  'NONE' = '',
}
export type CartButtonProps = {
  style?: CartButtonStyles;
  // animate?: Animation | string;
};

// export const CartButton = ({ style, animate }: CartButtonProps) => {
export const CartButton = ({ style }: CartButtonProps) => {
  const cartCount = useSelector(
    (state: RootState) => state.cart?.items?.length
  );

  return (
    <section className={`cart-button__${style} `}>
      <span className='cart-count'>{cartCount}</span>
      <span className='cart-logo'>
        <img
          // className={`cart-logo__top ${animate || ''}`}
          className={`cart-logo__top`}
          src={CartTop}
          alt='cart logo'
        />
        <img className='cart-logo__bottom' src={CartBottom} alt='cart logo' />
      </span>
    </section>
  );
};
