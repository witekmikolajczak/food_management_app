import React from "react";
import { productUnitCollection } from "../../features/constant/productOptionCollection";
import { Layout, Sidebar, ProductCard } from "../../components";
import { useAddProduct } from "../../features/hook/product/useAddProduct";
export const EditDetailProduct = () => {
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
  return (
    <Layout>
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
        handleAddProduct={() => console.log("test")}
      />
    </Layout>
  );
};
