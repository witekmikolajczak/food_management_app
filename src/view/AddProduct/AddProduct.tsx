import React, { useEffect, useState } from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';

import { productUnitCollection } from '../../util/constant/productOptionCollection';
import {
  Layout,
  Card,
  Button,
  CustomInput,
  Select,
  Table,
} from '../../components';
import styles from './AddProduct.module.scss';

// ----------render table---------
const renderTableHeaders = () => {
  const TABLE_HEADERS = {
    positionName: 'Nr.',
    name: 'Nazwa',
    count: 'Ilość',
  };
  return (
    <tr>
      <td> {TABLE_HEADERS.positionName} </td>
      <td> {TABLE_HEADERS.name} </td>
      <td> {TABLE_HEADERS.count} </td>
    </tr>
  );
};
const renderTableBody = (
  products: {
    productName: string;
    productCount: string;
    productUnit: string;
  }[]
): JSX.Element => {
  const renderAddedProducts = products.map(
    ({ productCount, productName, productUnit }, index) => {
      return (
        <tr key={index}>
          <td> {index} </td>
          <td> {productName} </td>
          <td>
            <>
              {productCount}
              {productUnit}
            </>
          </td>
        </tr>
      );
    }
  );
  return <>{renderAddedProducts}</>;
};

export const AddProduct = (): JSX.Element => {
  // ---------state------------
  const [productName, setProductName] = useState<string>('');
  const [productCount, setProductCount] = useState<string>('');
  const [productDetails, setProductDetails] = useState<UnitInterface>(
    productUnitCollection[0]
  );
  const [selectedProductUnit, setSelectedProductUnit] =
    useState<string>('kg');

  const [product, setProduct] = useState<
    {
      productName: string;
      productCount: string;
      productUnit: string;
    }[]
  >([]);
  console.table({
    productName,
    productCount,
    selectedProductUnit,
    productDetails,
  });

  // -------------render options-------------------
  const optionCollectionList = productUnitCollection.map(
    (option, index) => {
      return (
        <option key={index} value={option.type}>
          {option.description}
        </option>
      );
    }
  );
  const unitCollection = productUnitCollection.map(
    (product, index) => {
      if (product === productDetails) {
        const renderUnits = product.units.map((unit, index) => {
          return (
            <option key={index} value={unit}>
              {unit}
            </option>
          );
        });
        return (
          <React.Fragment key={index}>{renderUnits}</React.Fragment>
        );
      } else {
        return <React.Fragment key={index}></React.Fragment>;
      }
    }
  );

  // -----------------handlers---------------------

  const handleProductType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    productUnitCollection.map((product) => {
      console.log(product.type);
      console.log(e.currentTarget.value);

      if (product.type === e.currentTarget.value)
        setProductDetails(product);
    });
  };

  const handleAddProduct = (
    productName: string,
    productCount: string,
    productUnit: string
  ) => {
    if (productName && productCount && productUnit)
      setProduct([
        ...product,
        {
          productName: productName,
          productCount: productCount,
          productUnit: productUnit,
        },
      ]);
  };

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
                value={productName}
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
                fnHandleSelectChange={(e) =>
                  setSelectedProductUnit(e.currentTarget.value)
                }
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
                value={productCount}
                fnHandleChange={(e) =>
                  setProductCount(e.currentTarget.value)
                }
              />
            </div>

            <div className={styles['button-container']}>
              <Button
                type="primary"
                text="Dodaj"
                fnHandleClick={() =>
                  handleAddProduct(
                    productName,
                    productCount,
                    selectedProductUnit
                  )
                }
              />
            </div>
          </div>
        </Card>

        <div className={styles.table}>
          {product && (
            <Table
              tHeadCollection={renderTableHeaders()}
              tBodyCollection={renderTableBody(product)}
              text="Dodane produkty"
              icon={<IoFastFoodOutline size={25} />}
              fnHandleClick={(recipt) => console.log(recipt)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
