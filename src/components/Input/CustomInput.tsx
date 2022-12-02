import React from 'react';

import styles from './CustomInput.module.scss';

interface InputProps {
  label?: boolean;
  labelText?: string;
  className?: string;
  placeholder: string;
  name: string;
  value: string | number | undefined;
  fnHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  label,
  labelText,
  className,
  placeholder,
  name,
  value,
  fnHandleChange,
}: InputProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {labelText}
        </label>
      )}
      <input
        className={styles.input}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(event) => fnHandleChange(event)}
      />
    </div>
  );
};
