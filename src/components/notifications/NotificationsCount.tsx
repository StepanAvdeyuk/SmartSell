import React from 'react'
import styles from './Notifications.module.scss';

const NotificationsCount = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleIsOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={isOpen ? styles.count + ' ' + styles.active : styles.count} onClick={toggleIsOpen}>
            25
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? styles.countChange +  ' ' + styles.active : styles.countChange}>
                <span>50</span>
                <span>100</span>
                <span>250</span>
            </div>
        </div>
    )
}

export default NotificationsCount;