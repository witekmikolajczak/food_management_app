import React from 'react';

import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import styles from './Table.module.scss';

interface TableProps {
  icon: JSX.Element;
  tHeadCollection: JSX.Element[] | JSX.Element;
  tBodyCollection: JSX.Element[] | JSX.Element;
  tFootCollection?: JSX.Element[] | JSX.Element;
  text: string;
  fnHandleClick: (recipt: RecentlyViewedRecipt) => void;
  className?: string;
  showFooter?: boolean;

  showButton?: boolean;
  buttonText?: string;
  buttonType?: 'primary' | 'secondary';
  fnHandleButtonClick?: () => void;
}

export const Table = ({
  icon,
  text,
  tHeadCollection,
  tFootCollection,
  tBodyCollection,
  className,
  showFooter,
  showButton,
  buttonText,
  buttonType,
  fnHandleButtonClick,
  fnHandleClick,
}: TableProps) => {
  return (
    <Card
      wrapperClassName={`${styles.wrapperClassName} ${className}`}
      icon={icon}
      text={text}
    >
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>{tHeadCollection}</thead>
          <tbody>{tBodyCollection}</tbody>
          {showFooter && <tfoot>{tFootCollection}</tfoot>}
        </table>
      </div>
      <>
        {showButton && (
          <div className={styles['under-table']}>
            <Button
              text={buttonText!}
              fnHandleClick={() => fnHandleButtonClick}
              type={buttonType!}
            />
          </div>
        )}
      </>
    </Card>
  );
};
