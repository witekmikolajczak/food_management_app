import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

import { productUnitCollection } from "../../features/constant/productOptionCollection";
import { Layout, Table, ProductCard } from "../../components";
import styles from "./AddProduct.module.scss";
import { useAddProduct } from "../../features/hook/product/useAddProduct";

// ----------render table---------
const TABLE_HEADERS = {
  positionName: "Nr.",
  name: "Nazwa",
  count: "Ilość",
  type: "Jednostka",
  delete: "Usuń",
};

export const AddProduct = (): JSX.Element => {
  const {
    products,
    productName,
    unitCollection,
    productCount,
    selectedProductUnit,

    setProductCount,
    setProducts,
    setProductName,
    setSelectedProductUnit,

    handleDeleteFromTable,
    handleProductType,
    handleSendProduct,
  } = useAddProduct();

  function handleAddProduct(
    productId: string,
    productName: string,
    productCount: string,
    productUnit: string
  ) {
    if (productName && productCount && productUnit) {
      setProducts([
        ...products,
        {
          productId: productId,
          productName: productName,
          productCount: productCount,
          productUnit: productUnit,
          delete: (
            <AiOutlineDelete
              onClick={() => handleDeleteFromTable(productId)}
              size={25}
            />
          ),
        },
      ]);
    }
  }
  return (
    <Layout>
      <div className={styles.add}>
        <ProductCard
          productName={productName}
          productUnitCollection={productUnitCollection}
          unitCollection={unitCollection}
          productCount={productCount}
          selectedProductUnit={selectedProductUnit}
          setProductName={setProductName}
          handleProductType={handleProductType}
          setSelectedProductUnit={setSelectedProductUnit}
          setProductCount={setProductCount}
          handleAddProduct={handleAddProduct}
        />
        <div className={styles.table}>
          <Table
            className={styles.MyClass}
            tHeadCollection={TABLE_HEADERS}
            tBodyCollection={products}
            text="Dodane produkty"
            icon={<IoFastFoodOutline size={25} />}
            fnHandleButtonClick={handleSendProduct}
            showButton={true}
            buttonText="Wyślij"
            buttonType="primary"
          />
        </div>
      </div>
    </Layout>
  );
};
