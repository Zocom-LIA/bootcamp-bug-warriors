import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { DashboardContainer } from '@zocom/dashboard-container';
import { KitchenCard } from '@zocom/kitchen-card';
import { DashboardColumn, Status } from '@zocom/dashboard-container__column';
import { TopBar } from '@zocom/top-bar';
import { changeOrderStatus, fetchOrders } from '@zocom/dashboard-page';
import { useEffect, useState } from 'react';
import { OrderItem, OrderStatus } from '@zocom/types';

export const DashboardPage = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchOrders();
        setOrders(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [change]);

  console.log(orders);

  const handleCardClick = (orderId: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.SK === orderId) {
        return {
          ...order,
          status:
            order.status === OrderStatus.Pending
              ? OrderStatus.ReadyForDelivery
              : OrderStatus.Pending,
        };
      }
      return order;
    });
    setOrders(updatedOrders);
    setChange(!change);
  };

  const ordersPending = orders.filter((item) => item.status === 'Pending');
  const ordersToRender = ordersPending.map((item) => {
    return (
      <KitchenCard
        style={OrderStatus.Preparing}
        item={item}
        onClick={() => handleCardClick(item.SK)}
      />
    );
  });

  const ordersReady = orders.filter(
    (item) => item.status === 'ReadyForDelivery'
  );
  const ordersReadyToRender = ordersReady.map((item) => {
    return (
      <KitchenCard
        style={OrderStatus.ReadyForDelivery}
        item={item}
        onClick={() => handleCardClick(item.SK)}
      />
    );
  });

  return (
    <Wrapper style={Styles.TABLET}>
      <section className='dashboard-top'>
        <TopBar />
        <h1>KITCHEN VIEW</h1>
      </section>
      <DashboardContainer>
        <div className='dashboard-columns'>
          <DashboardColumn status={Status.Ongoing}>
            {ordersToRender}
          </DashboardColumn>
        </div>
        <div className='dashboard-columns'>
          <DashboardColumn status={Status.Done}>
            {ordersReadyToRender}
          </DashboardColumn>
        </div>
      </DashboardContainer>
    </Wrapper>
  );
};
