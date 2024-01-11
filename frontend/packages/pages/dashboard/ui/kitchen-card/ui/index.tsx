import "./style.scss";
import { CardInfo } from './card-info';
import { Button, ButtonType } from '@zocom/button';
import { DashboardTimer } from '@zocom/dashboard-timer';

export enum OrderStatus {
  "ONGOING" = "ongoing",
  "DONE" = "done",
}

export type KitchenCardProps = {
  style?: OrderStatus;
};


export function KitchenCard({ style }: KitchenCardProps) {

  
  return (
    <article className={`kitchen-card ${style}`}>
      <h1 className='kitchen-card__ordernum'># ordernummer</h1>
      <section className='kitchen-card__info'>
        {/* CardInfo ska rendera ut innehållet i en order -> produkterna ( inkl. namn, antal, pris )*/}
        <CardInfo/>
      </section>
      <h2>totala sek</h2>
      <DashboardTimer />
      <Button 
        onClick={() => {console.log("Click")}} 
        type={ButtonType.REGULAR}>
          {/* {order.status === 'done' ? 'SERVERAD' : 'REDO ATT SERVERAS'} */} knappis
      </Button>
    </article>
  );
}