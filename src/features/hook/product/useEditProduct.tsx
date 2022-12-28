import React, { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useFetchProduct } from "./useFetchProduct";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loadActiveProduct } from "../../redux/reducer/product";
export const useEditProduct = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const stateProductCollection = useAppSelector((state) => state.product);
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
              <AiOutlineDelete onClick={() => console.log(product)} size={25} />
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

  return {
    fetchProductCollection,
    productIsError,
    productIsLoading,
    setProductCollection,
    productCollection,
  };
};
