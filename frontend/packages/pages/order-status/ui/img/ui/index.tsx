import React from 'react';
import './style.scss';
import { img } from '@zocom/status-img';

export const StatusImage = () => {
  return (
    <div className='status__image-container'>
      <img className='status__image' src={img} alt='box image' />
    </div>
  );
};
