import React from 'react'

import SystemNotificationsList from './SystemNotificationsList';

import styles from './Notifications.module.scss';

const SystemNotificationsItem = ({item}: any) => {

    const [showMore, setShowMore] = React.useState(false);

    function toggleShowMore() {
        setShowMore(!showMore);
    }

    return (
    <div className={styles.problem}>
                    <div className={styles.problemDate}>{item.date}</div>
                    <div className={styles.problemText}>
                        <p>Возникла проблема с заказом #113-0056743-0973009 Осталось меньше суток для отправки <a href="#">{item.message}</a></p>
                        <div className={showMore ? styles.showMore + ' ' + styles.active : styles.showMore} onClick={toggleShowMore}>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 1.25L4 4.75L7.5 1.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p onClick={toggleShowMore}>Показать все уведомления<br/>для этого заказа</p>
                        </div>
                        {showMore && <div className={styles.ntfWrapper}>
                            <SystemNotificationsList/> 
                        </div>}
                    </div>
    </div>
    )
}

export default SystemNotificationsItem;