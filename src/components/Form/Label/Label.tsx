import React from "react";
import { Typography } from "../../Typography/Typography";

interface LabelInterface {
  htmlFor: string;
  labelText: string;
  labelVariant: "h1" | "h2" | "h3" | "p";
}
export const Label = ({
  htmlFor,
  labelText,
  labelVariant,
}: LabelInterface): JSX.Element => {
  return (
    <label htmlFor={htmlFor}>
      <Typography
        text={labelText ? labelText : ""}
        variant={labelVariant ? labelVariant : "p"}
      />
    </label>
  );
};
