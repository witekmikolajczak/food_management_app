import React, { useState } from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';

import { productUnitCollection } from '../../util/constant/productOptionCollection';
import {
  Layout,
  Card,
  Button,
  CustomInput,
  Select,
} from '../../components';
import styles from './AddProduct.module.scss';
export const AddProduct = (): JSX.Element => {
  const [porudctName, setProductName] = useState<string>('');
  const [porudctCount, setProductCount] = useState<string>('');
  const [productUnit, setProductUnit] =
    useState<ProductUnitsInterface>(productUnitCollection[0]);
  const handleProductType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    productUnitCollection.map((unit) => {
      if (unit.type === event.currentTarget.value) {
        setProductUnit(unit);
      }
    });
  };
  const optionCollectionList = productUnitCollection.map(
    (option, index) => {
      return (
        <option key={index} value={option.type}>
          {option.text}
        </option>
      );
    }
  );
  const unitCollection = productUnit.units.map((option, index) => {
    return (
      <option key={index} value={option.unit}>
        {option.unit}
      </option>
    );
  });

  return (
    <div className={styles.wrapper}>
      <Layout />
      <div className={styles.add}>
        <Card
          icon={<MdProductionQuantityLimits size={25} />}
          text="Dodaj produkt"
          wrapperClassName={styles.wrapperClassName}
        >
          <div className={styles['card-content']}>
            <div className={styles['product-name']}>
              <CustomInput
                label={true}
                labelText="Dodaj nowy produkt"
                placeholder="Nazwa produktu"
                name="product-name"
                value={porudctName}
                fnHandleChange={(e) =>
                  setProductName(e.currentTarget.value)
                }
              />
            </div>
            <div className={styles['product-type']}>
              <Select
                label={true}
                labelText="Typ produktu"
                fnHandleSelectChange={(e) => handleProductType(e)}
              >
                {optionCollectionList}
              </Select>
            </div>
            <div className={styles['product-unit']}>
              <Select
                label={true}
                labelText="Jednostka produktu"
                fnHandleSelectChange={(e) => handleProductType(e)}
              >
                {unitCollection}
              </Select>
            </div>
            <div className={styles['product-count']}>
              <CustomInput
                label={true}
                labelText="Ilość"
                placeholder="np. 10"
                name="product-count"
                value={porudctCount}
                fnHandleChange={(e) =>
                  setProductCount(e.currentTarget.value)
                }
              />
            </div>

            <div className={styles['button-container']}>
              <Button
                type="primary"
                text="Dodaj"
                fnHandleClick={() => console.log('clicked')}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
