import "./style.scss";
// import { ReactNode } from "react";
import { Button, ButtonType } from '@zocom/button';
import { decrease, increase } from "@zocom/cart-actions";
import { DipItem, WontonItem } from "@zocom/types";
import { useDispatch } from "react-redux";

type CartItemProps = {
  menuItem: WontonItem | DipItem;
};

export const CartItem = ({ menuItem }: CartItemProps) => {

console.log(menuItem);

  const dispatch = useDispatch();

  const handleIncrease = (menuItem: WontonItem | DipItem) => {
    dispatch(increase(menuItem, 'wonton'));
  };
  const handleDecrease = (item: WontonItem | DipItem) => {
    dispatch(decrease(item, 'wonton'));
  };
  
  return (
    <article className="item-box" >

      <section className="item-box__info">
        <h2>{menuItem.name}&nbsp; </h2>
        <h2>&nbsp; {menuItem.price*menuItem.quantity} SEK</h2>
      </section>

      <section className="item-box__amount"> 
        <Button 
        type={ButtonType.INCDEC}
        onClick={() => handleIncrease(menuItem)}
        >+</Button>
        <p>{menuItem.quantity} stycken</p>
        <Button
        type={ButtonType.INCDEC}
        onClick={() => handleDecrease(menuItem)}
        >-</Button>
      </section>

    </article>
  );
};
