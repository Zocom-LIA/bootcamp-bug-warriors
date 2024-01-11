import React from 'react';
import './style.scss';
import { useState, useEffect } from 'react';

interface DashboardTimerProps {
  startTime: number;
  toBeCooked?: boolean;
}

export const DashboardTimer = ({
  startTime,
  toBeCooked = true,
}: DashboardTimerProps) => {
  const [elapsedTime, setElapsedTime] = useState('');

  function calculateTimeDifference(time: number): string {
    const timeDifference = Date.now() - time;

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

    let timeString = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;
    // console.log(timeString + " : " + timeDifference + " : hour:" + hours);

    timeString =
      hours > 0
        ? `${String(hours).padStart(2, '0')}:${timeString}`
        : timeString;
    return timeString;
  }

  useEffect(() => {
    if (toBeCooked) {
      const elapsedTime = setInterval(() => {
        const timeToDisplayString = calculateTimeDifference(startTime);
        setElapsedTime(`VÄNTAT I ${timeToDisplayString}`);
      }, 1000);
      return () => clearInterval(elapsedTime);
    } else {
      const timeToDisplayString = calculateTimeDifference(startTime);
      setElapsedTime(`TILLAGNINGSTID ${timeToDisplayString}`);
    }
  }, []);

  return <div className='dashboard-timer'>{elapsedTime}</div>;
};
