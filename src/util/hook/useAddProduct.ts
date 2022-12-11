import { useState } from "react";
import { productCollection } from "../constant/productCollection";
import { productUnitCollection } from "../constant/productOptionCollection";

export function useAddProduct(){
   const [showTable, setShowTable] = useState<boolean>(false);
   const [productName, setProductName] = useState<string>('');
   const [productCount, setProductCount] = useState<string>('');
   const [selectedProductUnit, setSelectedProductUnit] = useState<string>('kg');
   const [unitCollection, setUnitCollection] = useState<any[]>(productUnitCollection[0].units)
   const [products, setProducts] = useState<
     {
       productId: string;
       productName: string;
       productCount: string;
       productUnit: string;
       delete?:JSX.Element
     }[]
   >([]);

   const handleProductType = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const collection = productUnitCollection.filter((product)=>product.description === e.currentTarget.value)[0]
      setUnitCollection(collection.units)
    };  
   
  
   function handleDeleteFromTable(productId: string){
      setProducts(
        products.filter((value) => value.productId !== productId)
      );
   };

   return {
      showTable,
      productName,
      productCount,
      selectedProductUnit,
      unitCollection,
      products,

      handleProductType,
      handleDeleteFromTable,


      setShowTable,
      setProductName,
      setProductCount,
      setSelectedProductUnit,
      setUnitCollection,
      setProducts,
   }
}