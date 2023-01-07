import { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useFetchProduct } from "./useFetchProduct";
import { useNavigate } from "react-router-dom";
import {  useAppSelector } from "../../redux/hook";
import { useProductDeleteMutation } from "../../redux/api/product";
export const useEditProduct = () => {
  const navigate = useNavigate();
  const stateProductCollection = useAppSelector((state) => state.product);
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
  const [
    productDelete
  ] = useProductDeleteMutation();
  const { fetchProductCollection, productIsError, productIsLoading } =
    useFetchProduct();
  const [productCollection, setProductCollection] = useState<
    Array<ProductInterface>
  >([]);
  useEffect(() => {
    if (stateProductCollection) {
      const collection = stateProductCollection.map((product, index) => {
        return {
          positionNumber: index.toString(),
          productName: product.productName,
          productCount: product.productCount,
          productUnit: product.productUnit,
          delete: (
            <div>
              <AiFillEdit
                onClick={() => handleProductClick(product)}
                size={25}
              />
              <AiOutlineDelete
                onClick={() => handleProductDelete(product)}
                size={25}
              />
            </div>
          ),
        };
      });
      setProductCollection(collection);
    }
  }, [stateProductCollection]);
  useEffect(() => {
    fetchProductCollection();
  }, []);

  function handleProductClick(product: ProductInterface) {
    navigate(`/edit-product/${product.id}`);
  }
  function handleProductDelete(product: ProductInterface) {
    console.log(product.id);
    const data = {
      sessionToken: sessionToken,
      productId: product.id!,
    };
    productDelete(data);
  }

  return {
    fetchProductCollection,
    productIsError,
    productIsLoading,
    setProductCollection,
    productCollection,
  };
};
