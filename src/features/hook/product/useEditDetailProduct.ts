import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductObjectMutation } from "../../redux/api/product";
import { useAppSelector } from "../../redux/hook";

export const useEditDetailProduct = () => {
  const productId = useParams() as ReturnType<any>;
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
  const [currentProduct, setCurrentProduct] =
    useState<CurrentProductInterface>();
  const [productObject, { isError, isSuccess, isLoading, data }] =
    useProductObjectMutation();
  useEffect(() => {
    if (productId === undefined) {
      console.log("ProductId does not exist");
    } else {
      const data = {
        sessionToken: sessionToken,
        productId: productId.id,
      };
      productObject(data);
    }
  }, [productId]);

  useEffect(() => {
    if (isSuccess && !isError && !isLoading) {
      setCurrentProduct(data);
    }
  }, [isError, isSuccess, isLoading]);
  return {
    currentProduct,
    setCurrentProduct,
    isLoading,
    isError,
    isSuccess,
    productId,
    sessionToken,
  };
};
