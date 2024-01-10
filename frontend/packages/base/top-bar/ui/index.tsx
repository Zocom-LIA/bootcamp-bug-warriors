import './style.scss';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { Logo } from '@zocom/logo';
import { useNavigate, useLocation } from 'react-router-dom';

export const TopBar = () => {
  const currentRoute = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className='top-bar'>
      <img src={Logo} alt='logo' onClick={() => navigate('/')} />
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
