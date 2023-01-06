import React, { useState } from "react";
import { Typography } from "../Typography/Typography";
import styles from "./Dropdown.module.scss";
interface DropdownInterface {
  children: JSX.Element[] | JSX.Element;
  text: string;
  icon: JSX.Element;
  isHidden: boolean;
  textVariant: "h1" | "h2" | "h3" | "p";
}
export const Dropdown = ({
  children,
  text,
  icon,
  isHidden,
  textVariant,
}: DropdownInterface) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={isHidden ? styles.hidden : styles.wrapper}
      onClick={() => setShow(!show)}
    >
      <div className={styles["icon-container"]}>{icon}</div>
      <div className={styles.content}>
        {!isHidden
          ? text && <Typography text={text} variant={textVariant} />
          : ""}
        {show && <div className={styles.subContainer}>{children}</div>}
      </div>
    </div>
  );
};
