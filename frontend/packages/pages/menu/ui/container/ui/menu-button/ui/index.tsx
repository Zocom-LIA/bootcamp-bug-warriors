import "./style.scss";
import { ReactNode } from "react";
import { StyleTypes } from "@zocom/types";
import React from "react";

/* Component Props */
type MenuButtonProps = {
  menuItem: ReactNode[];
  onClick: () => void;
};

/* Component */
export const MenuButton = ({ menuItem, onClick }: MenuButtonProps) => {
  return (
    <div className={`menu-button`} onClick={() => onClick()}>
      <div className="menu-item">
        <div>{menuItem[0]}</div>
        {/* <div className="spacing">{".".repeat(20)}</div> */}
        <div>{menuItem[1]}</div>
      </div>
      <div className="menu-item-ingridients">{menuItem[2]}</div>
    </div>
  );
};
