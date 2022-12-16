import React from "react";

import styles from "./ProductCard.module.scss";
import { CustomInput, Card, Select, Button } from "../../index";
import { MdProductionQuantityLimits } from "react-icons/md";

interface ProductCardInterface {
  productName: string;
  productUnitCollection: UnitInterface[];
  unitCollection: any[];
  productCount: string;
  selectedProductUnit: string;

  setProductName: (value: React.SetStateAction<string>) => void;
  handleProductType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setSelectedProductUnit: (value: React.SetStateAction<string>) => void;
  setProductCount: (value: React.SetStateAction<string>) => void;
  handleAddProduct: (
    productId: string,
    productName: string,
    productCount: string,
    productUnit: string
  ) => void;
}
export const ProductCard = ({
  productName,
  productUnitCollection,
  unitCollection,
  productCount,
  selectedProductUnit,
  setProductName,
  handleProductType,
  setSelectedProductUnit,
  setProductCount,
  handleAddProduct,
}: ProductCardInterface) => {
  return (
    <Card
      icon={<MdProductionQuantityLimits size={25} />}
      text="Dodaj produkt"
      wrapperClassName={styles.wrapperClassName}
    >
      <div className={styles["card-content"]}>
        <div className={styles["product-name"]}>
          <CustomInput
            label={true}
            labelText="Dodaj nowy produkt"
            placeholder="Nazwa produktu"
            name="product-name"
            value={productName}
            fnHandleChange={(e) => setProductName(e.currentTarget.value)}
          />
        </div>
        <div className={styles["product-type"]}>
          <Select
            optionCollection={productUnitCollection}
            label={true}
            labelText="Typ produktu"
            fnHandleSelectChange={(e) => handleProductType(e)}
          />
        </div>
        <div className={styles["product-unit"]}>
          <Select
            optionCollection={unitCollection}
            label={true}
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
            placeholder="np. 10"
            name="product-count"
            value={productCount}
            fnHandleChange={(e) => setProductCount(e.currentTarget.value)}
          />
        </div>

        <div className={styles["button-container"]}>
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
  );
};
