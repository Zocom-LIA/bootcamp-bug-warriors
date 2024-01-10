import "./style.scss";
import { CardInfo } from './card-info';
import { Button, ButtonType } from '@zocom/button';
import React from "react";

export enum OrderStatus {
  "READY" = "ready",
  "SERVED" = "served",
}

export type KitchenCardProps = {
  style?: OrderStatus;
};

export function KitchenCard({ style }: KitchenCardProps) {
  
  return (
    <article className={`kitchen-card ${style}`}>
      <h2 className='kitchen-card__ordernum'># ordernummer</h2>
      <section className='kitchen-card__info'>
        {/* CardInfo ska rendera ut innehållet i en order -> namn, antal, pris */}
        <CardInfo />
        <h2>totala sek</h2>
      </section>
      {/* Timer */}
      <Button 
        onClick={() => {console.log("Click")}} 
        type={ButtonType.REGULAR}>
      h</Button>
    </article>
  );
}