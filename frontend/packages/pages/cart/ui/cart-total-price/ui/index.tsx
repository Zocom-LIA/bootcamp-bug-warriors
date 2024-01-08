import "./style.scss";
// import { ReactNode } from "react";
import React from "react";
import { Product } from "@zocom/types";

type CartTotalPriceProps = {
  wonton: Product[];
  dip: Product[];
};

/* Component */
export const CartTotalPrice = ({
  wonton = [],
  dip = [],
}: CartTotalPriceProps) => {
  const totalPrice = [...wonton, ...dip].reduce((tPrice, item) => {
    return tPrice + item.price * item.quantity;
  }, 0);

  return (
    <div className={"cart-total-price"}>
      <div>
        <div className="cart-text-size-medium">TOTALT</div>
        <div className="cart-text-size-small">inkl 20% moms</div>
      </div>
      <span className="cart-text-size-large">{totalPrice} SEK</span>
    </div>
  );
};
