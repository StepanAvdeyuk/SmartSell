import NotificationsType from './NotificationsType';
import NotificationsCount from './NotificationsCount';
import DeveloperNotificationsContent from './DeveloperNotificationsContent';


import styles from './Notifications.module.scss';

import searchSvg from '../../assets/svg/search.svg'
import StystemNotificationsContent from './SystemNotificationsContent';


const Notifications = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.top}>
            <div className={styles.inputWrapper}>
                <input className={styles.search} type="text" placeholder='Поиск'/>
                <img src={searchSvg} alt="search" className={styles.searchIcon}/>
                <div className={styles.helper}>?</div>
            </div>
            <div className={styles.settings}>
                <NotificationsType/>
                <NotificationsCount/>
            </div>
        </div>
        <div className={styles.content}>
            <StystemNotificationsContent/>
            {/* <DeveloperNotificationsContent/> */}
        </div>
    </div>
  )
}

export default Notifications;