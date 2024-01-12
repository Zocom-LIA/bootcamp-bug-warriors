import './style.scss';
import { useState, useEffect } from 'react';
import { OrderStatus } from '@zocom/types';
import { calculateElapsedTime } from '@zocom/dashboard-page';

interface DashboardTimerProps {
  startTime: string;
  toBeCooked?: boolean;
  orderStatus: string;
  orderId: string;
}

export const DashboardTimer = ({
  startTime,
  toBeCooked = true,
  orderStatus,
  orderId,
}: DashboardTimerProps) => {
  const [elapsedTime, setElapsedTime] = useState('');
  const [toBeCookedTime, setToBeCookedTime] = useState(true);

  useEffect(() => {
    let savedTime;
    if (orderStatus !== OrderStatus.Pending) {
      savedTime = localStorage.getItem(`orderTime_${orderId}`);
    }
    savedTime = savedTime || calculateElapsedTime(startTime);
    setElapsedTime(savedTime);

    // Update elapsed time every second
    let interval: number;

    if (orderStatus === OrderStatus.Pending) {
      setToBeCookedTime(false);
      interval = setInterval(() => {
        setElapsedTime(calculateElapsedTime(startTime));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, orderStatus, orderId]);

  if (toBeCookedTime) {
    toBeCooked = false;
  }
  return (
    <div className='dashboard-timer'>
      {toBeCooked ? `VÄNTAT I ${elapsedTime}` : `TILLAGNINGSTID ${elapsedTime}`}
    </div>
  );
};
