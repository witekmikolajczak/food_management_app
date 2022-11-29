import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { CustomNavLink } from '../Navlink/CustomNavLink';
import styles from './Sidebar.module.scss';

interface SidebarInterface {
  linksCollection: LinkInterface[];
}
export const Sidebar = ({
  linksCollection,
}: SidebarInterface): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`${styles.wrapper} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      <div className={styles['toggle-icon']}>
        {isOpen ? (
          <FaAngleRight
            size={25}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <FaAngleLeft
            size={25}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <div className={styles.content}>
        <CustomNavLink
          isHidden={!isOpen}
          linksCollection={linksCollection}
        />
      </div>
    </div>
  );
};
