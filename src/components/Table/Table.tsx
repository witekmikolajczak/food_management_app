import React from 'react';

import { Card } from '../Card/Card';
import styles from './Table.module.scss';

interface TableProps {
  icon: JSX.Element;
  tHeadCollection: JSX.Element[] | JSX.Element;
  tBodyCollection: JSX.Element[] | JSX.Element;
  text: string;
  fnHandleClick: (recipt: RecentlyViewedRecipt) => void;
  className?: string;
}

export const Table = ({
  icon,
  text,
  tHeadCollection,
  tBodyCollection,
  className,
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
          {/* <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </Card>
  );
};
