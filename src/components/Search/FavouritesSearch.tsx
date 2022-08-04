import React from 'react'
import Pagination from '../Pagination/Pagination';
import SwitchFilter from './Filters/SwitchFilter';

import styles from './FavouritesSearch.module.scss';


const data = [
    {
        name: "Товары",
        count: 120
    },
    {
        name: "Товарные пары",
        count: 120
    },
    {
        name: "Бренды",
        count: 120
    },
    {
        name: "Продавцы",
        count: 120
    },
    {
        name: "Категории",
        count: 120
    },
];

const FavouritesSearch = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <div className={styles.left}>
                <h2>Избранные</h2>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.96323 0.135468C9.91504 0.05156 9.82682 0 9.73142 0H0.268571C0.173171 0 0.0849424 0.05156 0.0367589 0.135468C-0.0113978 0.219349 -0.0123109 0.323017 0.0344491 0.407746L4.22784 8.01044V11.7263C4.22784 11.8263 4.28139 11.9184 4.36747 11.9664C4.40773 11.9888 4.4521 12 4.49639 12C4.54683 12 4.59716 11.9855 4.64118 11.9568L5.64833 11.3001C5.72547 11.2498 5.77212 11.1629 5.77212 11.0695V8.01044L9.96556 0.407746C10.0123 0.323017 10.0114 0.219377 9.96323 0.135468ZM4.765 11.2263V8.21247H5.23499V10.9198L4.765 11.2263ZM5.34642 7.66512H4.65356L0.727604 0.547347H9.27236L5.34642 7.66512Z" fill="#227AFF"/>
                </svg>
            </div>
            <div className={styles.right}>
                <button className={styles.buttonFill}>Создать</button>
                <SwitchFilter name='25' childrenItems={['50', '100', '250']}/>
            </div>
        </div>
        <div className={styles.pagination}>
            <Pagination/>
        </div>
        <div className={styles.contentWrapper}>
            {data.map((item) => {
                return <div className={styles.item}>
                    <div className={styles.left}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.count}>{item.count}</div>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.buttonFill}>Обновить</button>
                        <button className={styles.buttonOutline}>Изменить</button>
                    </div>
                </div>
            })}
        </div>
        <div className={styles.pagination}>
            <Pagination/>
        </div>
    </div>
  )
}

export default FavouritesSearch