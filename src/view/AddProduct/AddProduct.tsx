import React from "react";
import { CSSTransition } from "react-transition-group";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

import { productUnitCollection } from "../../features/constant/productOptionCollection";
import {
  Layout,
  Card,
  Button,
  CustomInput,
  Select,
  Table,
} from "../../components";
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
  // useEffect(() => {
  //   if (products.length > 0) {
  //     setShowTable(true);
  //   } else {
  //     setShowTable(false);
  //   }
  // }, [products]);

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

      <div className={styles.table}>
        <Table
          className={styles.MyClass}
          tHeadCollection={TABLE_HEADERS}
          tBodyCollection={products}
          text="Dodane produkty"
          icon={<IoFastFoodOutline size={25} />}
          fnHandleButtonClick={handleSendProduct}
          fnHandleRecordClick={(value)=>console.log(value)}
          showButton={true}
          buttonText="Wyślij"
          buttonType="primary"
        />
        {/* <CSSTransition
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

      </CSSTransition> */}
      </div>
      </div>
    </Layout>
  );
};
