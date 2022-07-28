import React from 'react'

import styles from './GoodsSearch.module.scss'

const GoodsSearch = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по товарам</h2>
        <div className={styles.filters}></div>
    </div>
  )
}

export default GoodsSearch