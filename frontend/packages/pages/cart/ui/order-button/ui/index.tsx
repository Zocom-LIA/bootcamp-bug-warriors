import "./style.scss";
import { ReactNode } from "react";
import { StyleTypes } from "@zocom/types";
import React from "react";
import { Button, ButtonType } from "@zocom/button";
import { useNavigate } from "react-router-dom";
import { RootState } from "@zocom/store";
import { useSelector } from "react-redux";
import { MenuList } from "@zocom/types";


interface Response {
  message: string;
  orderId? : string;
}

async function sendOrder(url: string, order: MenuList): Promise<Response> {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order), //put data here
  });

  if(response.status === 500) {
    //Error
  }

  return await response.json();
}

export const OrderButton = () => {
  const cartState = useSelector((state: RootState) => state.cart.menuList);
  const navigate = useNavigate();

  async function handleClick() {

    const response = await sendOrder("https://bw2ge5zsh6.execute-api.eu-north-1.amazonaws.com/order", cartState);
    
    const orderId = response.orderId;
    
    //Navigate to next page when done (If successful?)
    navigate("/status", { state: orderId });
  }

  return (
      <Button type={ButtonType.REGULAR} onClick={() => handleClick()}>
        TAKE MY MONEY
      </Button>
  );
};