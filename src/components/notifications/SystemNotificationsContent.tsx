import NotificationsSortBy from './NotificationsSortBy';
import SystemNotificationsItem from './SystemNotificationsItem';

import styles from './Notifications.module.scss';


const data = [
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
    {
        date: '24.07.2022',
        message: 'Koethier 35301 17 inch Mdieval Knights Chess Set'
    },
]

const StystemNotificationsContent = () => {
    return (
    <>
    <div className={styles.sort}>
        <div className={styles.sortDate}>
            Дата
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.25L4 4.75L7.5 1.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <NotificationsSortBy/>
    </div>
    {data.map(item => <SystemNotificationsItem item={item}/>)}
    </>
    )
}

export default StystemNotificationsContent;