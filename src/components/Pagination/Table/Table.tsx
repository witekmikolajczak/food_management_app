import React from 'react';

import { Card } from '../../Card/Card';
import styles from './Table.module.scss';

interface TableProps {
  icon: JSX.Element;
  reciptCollection: RecentlyViewedRecipt[];
  fnHandleClick: (recipt: RecentlyViewedRecipt) => void;
  text: string;
}

export const Table = ({
  icon,
  reciptCollection,
  fnHandleClick,
  text,
}: TableProps) => {
  const renderReciptCollection = reciptCollection.map(
    (recipt, index) => {
      return (
        <tr
          onClick={() => fnHandleClick(recipt)}
          className={styles.recipt}
        >
          <td>{index}.</td>
          <td>{recipt.name}</td>
          <td>{recipt.viewed}</td>
          <td>{recipt.link}</td>
        </tr>
      );
    }
  );
  return (
    <Card
      wrapperClassName={styles.wrapperClassName}
      icon={icon}
      text={text}
    >
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Nazwa</th>
              <th>Ostatnio przeglądane</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{renderReciptCollection}</tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
};
