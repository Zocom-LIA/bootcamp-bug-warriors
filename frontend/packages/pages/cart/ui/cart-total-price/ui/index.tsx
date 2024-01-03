import "./style.scss";
import { ReactNode } from "react";
import { StyleTypes } from "@zocom/types";
import React from "react";

/* Component Props */
type CartTotalPriceProps = {
  price: ReactNode;
};

/* Component */
export const CartTotalPrice = ({ price }: CartTotalPriceProps) => {
  return (
    <div className={"cart-total-price"}>
      <div>
        <div className="cart-text-size-medium">TOTALT</div>
        <div className="cart-text-size-small">inkl 20% moms</div>
      </div>
      <span className="cart-text-size-large">{price} SEK</span>
    </div>
  );
};
