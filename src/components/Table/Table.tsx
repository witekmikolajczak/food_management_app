import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import styles from "./Table.module.scss";
import { Typography } from "../Typography/Typography";

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
  isError?: boolean;
  isLoading?: boolean;
  fnHandleButtonClick: () => void;
  // fnHandleRecordClick?: (e:React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
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
}: TableProps) => {
  function handleTheadCollection(): JSX.Element[] {
    const collection: JSX.Element[] = Object.values(tHeadCollection).map(
      (value: any, index: number) => {
        return (
          <td key={index}>
            <Typography variant="h3" text={value} />
          </td>
        );
      }
    );

    return collection;
  }

  function handleTbodyCollection(): JSX.Element[] {
    const arrayTr: any[] = [];
    tBodyCollection.map((value) => {
      const arrayTd: JSX.Element[] = [];
      Object.entries(value).map(([key, value]: any) => {
        arrayTd.push(
          <td key={key}>
            <Typography variant="p" text={value} />
          </td>
        );
      });
      arrayTr.push(arrayTd);
    });
    const collection: JSX.Element[] = arrayTr.map((tr, trKey) => {
      return <tr key={trKey}>{tr}</tr>;
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
      textVariant="p"
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
