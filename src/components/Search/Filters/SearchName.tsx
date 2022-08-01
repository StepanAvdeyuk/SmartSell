import React from 'react'

import styles from '../GoodsSearch.module.scss'

const SearchName: React.FC = () => {
    return (
        <input className={styles.searchName} type="text" placeholder='Name your search'/>
    )
}

export default SearchName