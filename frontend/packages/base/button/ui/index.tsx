import './style.scss';
import { ReactNode } from 'react';
import { StyleTypes } from '@zocom/types';

/* Local Component Types */
export enum ButtonType {
    'REGULAR' = 'regular',
    'STRETCH' = 'stretch'
}

/* Component Props */
type ButtonProps = {
    children: ReactNode | ReactNode[];
    style?: StyleTypes;
    type?: ButtonType; 
    onClick: () => void;
}

/* Component */
export const Button = ({ 
    children, 
    type = ButtonType.REGULAR, // default value
    style = StyleTypes.DEFAULT, // default value
    onClick
}: ButtonProps) => {
    return (
        <button className={`button__${type}--${style}`} onClick={() => onClick()}>{children}</button>)
}