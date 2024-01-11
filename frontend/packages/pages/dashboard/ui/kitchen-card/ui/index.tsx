import './style.scss';
import { CardInfo } from './card-info';
import { Button, ButtonType } from '@zocom/button';
import { DashboardTimer } from '@zocom/dashboard-timer';
import { OrderStatus, OrderItem, ItemInOrder } from '@zocom/types';
import { changeOrderStatus } from '@zocom/dashboard-page';

export type KitchenCardProps = {
  style?: OrderStatus;
  item: OrderItem;
  onClick: () => void;
};

export function KitchenCard({ style, item, onClick }: KitchenCardProps) {
  async function handleClick(item: OrderItem, orderStatus: OrderStatus) {
    const orderId = item.SK.slice(1);
    await changeOrderStatus(orderId, orderStatus);
  }

  const itemsInOrder = item.items.map((item: ItemInOrder) => {
    return <CardInfo item={item} />;
  });

  return (
    <article className={`kitchen-card ${style}`}>
      <h1 className='kitchen-card__ordernum'>{item?.SK}</h1>
      <section className='kitchen-card__info'>{itemsInOrder}</section>
      <h2>{item?.totalPrice} sek</h2>
      <DashboardTimer startTime={Date.now()} />
      <Button
        onClick={() => {
          handleClick(item, OrderStatus.ReadyForDelivery);
          onClick();
        }}
        type={ButtonType.REGULAR}
      >
        {item.status === OrderStatus.ReadyForDelivery
          ? 'SERVERAD'
          : 'REDO ATT SERVERAS'}
      </Button>
    </article>
  );
}
