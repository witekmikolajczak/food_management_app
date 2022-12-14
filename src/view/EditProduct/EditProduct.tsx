import React from 'react'
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
    handleProductClick
  } = useEditProduct()
  const productCollection = useAppSelector((state)=>state.product)
  console.log(productCollection);
  
  return (
    <div className={styles.wrapper}>
      <Layout>
        <div className={styles.content}>test
          <Table
            isError={productIsError}
            isLoading={productIsLoading}
            className={styles.MyClass}
            tHeadCollection={TABLE_HEADERS}
            tBodyCollection={productCollection}
            text="Edytuj wybrane produkty"
            icon={<IoFastFoodOutline size={25} />}
            fnHandleButtonClick={()=>console.log('test')}
            fnHandleRecordClick={(value)=>handleProductClick(value)}
            showButton={true}
            buttonText="Wyślij"
            buttonType="primary"
          />
        </div>
      </Layout>
    </div>
  )
}
