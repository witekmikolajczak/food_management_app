import { useEffect } from "react";
import { useProductCollectionMutation } from "../../redux/api/product";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loadProductCollection } from "../../redux/reducer/product";
export const useFetchProduct = () => {
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
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

  function fetchProductCollection(){
    productCollection(sessionToken);
  }
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
    fetchProductCollection
  };
};
