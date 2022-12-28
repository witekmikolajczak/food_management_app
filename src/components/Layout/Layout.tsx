import React from "react";

import { SIDEBAR_LINKS_COLLECTION } from "../../features/constant/links";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";
interface LayoutInterface {
  children: JSX.Element;
}
export const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className={styles.wrapper}>
      <Sidebar linksCollection={SIDEBAR_LINKS_COLLECTION} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
