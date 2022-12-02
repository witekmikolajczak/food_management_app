import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
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

export const AddProduct = (): JSX.Element => {
  // ---------state------------
  const [showTable, setShowTable] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [productCount, setProductCount] = useState<string>('');
  const [productDetails, setProductDetails] = useState<UnitInterface>(
    productUnitCollection[0]
  );
  const [selectedProductUnit, setSelectedProductUnit] =
    useState<string>('kg');

  const [products, setProducts] = useState<
    {
      productId: string;
      productName: string;
      productCount: string;
      productUnit: string;
    }[]
  >([]);

  useEffect(() => {
    if (products.length > 0) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  }, [products]);

  const renderTableHeaders = () => {
    const TABLE_HEADERS = {
      positionName: 'Nr.',
      name: 'Nazwa',
      count: 'Ilość',
      delete: 'Usuń',
    };
    return (
      <tr>
        <td>{TABLE_HEADERS.positionName}</td>
        <td>{TABLE_HEADERS.name}</td>
        <td>{TABLE_HEADERS.count}</td>
        <td>{TABLE_HEADERS.delete}</td>
      </tr>
    );
  };
  const renderTableBody = (
    products: {
      productId: string;
      productName: string;
      productCount: string;
      productUnit: string;
    }[]
  ): JSX.Element => {
    const renderAddedProducts = products.map(
      (
        { productId, productCount, productName, productUnit },
        index
      ) => {
        return (
          <tr key={index}>
            <td>{index}.</td>
            <td>{productName} </td>
            <td>
              <>
                {productCount}
                {productUnit}
              </>
            </td>
            <td className={styles.delete}>
              <AiOutlineDelete
                onClick={() => handleDeleteFromTable(productId)}
                size={25}
              />
            </td>
          </tr>
        );
      }
    );
    return <>{renderAddedProducts}</>;
  };

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
    productId: string,
    productName: string,
    productCount: string,
    productUnit: string
  ) => {
    if (productName && productCount && productUnit)
      setProducts([
        ...products,
        {
          productId: productId,
          productName: productName,
          productCount: productCount,
          productUnit: productUnit,
        },
      ]);
  };

  const handleDeleteFromTable = (productId: string) => {
    setProducts(
      products.filter((value) => value.productId !== productId)
    );
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
                    Math.random().toString(),
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
          <CSSTransition
            in={showTable}
            // nodeRef={nodeRef}
            timeout={300}
            classNames={{
              enter: styles.Enter,
              enterActive: styles.MyClassEnterActive,
              enterDone: styles.MyClassEnterDone,
              exitActive: styles.MyClassExit,
              exitDone: styles.MyClassExitActive,
            }}
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
          >
            <Table
              className={styles.MyClass}
              tHeadCollection={renderTableHeaders()}
              tBodyCollection={renderTableBody(products)}
              text="Dodane produkty"
              icon={<IoFastFoodOutline size={25} />}
              fnHandleClick={(recipt) => console.log(recipt)}
              showButton={true}
              buttonText="Wyślij"
              buttonType="primary"
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
