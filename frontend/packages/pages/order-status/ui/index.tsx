import React from 'react';
import './style.scss';
import { img } from '@zocom/status-img';
import { Status } from '@zocom/status';
import { TopBar } from '@zocom/top-bar';
import { Styles, Wrapper } from '@zocom/wrapper';
import { ButtonType, Button } from '@zocom/button';

export const OrderStatusPage = () => {
  return (
    <Wrapper style={Styles.MAIN}>
      <TopBar />
      <img src={img} />
      <Status eta={4} orderNr='232edd2' />
      <div className='status__button-container'>
        <Button type={ButtonType.REGULAR} onClick={() => console.log('mer')}>
          BESTÄLL MER
        </Button>
        <Button
          type={ButtonType.INVERTED}
          onClick={() => console.log('kvitto')}
        >
          SE KVITTO
        </Button>
      </div>
    </Wrapper>
  );
};
