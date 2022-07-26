import React from 'react'

import styles from './InfoNotifications.module.scss';

const data = [
    {
        name: 'Уведомления системы',
        count: 5
    },
    {
        name: 'Уведомления разработчика',
        count: 5
    },
];

const InfoNotifications = () => {
  return (
    <div className={styles.wrapper}>
        {data.map((item) => {
            return <div className={styles.item}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.count}>{item.count}</div>
            </div>
        })}
    </div>
  )
}

export default InfoNotifications;