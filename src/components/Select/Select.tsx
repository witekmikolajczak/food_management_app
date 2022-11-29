import React from 'react';

import styles from './Select.module.scss';

interface SelectProps {
  label: boolean;
  children: JSX.Element[] | JSX.Element;
  isDisabled?: boolean;
  labelText?: string;
  className?: string;
  fnHandleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}
export const Select = ({
  label,
  isDisabled,
  labelText,
  className,
  children,
  fnHandleSelectChange,
}: SelectProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label className={styles.label}>{labelText}</label>}
      <select
        disabled={isDisabled}
        className={styles.select}
        onChange={(event) => fnHandleSelectChange(event)}
      >
        {children}
      </select>
    </div>
  );
};
