import React from 'react'
import loading from '../../assets/loading.svg'
import styles from './Loading.module.scss'

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <img src={loading}/>
    </div>
  )
}
