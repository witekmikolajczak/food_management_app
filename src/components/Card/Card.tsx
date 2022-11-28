import React from 'react';

import { Typography } from '../Typography/Typography';
import styles from './Card.module.scss';
interface CardProps {
  children: JSX.Element | JSX.Element[];
  text?: string;
  icon?: JSX.Element;
  wrapperClassName?: string;
  contentClassName?: string;
}
export const Card = ({
  children,
  text,
  icon,
  contentClassName,
  wrapperClassName,
}: CardProps): JSX.Element => {
  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      {text && (
        <>
          <div className={styles.header}>
            {icon}
            <Typography variant="p" text={text} />
          </div>
        </>
      )}
      <div className={contentClassName}>{children}</div>
    </div>
  );
};
