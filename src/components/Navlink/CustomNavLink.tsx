import { NavLink } from 'react-router-dom';

import styles from './CustomNavLink.module.scss';

interface NavLinkProps {
  linksCollection: LinkInterface[];
  isHidden: boolean;
  className?: string;
}

export const CustomNavLink = ({
  linksCollection,
  isHidden,
}: NavLinkProps): JSX.Element => {
  const renderLinks = linksCollection.map((link, index) => {
    return (
      <li className={styles.wrapper} key={index}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          <div className={`${isHidden && styles.content}`}>
            <div className={styles['icon-container']}>
              {link.icon}
            </div>

            <div className={styles['text-container']}>
              {!isHidden ? link.name && <p>{link.name}</p> : ''}
            </div>
          </div>
        </NavLink>
      </li>
    );
  });
  return <>{renderLinks}</>;
};
