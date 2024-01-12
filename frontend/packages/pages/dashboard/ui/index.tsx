import './style.scss';
import { Styles, Wrapper } from '@zocom/wrapper';
import { DashboardContainer } from '@zocom/dashboard-container';
import { KitchenCard } from '@zocom/kitchen-card';
import { DashboardColumn, Status } from '@zocom/dashboard-container__column';
import { TopBar } from '@zocom/top-bar';
import { fetchOrders } from '@zocom/dashboard-page';
import { useEffect, useState } from 'react';
import { OrderItem, OrderStatus } from '@zocom/types';

export const DashboardPage = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

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
  }, []);

  const handleCardClick = (orderId: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.SK === orderId && order.status === OrderStatus.Pending) {
        return {
          ...order,
          status: OrderStatus.ReadyForDelivery,
        };
      } else if (
        order.SK === orderId &&
        order.status === OrderStatus.ReadyForDelivery
      ) {
        return {
          ...order,
          status: OrderStatus.Delivered,
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const ordersPending = orders.filter((item) => item.status === 'Pending');
  const ordersPendingTimeSorted = ordersPending.sort((a, b) => {
    return new Date(a.orderTime).getTime() - new Date(b.orderTime).getTime();
  });
  const ordersToRender = ordersPendingTimeSorted.map((item) => {
    return (
      <KitchenCard
        key={item.SK}
        style={OrderStatus.Preparing}
        item={item}
        onClick={() => handleCardClick(item.SK)}
      />
    );
  });

  const ordersReady = orders.filter(
    (item) => item.status === 'ReadyForDelivery'
  );
  const ordersReadyTimeSorted = ordersReady.sort((a, b) => {
    return new Date(a.orderTime).getTime() - new Date(b.orderTime).getTime();
  });
  const ordersReadyToRender = ordersReadyTimeSorted.map((item) => {
    return (
      <KitchenCard
        key={item.SK}
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
