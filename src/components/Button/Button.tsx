import React from 'react';

import { Typography } from '../Typography/Typography';
import styles from './Button.module.scss';
interface ButtonInterface {
  type: 'primary' | 'secondary';
  className?: string;
  text: string;
  fnHandleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
export const Button = ({
  fnHandleClick,
  text,
  className,
  type,
}: ButtonInterface) => {
  const buttonStyle =
    type === 'primary' ? styles.primary : styles.secondary;

  return (
    <button
      className={!className ? buttonStyle : buttonStyle && className}
      onClick={(event) => fnHandleClick(event)}
    >
      <Typography variant="p" text={text} />
    </button>
  );
};
