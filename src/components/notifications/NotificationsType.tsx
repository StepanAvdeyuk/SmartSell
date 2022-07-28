import React from 'react'
import styles from './Notifications.module.scss';

const NotificationsType = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    function toggleIsOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={isOpen ? styles.type + ' ' + styles.active : styles.type} onClick={toggleIsOpen}>
            Тип уведомлений
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.25L4 4.75L7.5 1.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? styles.typeChange +  ' ' + styles.active : styles.typeChange}>
                <span>Уведомления системы</span>
                <span>Уведомления разработчика</span>
            </div>
        </div>
    )
}

export default NotificationsType;