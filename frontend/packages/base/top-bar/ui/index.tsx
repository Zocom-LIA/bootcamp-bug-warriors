import './style.scss';
import { CartButton, Animation } from '@zocom/cart-button';
import { Logo } from '@zocom/logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartButtonStyles } from '@zocom/types';

export const TopBar = () => {
  const currentRoute = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className='top-bar'>
      <img src={Logo} alt='logo' onClick={() => navigate('/')} />
      {currentRoute === '/' ? (
        <CartButton style={CartButtonStyles.MENU}></CartButton>
      ) : currentRoute === '/cart' ? (
        <CartButton style={CartButtonStyles.CART}></CartButton>
      ) : null}
    </div>
  );
};
