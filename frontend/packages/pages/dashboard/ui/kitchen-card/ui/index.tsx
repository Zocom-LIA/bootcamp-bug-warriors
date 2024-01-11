import './style.scss';
import { CardInfo } from './card-info';
import { Button, ButtonType } from '@zocom/button';
import { DashboardTimer } from '@zocom/dashboard-timer';
import { OrderStatus, OrderItem, ItemInOrder } from '@zocom/types';
import { changeOrderStatus } from '@zocom/dashboard-page';
import { calculateElapsedTime } from '@zocom/dashboard-page';

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

  const handleStatusChange = (newStatus: string) => {
    // ... logic to change the status ...

    if (newStatus !== 'Pending') {
      // Save the current elapsed time
      const currentTime = calculateElapsedTime(item.orderTime.toString());
      localStorage.setItem(`orderTime_${item.SK}`, currentTime);
    }
  };

  return (
    <article className={`kitchen-card ${style}`}>
      <h1 className='kitchen-card__ordernum'>{item?.SK}</h1>
      <section className='kitchen-card__info'>{itemsInOrder}</section>
      <h2>{item?.totalPrice} sek</h2>
      <DashboardTimer
        startTime={item.orderTime.toString()}
        orderStatus={item.status}
        orderId={item.SK}
      />
      {item.status === OrderStatus.Pending ? (
        <Button
          onClick={() => {
            handleClick(item, OrderStatus.ReadyForDelivery);
            onClick();
            handleStatusChange(OrderStatus.ReadyForDelivery);
          }}
          type={ButtonType.REGULAR}
        >
          {' '}
          REDO ATT SERVERAS{' '}
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleClick(item, OrderStatus.Delivered);
            onClick();
            handleStatusChange(OrderStatus.Delivered);
          }}
          type={ButtonType.REGULAR}
        >
          {' '}
          SERVERAD{' '}
        </Button>
      )}
    </article>
  );
}
