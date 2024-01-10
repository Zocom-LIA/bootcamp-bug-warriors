import "./style.scss";
import { DipItem } from "@zocom/types";
import React from "react";

interface DipItemComponentProps {
  item: DipItem[];
  sauceList?: string[];
  selectedDip?: string[];
  handleAddItem: (item: DipItem) => void;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}

export const DipItemComponent = ({
  item,
  sauceList = [],
  selectedDip = [],
  handleAddItem,
  onclick,
}: DipItemComponentProps) => {
  const handleAddSelectedDips = () => {
    selectedDip.forEach((sauceName) => {
      const dipItem = item.find((dip) => dip.name === sauceName);
      if (dipItem) {
        handleAddItem(dipItem);
      }
    });
  };

  const buttonsList = sauceList.map((sauce) => (
    <button className="sauce_button" key={sauce} onClick={onclick}>
      {sauce}
    </button>
  ));

  return (
    <div className="menu-item" onClick={handleAddSelectedDips}>
      <section className="menu-item__product">
        <span className="menu-item-name">Dip</span>
        <span className="menu-item-price">19</span>
      </section>
      <div className="sauce_buttons-container">{buttonsList}</div>
    </div>
  );
};
