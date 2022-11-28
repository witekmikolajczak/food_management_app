import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { AiFillCopyrightCircle } from 'react-icons/ai';

import { CustomNavLink } from '../Navlink/CustomNavLink';
import styles from './Sidebar.module.scss';

interface SidebarInterface {
  linksCollection: LinkInterface[];
}
export const Sidebar = ({
  linksCollection,
}: SidebarInterface): JSX.Element => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className={show ? styles.wrapper : styles.hidden}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{show ? 'Food manager' : 'F'}</h3>
          <VscMenu
            size={25}
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
        <CustomNavLink
          isHidden={!show}
          linksCollection={linksCollection}
        />
      </div>

      {/* <div className={styles['copy-right']}>
        <AiFillCopyrightCircle />
        <p>witekmikolajczak all rights reserved</p>
      </div> */}
    </div>
  );
};
