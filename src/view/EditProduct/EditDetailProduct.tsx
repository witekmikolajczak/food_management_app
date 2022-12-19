import React, { useEffect } from "react";
import { productUnitCollection } from "../../features/constant/productOptionCollection";
import { Layout, Sidebar, ProductCard } from "../../components";
import { useAddProduct } from "../../features/hook/product/useAddProduct";
import { useAppSelector } from "../../features/redux/hook";


  const product = useAppSelector((state) => state.product[0]);
  useEffect(() => {
    console.log("here");
  }, [window.onbeforeunload]);
  return (
    <Layout>
      <ProductCard
        isTypeDisabled={true}
        productName={product.productName}
        productUnitCollection={productUnitCollection}
        unitCollection={unitCollection}
        productCount={product.productCount}
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
