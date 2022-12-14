import React, { useEffect } from 'react'
import { useFetchProduct } from './useFetchProduct'
import { useNavigate } from 'react-router-dom'

export const useEditProduct = () => {
   const navigate = useNavigate()
   const {
      fetchProductCollection, 
      productIsError, 
      productIsLoading
   } = useFetchProduct()
   
   useEffect(()=>{
      fetchProductCollection()
   },[])

   function handleProductClick(value:React.MouseEvent<HTMLTableRowElement, MouseEvent>){
      const id = value.currentTarget.firstChild?.textContent
      navigate(`/edit-product/${id}`)
   }

   return {
      fetchProductCollection,
      productIsError, 
      productIsLoading,

      handleProductClick
   }
}
