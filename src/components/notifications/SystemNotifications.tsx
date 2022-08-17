import styles from './SystemNotifications.module.scss'
import SystemNotificationsList from './SystemNotificationsList'

const SystemNotifications = () => {
	return (
	<div className={styles.wrapper}>
		<SystemNotificationsList/>
	</div>
	)
}

export default SystemNotifications