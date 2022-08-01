import React from 'react'

import styles from '../GoodsSearch.module.scss'

const SearchByName: React.FC = () => {
    return (
        <div className={styles.searchByName}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33336 11.6667C9.2789 11.6667 11.6667 9.27884 11.6667 6.33333C11.6667 3.38781 9.2789 1 6.33336 1C3.38783 1 1 3.38781 1 6.33333C1 9.27884 3.38783 11.6667 6.33336 11.6667Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9996 13.0001L10.0996 10.1001" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder='Поиск по названию'/>
        </div>
    )
}

export default SearchByName;