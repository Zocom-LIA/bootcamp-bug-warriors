import './style.scss';
import React from 'react';
import { Styles, Wrapper } from '@zocom/wrapper';
import { TopBar } from '@zocom/top-bar';
import { ReceiptCard } from '@zocom/receipt-card';
import { logo } from '@zocom/receipt-card';
import { Button } from '@zocom/button';
import { useNavigate } from 'react-router-dom';

export const ReceiptPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper style={Styles.RECEIPT}>
      <TopBar />
      <section className='receipt-card__container'>
        <ReceiptCard />
        <Button onClick={() => navigate('/')}>GÖR EN NY BESTÄLLNING</Button>
      </section>
    </Wrapper>
  );
};
