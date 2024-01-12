import { ReactNode } from 'react';
import './style.scss';

export enum Styles {
  'MOBILE' = 'mobile',
  'TABLET' = 'tablet',
  'MAIN' = 'main',
  'CART' = 'cart',
  'ETA' = 'eta',
  'DONE' = 'done',
  'RECEIPT' = 'receipt',
}

export type WrapperProps = {
  children: ReactNode | ReactNode[];
  style?: Styles;
};

export const Wrapper = ({ children, style }: WrapperProps) => {
  return <div className={`wrapper-${style}`}>{children}</div>;
};
