import React from 'react';

import styles from './Select.module.scss';

interface SelectProps {
  label: boolean;
  isDisabled?: boolean;
  labelText?: string;
  className?: string;
  optionCollection:any[]
  fnHandleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}
export const Select = ({
  label,
  isDisabled,
  labelText,
  className,
  optionCollection,
  fnHandleSelectChange,
}: SelectProps) => {

  function handleOptionCollection():JSX.Element[]{
    const collection = optionCollection.map((option, index)=>{ 
      return (<option onClick={()=>console.log(option)} key={index} value={option.description}>{option.description}</option>)
    })
    return collection
  }
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label className={styles.label}>{labelText}</label>}
      <select
        disabled={isDisabled}
        className={styles.select}
        onChange={(event) => fnHandleSelectChange(event)}
      >
        {handleOptionCollection()}
      </select>
    </div>
  );
};
