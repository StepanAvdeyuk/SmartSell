import React from 'react'

import styles from './SearchName.module.scss'

type SearchNameProps = {
    big?: boolean
}

const SearchName: React.FC<SearchNameProps> = ({big}) => {
    return (
        <input className={big ? styles.searchName + ' ' + styles.big : styles.searchName} type="text" placeholder='Name your search'/>
    )
}

export default SearchName