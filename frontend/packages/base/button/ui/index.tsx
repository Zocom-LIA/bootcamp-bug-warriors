import './style.scss';
import { ReactNode } from 'react';
/* Local Component Types */
export enum ButtonType {
  'REGULAR' = 'regular',
  'STRETCH' = 'stretch',
  'MENU' = 'menu',
  'INVERTED' = 'inverted',
  'READY' = 'ready',
  'SERVED' = 'served',
  'INCDEC' = 'incdec',
}

/* Component Props */
type ButtonProps = {
  children: ReactNode | ReactNode[];
  type?: ButtonType;
  onClick: () => void;
};

/* Component */
export const Button = ({
  children,
  type = ButtonType.REGULAR, // default value
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button__${type}`} onClick={() => onClick()}>
      {children}
    </button>
  );
};
