import { ItemInOrder } from '@zocom/types';
import './style.scss';

export type CardInfoProps = {
  item: ItemInOrder;
};

export function CardInfo({ item }: CardInfoProps) {
  return (
    <article className='card-info'>
      <section className='card-info__prod'>
        <p className='card-info__prod-name'>{item?.name} &nbsp; </p>
        <span className='card-info__prod-line'></span>
        <p className='card-info__prod-amount'>&nbsp; {item?.quantity} st</p>
      </section>
      <section className='card-info__total'>
        <p>{item?.price} sek</p>
      </section>
    </article>
  );
}
