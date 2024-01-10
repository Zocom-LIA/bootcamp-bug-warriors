import './style.scss';
import React from 'react';
import { logo } from '@zocom/receipt-card';

export const ReceiptCard = () => {
  return (
    <section className='receipt-card'>
      <img className='receipt-card__logo' src={logo} alt='logo' />
      <h1 className='receipt-card__heading1'>KVITTO</h1>
      <h2 className='receipt-card__heading2'>#ORDERNR</h2>
      <section className='receipt-item'>
        <section className='receipt-item__info'>
          <span>KARLSTAD</span>
          <span>27 SEK</span>
        </section>
        <section className='receipt-item__amount'>
          <span>3 stycken</span>
        </section>
      </section>
      <section className='receipt-card__total'>
        <section className='receipt-card__item'>
          <span className='receipt-card__item-name'>TOTALT</span>
          <span className='receipt-card__tax'>inkl 20% moms</span>
        </section>
        <span className='receipt-card__total-price'>101</span>
      </section>
    </section>
  );
};
