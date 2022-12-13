import { useEffect } from "react"
import { useProductCollectionMutation } from "../../redux/api/product"
import { useAppSelector } from "../../redux/hook"
export const useProduct=()=>{
   const sessionToken = useAppSelector((state)=>state.auth.sessionToken)
   const [
      productCollection,
      {
        isError: productIsError,
        isLoading:productIsLoading,
        isSuccess:productIsSuccess,
        data: productData
      }
    ] = useProductCollectionMutation()
   
   useEffect(()=>{
      productCollection(sessionToken)
   },[])

   return {
      productData,
      productIsError,
      productIsLoading,
      productIsSuccess,
   }
}