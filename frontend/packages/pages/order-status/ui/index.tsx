import './style.scss';
import { img } from '@zocom/status-img';
import { Status } from '@zocom/status';
import { TopBar } from '@zocom/top-bar';
import { Styles, Wrapper } from '@zocom/wrapper';
import { ButtonType, Button } from '@zocom/button';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const OrderStatusPage = () => {
  const orderId = useLocation().state;
  const navigate = useNavigate();
  const orderItem = localStorage.getItem(orderId);
  let eta = 0;
  if (orderItem) {
    eta = JSON.parse(orderItem).eta;
  }
  const [timeLeftInMinutes, setTimeLeftInMinutes] = useState(eta);
  const [orderReady, setOrderReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeftInMinutes > 1) {
        setTimeLeftInMinutes(timeLeftInMinutes - 1);
      } else {
        setOrderReady(true);
      }
    }, 60000);
    return () => clearTimeout(timer);
  }, [timeLeftInMinutes]);

  return (
    <Wrapper style={orderReady ? Styles.DONE : Styles.ETA}>
      <TopBar />
      <img src={img} />
      <Status
        eta={timeLeftInMinutes}
        orderNr={`#${orderId}`}
        orderReady={orderReady}
      />
      <div className='status__button-container'>
        <Button type={ButtonType.REGULAR} onClick={() => navigate('/')}>
          BESTÄLL MER
        </Button>
        <Button
          type={ButtonType.INVERTED}
          onClick={() => navigate('/receipt', { state: orderItem })}
        >
          SE KVITTO
        </Button>
      </div>
    </Wrapper>
  );
};
