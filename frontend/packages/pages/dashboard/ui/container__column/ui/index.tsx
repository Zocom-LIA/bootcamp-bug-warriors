import { ReactNode } from 'react';
import './style.scss';

export enum Status {
  Ongoing = 'ONGOING',
  Done = 'DONE',
}

type DashboardColumnProps = {
  children: ReactNode | ReactNode[];
  status: Status;
};

export function DashboardColumn({ children, status }: DashboardColumnProps) {
  return (
    <section className='dasboard__wrapper'>
      <section className='dashboard-column__head'>
        <h2>{status}&nbsp; </h2>
        <span className='dashboard-column__head__line'></span>
      </section>
      <main className='dashboard-column'>{children}</main>
    </section>
  );
}
