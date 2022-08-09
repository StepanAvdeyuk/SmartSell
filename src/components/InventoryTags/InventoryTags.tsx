import React from 'react'
import Pagination from '../Pagination/Pagination';
import SwitchFilter from '../Search/Filters/SwitchFilter';

import styles from './InventoryTags.module.scss'

const data = [
    {
        count1: 0,
        count2: 0,
        tag: 1,
        check: ['для активных товарных пар', 'для активных товарных пар']
    },
    {
        count1: 0,
        count2: 0,
        tag: 3,
        check: ['для активных товарных пар']
    },
    {
        count1: 0,
        count2: 0,
        tag: 3,
        check: ['для активных товарных пар', 'для активных товарных пар']
    },
]

const InventoryTags = () => {
    return (
        <>
        <div className={styles.top}>
            <h2>Теги инвентаря</h2>
            <div className={styles.right}>
                <button className={styles.blue}>Создать</button>
                <SwitchFilter name={'25'} childrenItems={['50', '100', '250']}/>
            </div>
        </div>
        <p className={styles.descr}>Теги позволяют вам помечать связки метками для их более удобной организации и последующего поиска. Вы можете добвлять сразу несколько тегов к одной товарной паре</p>
        <div className={styles.pagination}>
            <Pagination/>
        </div>
        <div className={styles.content}>
            {data.map(item => {
                return <div className={styles.item}>
                <div className={styles.left}>
                    <div className={styles.activePairs}>
                        <p>Активных товарных пар</p>
                        <span>{item.count1}</span>
                    </div>
                    <div className={styles.activePairs}>
                        <p>Активных товарных пар</p>
                        <span>{item.count2}</span>
                    </div>
                    <div className={styles.count}>
                        <span>{item.tag}</span>
                        <div className={styles.countInfo}>
                            {item.check.map(item => {
                                return <div className={styles.countInfoItem}>
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L4.125 8L1 4.81818" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>{item}</span>
                                 </div>
                            })}                        
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <button className={styles.blue}>Создать</button>
                    <button className={styles.rose}>Удалить</button>
                </div>
            </div>
            })}
        </div>
        <div className={styles.pagination}>
            <Pagination/>
        </div>
        </>
    )
}

export default InventoryTags;