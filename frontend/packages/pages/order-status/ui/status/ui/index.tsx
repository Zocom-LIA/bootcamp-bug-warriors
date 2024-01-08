import './style.scss';
import React, { useEffect, useState } from 'react';

type Props = {
  orderNr: string;
  eta: number;
};

export const Status = ({ orderNr, eta }: Props) => {
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
    <section className='status-container'>
      <p className='status-text'>
        {orderReady ? 'DINA WONTONS ÄR KLARA!' : 'DINA WONTONS TILLAGAS!'}
      </p>
      <p className='status-eta'>
        {orderReady ? '-' : `ETA ${timeLeftInMinutes} MIN`}
      </p>
      <p className='status-order'>{orderNr}</p>
    </section>
  );
};
