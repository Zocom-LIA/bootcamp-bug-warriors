import { ItemInOrder } from '@zocom/types';
import './style.scss';

export type CardInfoProps = {
  item: ItemInOrder;
};

export function CardInfo({ item }: CardInfoProps) {
  return (
    <article className='card-info'>
      <section className='card-info__prod'>
        <p>{item?.name} &nbsp; </p>
        <aside></aside>
        <p>&nbsp; {item?.quantity}</p>
      </section>
      <section className='card-info__total'>
        <p>{item?.price} sek</p>
      </section>
    </article>
  );
}
