import "./style.scss";
import { ReactNode } from "react";
// import React from "react";

type CartItemProps = {
  menuItem: ReactNode[];
};

export const CartItem = ({ menuItem }: CartItemProps) => {
  return (
    <article className="item-box" >

      <section className="item-box__info">
        <h2>{menuItem[0]}&nbsp; </h2>
        <h2>&nbsp; {menuItem[1]} SEK</h2>
      </section>

      <section className="item-box__amount"> 
      {/* connect inc */}
        <button className="item-box__amount__inc-dec">+</button> 
        <p>3 stycken</p>
      {/* connect dec */}
        <button className="item-box__amount__inc-dec">-</button>
      </section>

    </article>
  );
};
