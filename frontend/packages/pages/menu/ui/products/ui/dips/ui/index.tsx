import './style.scss';
import { DipItem } from '@zocom/types';
import React from 'react';

interface DipItemComponentProps {
  item: DipItem[];
  sauceList?: string[];
  selectedDip?: string[];
  // handleAddItem: (item: DipItem) => void;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DipItemComponent = ({
  item,
  sauceList = [],
  // handleAddItem,
  selectedDip,
  onclick,
}: DipItemComponentProps) => {
  const buttonsList = sauceList.map((sauce) => (
    <button className='sauce_button' key={sauce} onClick={onclick}>
      {sauce}
    </button>
  ));

  return (
    <div
      className='menu-item'
      // onClick={() => {
      //   handleAddItem(item);
      // }}
    >
      <section className='menu-item__product'>
        <span className='menu-item-name'>Dip</span>
        <span className='menu-item-price'>19</span>
      </section>
      <div className='sauce_buttons-container'>{buttonsList}</div>
    </div>
  );
};
