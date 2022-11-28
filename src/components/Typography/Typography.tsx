import React from 'react';
import styles from './Typography.module.scss';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
} as const;

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text: string;
}
export const Typography = ({ variant, text }: TypographyProps) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component className={styles[`typography--variant-${variant}`]}>
      {text}
    </Component>
  );
};
