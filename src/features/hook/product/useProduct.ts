import { useEffect } from "react";
import { useProductCollectionMutation } from "../../redux/api/product";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loadProductCollection } from "../../redux/reducer/product";
export const useProduct = () => {
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
  const productArray = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const [
    productCollection,
    {
      isError: productIsError,
      isLoading: productIsLoading,
      isSuccess: productIsSuccess,
      data: productData,
    },
  ] = useProductCollectionMutation();
  useEffect(() => {
    productCollection(sessionToken);
  }, []);

  useEffect(() => {
    if (productData) {
      dispatch(loadProductCollection(productData));
    }
  }, [productData]);

  return {
    productData,
    productIsError,
    productIsLoading,
    productIsSuccess,
  };
};
