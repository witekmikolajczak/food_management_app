import React from "react";

import styles from "./ProductCard.module.scss";
import { CustomInput, Card, Select, Button } from "../../index";
import { MdProductionQuantityLimits } from "react-icons/md";

interface ProductCardInterface {
  productName: string;
  productUnitCollection: UnitInterface[];
  unitCollection: any[];
  productCount: number;
  selectedProductUnit: string;
  buttonText: string;
  isTypeDisabled?: boolean;
  isLoading?: boolean;
  isError?: boolean;

  setProductName: (productName: string) => void;
  handleProductType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setSelectedProductUnit: (unit: string) => void;
  setProductCount: (count: string) => void;
  handleAddProduct: (data: ProductInterface) => void;
}
export const ProductCard = ({
  productName,
  productUnitCollection,
  unitCollection,
  productCount,
  selectedProductUnit,
  isTypeDisabled,
  buttonText,
  isLoading,
  isError,

  setProductName,
  handleProductType,
  setSelectedProductUnit,
  setProductCount,
  handleAddProduct,
}: ProductCardInterface) => {
  return (
    <Card
      isError={isError}
      isLoading={isLoading}
      icon={<MdProductionQuantityLimits size={25} />}
      text="Dodaj produkt"
      wrapperClassName={styles.wrapperClassName}
    >
      <div className={styles["card-content"]}>
        <div className={styles["product-name"]}>
          <CustomInput
            label={true}
            labelText="Dodaj nowy produkt"
            labelVariant="p"
            placeholder="Nazwa produktu"
            name="product-name"
            value={productName}
            fnHandleChange={(e) => setProductName(e.currentTarget.value)}
          />
        </div>
        <div className={styles["product-type"]}>
          <Select
            optionCollection={productUnitCollection}
            isDisabled={isTypeDisabled}
            label={true}
            htmlFor=""
            labelVariant="p"
            labelText="Typ produktu"
            fnHandleSelectChange={(e) => handleProductType(e)}
          />
        </div>
        <div className={styles["product-unit"]}>
          <Select
            optionCollection={unitCollection}
            label={true}
            htmlFor=""
            labelVariant="p"
            labelText="Jednostka produktu"
            fnHandleSelectChange={(e) =>
              setSelectedProductUnit(e.currentTarget.value)
            }
          />
        </div>
        <div className={styles["product-count"]}>
          <CustomInput
            label={true}
            labelText="Ilość"
            labelVariant="p"
            placeholder="np. 10"
            name="product-count"
            value={productCount}
            fnHandleChange={(e) => setProductCount(e.currentTarget.value)}
          />
        </div>

        <div className={styles["button-container"]}>
          <Button
            textVariant="p"
            type="primary"
            text={buttonText}
            fnHandleClick={() =>
              handleAddProduct({
                id: Math.random().toString(),
                productName: productName,
                productCount: productCount.toString(),
                productUnit: selectedProductUnit,
              })
            }
          />
        </div>
      </div>
    </Card>
  );
};
