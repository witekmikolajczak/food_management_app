import { NavLink } from "react-router-dom";

import styles from "./CustomNavLink.module.scss";
import { Typography } from "../Typography/Typography";

interface NavLinkProps {
  path: string;
  icon: JSX.Element;
  text: string;

  isHidden: boolean;
  fnHandleClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: string;
}

export const CustomNavLink = ({
  path,
  icon,
  text,
  isHidden,
  fnHandleClick,
}: NavLinkProps): JSX.Element => {
  return (
    <li onClick={(event) => fnHandleClick(event)} className={styles.wrapper}>
      <NavLink
        to={`/${path}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <div className={`${isHidden && styles.content}`}>
          <div className={styles["icon-container"]}>{icon}</div>
          <div className={styles["text-container"]}>
            {!isHidden ? text && <Typography variant="p" text={text} /> : ""}
          </div>
        </div>
      </NavLink>
    </li>
  );
};
