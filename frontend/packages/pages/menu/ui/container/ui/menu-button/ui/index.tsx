import './style.scss';
import { ReactNode } from 'react';
import { StyleTypes } from '@zocom/types';
import React from 'react';

/* Component Props */
type MenuButtonProps = {
  menuItem: ReactNode[];
  onClick: () => void;
};

/* Component */
export const MenuButton = ({ menuItem, onClick }: MenuButtonProps) => {
  return (
    <div className={`menu-button`} onClick={() => onClick()}>
      <div className='menu-item'>
        <span className='menu-item-name'>{menuItem[0]}</span>
        <span className='menu-item-price'>{menuItem[1]}</span>
      </div>
      <div className='menu-item-ingridients'>{menuItem[2]}</div>
    </div>
  );
};
