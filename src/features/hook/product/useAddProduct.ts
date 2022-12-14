import { useEffect, useState } from "react";
import { productUnitCollection } from "../../constant/productOptionCollection";
import { useCreateProductMutation } from "../../redux/api/product";
import { useAppSelector } from "../../redux/hook";

export function useAddProduct() {
  const [
    createProduct,
    {
      isError: createProductError,
      isLoading: createProductLoading,
      isSuccess: createProductSuccess,
    },
  ] = useCreateProductMutation();
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [productCount, setProductCount] = useState<string>("");
  const [selectedProductUnit, setSelectedProductUnit] = useState<string>("kg");
  const [unitCollection, setUnitCollection] = useState<any[]>(
    productUnitCollection[0].units
  );
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const handleProductType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const collection = productUnitCollection.filter(
      (product) => product.description === e.currentTarget.value
    )[0];
    setUnitCollection(collection.units);
  };

  function handleDeleteFromTable(productId: string) {
    setProducts((prev) => [...prev.filter((item) => item.id !== productId)]);
  }

  function handleSendProduct() {
    const array: ProductInterface[] = [];
    products.map((product) => {
      const result = {
        productName: product.productName,
        productCount: product.productCount,
        productUnit: product.productUnit,
        productType: selectedProductUnit,
      };
      array.push(result);
    });

    const dataToSend = {
      body: array,
      sessionToken: sessionToken,
    };
    createProduct(dataToSend);
  }

  useEffect(() => {
    if (createProductSuccess) {
      setProducts([]);
    }
  }, [createProductError, createProductLoading, createProductSuccess]);

  return {
    showTable,
    productName,
    productCount,
    selectedProductUnit,
    unitCollection,
    products,

    handleProductType,
    handleDeleteFromTable,
    handleSendProduct,

    setShowTable,
    setProductName,
    setProductCount,
    setSelectedProductUnit,
    setUnitCollection,
    setProducts,
  };
}
