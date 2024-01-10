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

    const response = await sendOrder(
      'https://lryd33u6vk.execute-api.eu-north-1.amazonaws.com/order',
      cartState
    );
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
