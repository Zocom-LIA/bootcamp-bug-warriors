import { motion, useAnimation } from 'framer-motion';
import { CartTop, CartBottom } from '@zocom/cart-button';
import { useSelector } from 'react-redux';
import './style.scss';
import { RootState } from '@zocom/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CartButtonStyles } from '@zocom/types';

export type CartButtonProps = {
  style?: CartButtonStyles;
};

export const CartButton = ({ style }: CartButtonProps) => {
  const wontonCount = useSelector(
    (state: RootState) => state.cart?.menuList?.wonton.length
  );
  const dipCount = useSelector(
    (state: RootState) => state.cart?.menuList?.dip.length
  );

  const navigate = useNavigate();
  const cartCount = wontonCount + dipCount;
  const controls = useAnimation();

  useEffect(() => {
    if (cartCount > 0) {
      controls.start({
        rotate: [0, 20, 0],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
          repeat: 1,
          repeatType: 'mirror',
        },
      });
    }
  }, [controls, cartCount]);

  return (
    <motion.section
      className={`cart-button__${style}`}
      onClick={() => navigate('/cart')}
      whileHover={{ scale: 1.1 }}
    >
      {style === CartButtonStyles.MENU ? (
        <span className='cart-count'>{cartCount}</span>
      ) : null}
      <span className='cart-logo'>
        <motion.img
          className='cart-logo__top'
          src={CartTop}
          alt='cart logo'
          animate={controls}
          style={{ transformOrigin: 'right bottom' }}
        />
        <img className='cart-logo__bottom' src={CartBottom} alt='cart logo' />
      </span>
    </motion.section>
  );
};
