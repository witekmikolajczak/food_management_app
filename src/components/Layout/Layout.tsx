import React from 'react';
import { Outlet } from 'react-router-dom';

import { SIDEBAR_LINKS_COLLECTION } from '../../util/constant/links';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.scss';
export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar linksCollection={SIDEBAR_LINKS_COLLECTION} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
