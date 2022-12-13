import React from 'react';

import { Typography } from '../Typography/Typography';
import { Card } from '../Card/Card';
import styles from './Product.module.scss';

interface ProductProps {
  productCollection: {
    id: string;
    name: string;
    src: string;
    unit: string;
    count: string;
  }[]
}
export const Product = ({
  productCollection,
}: ProductProps): JSX.Element => {
  const renderProductList = productCollection.map(
    (product, index) => {
      return (
        <Card
          wrapperClassName={styles.wrapperClassName}
          contentClassName={styles.contentClassName}
          key={index}
        >
          <img src={product.src} alt={product.name} />
          <Typography variant="p" text={product.name} />
          <Typography
            variant="p"
            text={`${product.count} ${product.unit}`}
          />
        </Card>
      );
    }
  );
  return <>{renderProductList}</>;
};
