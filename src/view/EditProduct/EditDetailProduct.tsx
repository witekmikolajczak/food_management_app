import React, { useEffect } from "react";
import { productUnitCollection } from "../../features/constant/productOptionCollection";
import { Layout, Sidebar, ProductCard } from "../../components";
import { useAddProduct } from "../../features/hook/product/useAddProduct";
import { useAppSelector } from "../../features/redux/hook";
import { useEditProduct } from "../../features/hook/product/useEditProduct";
import { useUpdateProductMutation } from "../../features/redux/api/product";
import { useEditDetailProduct } from "../../features/hook/product/useEditDetailProduct";

export const EditDetailProduct = () => {
  const { unitCollection, selectedProductUnit, handleProductType } =
    useAddProduct();

  const [
    updateProduct,
    {
      data: productUpdateData,
      isError: productUpdateIsError,
      isLoading: productUpdateIsLoading,
      isSuccess: productUpdateIsSuccess,
    },
  ] = useUpdateProductMutation();
  const {
    currentProduct,
    productId,
    setCurrentProduct,
    isLoading,
    isError,
    isSuccess,
    sessionToken,
  } = useEditDetailProduct();

  function handleSendUpdateProduct() {
    const data = {
      productId: productId.id,
      sessionToken: sessionToken,
      data: currentProduct!,
    };
    updateProduct(data);
  }
  console.log(currentProduct);

  return (
    <Layout>
      {isSuccess && !isLoading && currentProduct ? (
        <ProductCard
          isError={isError}
          isLoading={isLoading}
          buttonText="Zaktualizuj"
          isTypeDisabled={true}
          productName={currentProduct.productName}
          productUnitCollection={productUnitCollection}
          unitCollection={unitCollection}
          productCount={currentProduct.productCount}
          selectedProductUnit={selectedProductUnit}
          setProductName={(value) =>
            setCurrentProduct({
              ...currentProduct,
              productName: value,
            })
          }
          handleProductType={handleProductType}
          setSelectedProductUnit={(value) =>
            setCurrentProduct({
              ...currentProduct,
              productUnit: value,
            })
          }
          setProductCount={(value) =>
            setCurrentProduct({
              ...currentProduct,
              productCount: Number(value),
            })
          }
          handleAddProduct={handleSendUpdateProduct}
        />
      ) : (
        <div></div>
      )}
    </Layout>
  );
};
