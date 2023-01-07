import React from "react";

import styles from "./CustomInput.module.scss";
import { Label } from "../Label/Label";

interface InputProps {
  label?: boolean;
  labelText: string;
  inputType: string;
  labelVariant: "h1" | "h2" | "h3" | "p";
  className?: string;
  placeholder: string;
  name: string;
  value?: string | number | undefined;
  fnHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({
  label,
  labelText,
  labelVariant,
  inputType,
  className,
  placeholder,
  name,
  value,
  fnHandleChange,
}: InputProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <Label
          htmlFor={name}
          labelText={labelText}
          labelVariant={labelVariant}
        />
      )}
      <input
        type={inputType}
        className={styles.input}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(event) => fnHandleChange(event)}
      />
    </div>
  );
};
