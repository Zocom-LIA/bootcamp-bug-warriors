import "./style.scss";
import { Button, ButtonType } from '@zocom/button';
import { decrease, increase } from "@zocom/cart-actions";
import { DipItem, WontonItem } from "@zocom/types";
import { useDispatch } from "react-redux";

type CartItemProps = {
  menuItem: WontonItem | DipItem;
};

export const CartItem = ({ menuItem }: CartItemProps) => {

  const dispatch = useDispatch();

  const handleIncrease = (menuItem: WontonItem | DipItem) => {
    const itemType = menuItem.price === 19 ? 'dip' : 'wonton';
    dispatch(increase(menuItem, itemType));
  };
  const handleDecrease = (menuItem: WontonItem | DipItem) => {
    const itemType = menuItem.price === 19 ? 'dip' : 'wonton';
    dispatch(decrease(menuItem, itemType));
  };
  
  return (
    <article className="item-box" >

      <section className="item-box__info">
          <h2>{menuItem.name}&nbsp; </h2>
          <h2>&nbsp; {menuItem.price * menuItem.quantity} SEK</h2>
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