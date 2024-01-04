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

{/* TODO - replace with buttons */}
      <section className="item-box__amount"> 
        <button>+</button>
        <p>3 stycken</p>
        <button>-</button>
      </section>

    </article>
  );
};
