import React from 'react'

import styles from './Landing.module.scss'
import { useNavigate } from 'react-router-dom'
export const Landing = () => {
   const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/auth')} className={styles.wrapper}>Załóż konto!</div>
  )
}
