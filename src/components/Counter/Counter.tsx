import React, { useEffect, useState } from "react";

import { Typography } from "../Typography/Typography";

interface CounterInterface {
  min: number;
  max: number;
  delay: number;
  className?: string;
}
export const Counter = (props: CounterInterface) => {
  const [counter, setCounter] = useState<number>(0);

  const test = async (min: number, max: number) => {
    for (let count = min; count <= max; count++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setCounter(count);
          resolve(true);
        }, props.delay);
      });
    }
  };
  useEffect(() => {
    test(props.min, props.max);
  }, []);
  return (
    <div className={props.className}>
      <Typography variant="h1" text={counter.toString()} />
    </div>
  );
};
