import "./style.scss";
import { ReactNode } from "react";
import { StyleTypes } from "@zocom/types";
import React from "react";
import { Button, ButtonType } from "@zocom/button";
import { useNavigate } from "react-router-dom";

/* Component Props */
type OrderButtonProps = {
  onClick: () => void;
};

interface StandardResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

async function sendOrder(url: string): Promise<StandardResponse> {
  const repsone = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), //put data here
  });

  //Temp
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "OK" }),
  };
}

async function postOrder() {
  const response = await sendOrder("");

  if (response.statusCode === 500) {
    //exit function of throw error
  }

  //Save orderId to redux or send with navigate?

  //Navigate to next page when dpne (If successful?)
  const navigate = useNavigate();
  navigate("/status");
}

/* Component */
export const OrderButton = ({ onClick }: OrderButtonProps) => {
  return (
    <div className={`menu-button`} onClick={() => onClick()}>
      <Button type={ButtonType.REGULAR} onClick={() => postOrder()}>
        TAKE MY MONEY
      </Button>
    </div>
  );
};
