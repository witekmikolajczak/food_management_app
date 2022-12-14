import React from "react";

import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import styles from "./Table.module.scss";

interface TableProps {
  icon: JSX.Element;
  tHeadCollection: any;
  tBodyCollection: any[];
  tFootCollection?: any[];
  text: string;
  className?: string;
  showFooter?: boolean;

  showButton?: boolean;
  buttonText?: string;
  buttonType?: "primary" | "secondary";
  isError?:boolean;
  isLoading?:boolean
  fnHandleButtonClick: () => void;
  fnHandleRecordClick: (e:React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
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
  isError,
  isLoading,
  fnHandleButtonClick,
  fnHandleRecordClick
}: 
TableProps) => {
  function handleTheadCollection(): JSX.Element[] {
    const collection: JSX.Element[] = Object.values(tHeadCollection).map(
      (value: any, index: number) => {
        return <td key={index}>{value}</td>;
      }
    );

    return collection;
  }

  function handleTbodyCollection(): JSX.Element[] {
    const arrayTr: any[] = [];
    tBodyCollection.map((value, mapIndex) => {
      const arrayTd: JSX.Element[] = [];
      Object.entries(value).map(([key, value]: any, index) => {
        arrayTd.push(<td key={key}>{value}</td>);
      });
      arrayTr.push(arrayTd);
    });
    const collection: JSX.Element[] = arrayTr.map((tr, trKey) => {
      return <tr onClick={(value)=>fnHandleRecordClick(value)}  key={trKey}>{tr}</tr>;
    });
    return collection;
  }

  return (
    <Card
      isError={isError}
      isLoading={isLoading}
      wrapperClassName={`${styles.wrapperClassName} ${className}`}
      icon={icon}
      text={text}
    >
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>{handleTheadCollection()}</tr>
          </thead>
          <tbody>{handleTbodyCollection()}</tbody>
          {showFooter && <tfoot>{tFootCollection}</tfoot>}
        </table>
      </div>
      <>
        {showButton && (
          <div className={styles["under-table"]}>
            <Button
              text={buttonText!}
              fnHandleClick={fnHandleButtonClick}
              type={buttonType!}
            />
          </div>
        )}
      </>
    </Card>
  );
};
