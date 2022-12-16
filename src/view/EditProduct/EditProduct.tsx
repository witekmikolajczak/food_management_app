import React, { useEffect, useState } from 'react'
import { IoFastFoodOutline } from 'react-icons/io5';
import { Layout, Table } from '../../components'
import { useEditProduct } from '../../features/hook/product/useEditProduct';
import { useAppSelector } from '../../features/redux/hook';


import styles from './EditProduct.module.scss'

const TABLE_HEADERS = {
  positionName: "Nr.",
  name: "Nazwa",
  count: "Ilość",
  type: "Jednostka",
  delete: "Usuń",
};

export const EditProduct = () => {
  const {
    productIsError, 
    productIsLoading,
    setProductCollection,
    productCollection,
  } = useEditProduct()
  
  return (
    <Layout>
      <div>test
        <Table
          isError={productIsError}
          isLoading={productIsLoading}
          tHeadCollection={TABLE_HEADERS}
          tBodyCollection={productCollection}
          text="Edytuj wybrane produkty"
          icon={<IoFastFoodOutline size={25} />}
          fnHandleButtonClick={()=>console.log('test')}
          showButton={false}
          buttonText="Wyślij"
          buttonType="primary"
        />
      </div>
  </Layout>
    // <div className={styles.wrapper}>
  
    // </div>
  )
}
