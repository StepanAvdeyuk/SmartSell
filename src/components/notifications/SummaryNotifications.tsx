import React from 'react'

import styles from './SummaryNotifications.module.scss'

const SummaryNotifications = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <div className={styles.name}>Уведомления</div>
            <a href="#">Смотреть все уведомления</a>
        </div>
        <div className={styles.info}>
            <span>02 декабря 2020, 02:39</span>
            <p>Возникла проблема с заказом #113-0056743-0973009 - Осталось меньше суток для отправки</p>
        </div>
    </div>
  )
}

export default SummaryNotifications;