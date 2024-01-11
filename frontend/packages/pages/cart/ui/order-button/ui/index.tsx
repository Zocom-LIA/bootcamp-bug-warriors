import './style.scss';
import { Button, ButtonType } from '@zocom/button';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@zocom/store';
import { useSelector, useDispatch } from 'react-redux';
import { sendOrder } from '@zocom/order-button';

export const OrderButton = () => {
  const cartState = useSelector((state: RootState) => state.cart.menuList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClick() {
    if (cartState.wonton.length === 0 && cartState.dip.length === 0) {
      return;
    }
    const API_URL: string = import.meta.env.VITE_API_URL;

    const response = await sendOrder(`${API_URL}/order`, cartState);
    if (!response) return;

    const orderItem = response.orderItem;
    localStorage.setItem(orderItem.orderId, JSON.stringify(orderItem));

    dispatch({ type: 'CLEAR_CART' });
    navigate(`/status/`, { state: orderItem.orderId });
  }

  return (
    <Button type={ButtonType.REGULAR} onClick={() => handleClick()}>
      TAKE MY MONEY
    </Button>
  );
};
