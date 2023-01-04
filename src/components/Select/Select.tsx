import React from "react";

import { Label } from "../Form/Label/Label";
import styles from "./Select.module.scss";

interface SelectProps {
  label: boolean;
  isDisabled?: boolean;
  labelText: string;
  labelVariant: "h1" | "h2" | "h3" | "p";
  htmlFor: string;
  className?: string;
  optionCollection: any[];
  fnHandleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Select = ({
  label,
  isDisabled,
  labelText,
  labelVariant,
  htmlFor,
  className,
  optionCollection,
  fnHandleSelectChange,
}: SelectProps) => {
  function handleOptionCollection(): JSX.Element[] {
    const collection = optionCollection.map((option, index) => {
      return (
        <option
          onClick={() => console.log(option)}
          key={index}
          value={option.description}
        >
          {option.description}
        </option>
      );
    });
    return collection;
  }
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <Label
          htmlFor={htmlFor}
          labelText={labelText}
          labelVariant={labelVariant}
        />
      )}
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
