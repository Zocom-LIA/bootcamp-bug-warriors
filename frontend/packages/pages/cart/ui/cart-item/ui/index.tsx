import "./style.scss";
import { ReactNode } from "react";
import { Button, ButtonType } from '@zocom/button';

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
      {/* On click => add product */}
        <Button type={ButtonType.INCDEC}>+</Button>

        {/* display amount  */}
        <p>3 stycken</p>

      {/* On click => remove product product */}
        <Button type={ButtonType.INCDEC}>-</Button>
      </section>

    </article>
  );
};
