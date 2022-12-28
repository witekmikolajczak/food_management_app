import React from "react";

import { Typography } from "../Typography/Typography";
import { Loading } from "../Loading/Loading";
import styles from "./Card.module.scss";
interface CardProps {
  children: JSX.Element | JSX.Element[];
  text?: string;
  icon?: JSX.Element;
  wrapperClassName?: string;
  contentClassName?: string;
  isError?: boolean;
  isLoading?: boolean;
}
export const Card = ({
  children,
  text,
  icon,
  contentClassName,
  wrapperClassName,
  isError,
  isLoading,
}: CardProps): JSX.Element => {
  function renderContent() {
    if (isError) {
      return <p>ERROR</p>;
    } else if (isLoading) {
      return <Loading />;
    } else {
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
    }
  }
  return renderContent();
};
