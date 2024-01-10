import './style.scss';
import { logo } from '@zocom/receipt-card';
import { useLocation } from 'react-router-dom';

type Item = {
  desc: string;
  name: string;
  preperationTime: string;
  price: number;
  quantity: number;
};

export const ReceiptCard = () => {
  const orderItem = JSON.parse(useLocation().state);
  const items = orderItem.items.map((item: Item, index: number) => {
    return (
      <section className='receipt-item' key={index}>
        <section className='receipt-item__info'>
          <span>{item.name}</span>
          <span>{item.price} SEK</span>
        </section>
        <section className='receipt-item__amount'>
          <span>{item.quantity} stycken</span>
        </section>
      </section>
    );
  });

  return (
    <section className='receipt-card'>
      <img className='receipt-card__logo' src={logo} alt='logo' />
      <h1 className='receipt-card__heading1'>KVITTO</h1>
      <h2 className='receipt-card__heading2'>#{orderItem.orderId}</h2>
      {items}
      <section className='receipt-card__total'>
        <section className='receipt-card__item'>
          <span className='receipt-card__item-name'>TOTALT</span>
          <span className='receipt-card__tax'>inkl 20% moms</span>
        </section>
        <span className='receipt-card__total-price'>
          {orderItem.totalPrice}
        </span>
      </section>
    </section>
  );
};
