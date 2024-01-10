import './style.scss';
import { Button, ButtonType } from '@zocom/button';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@zocom/store';
import { useSelector } from 'react-redux';
import { sendOrder } from '@zocom/order-button';

export const OrderButton = () => {
  const cartState = useSelector((state: RootState) => state.cart.menuList);
  const navigate = useNavigate();

  async function handleClick() {
    const response = await sendOrder(
      'https://lryd33u6vk.execute-api.eu-north-1.amazonaws.com/order',
      cartState
    );
    const orderItem = response.orderItem;
    localStorage.setItem(orderItem.orderId, JSON.stringify(orderItem));

    navigate(`/status/`, { state: orderItem.orderId });
  }

  return (
    <Button type={ButtonType.REGULAR} onClick={() => handleClick()}>
      TAKE MY MONEY
    </Button>
  );
};
