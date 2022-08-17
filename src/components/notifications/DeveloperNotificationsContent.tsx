import styles from './Notifications.module.scss';

const DeveloperNotificationsContent = () => {
    return (
        <>
        <div className={styles.updateNum}>
            Обновление #35532
        </div>
        <div className={styles.updateWrap}>
            <div className={styles.updateItem}>
                <span>Улучшение</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div className={styles.updateItem}>
                <span>Улучшение</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div className={styles.updateItem}>
                <span>Улучшение</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
        </div>
        </>
    )
}

export default DeveloperNotificationsContent;