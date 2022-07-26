import React from 'react'

import styles from './DeveloperNotifications.module.scss'

const data = [
	{
		status:  'Улучшение',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
	},
	{
		status:  'Улучшение',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
	},
    {
		status:  'Улучшение',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
	},
    {
		status:  'Улучшение',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
	},
]

const SystemNotifications = () => {
	return (
	<div className={styles.wrapper}>
		<div className={styles.title}>
			<div className={styles.name}>
				Уведомления разработчика
			</div>
			<a href="#">Смотреть все уведомления</a>
		</div>
		<div className={styles.notifications}>
			{data.map((item, i) => {
				return <div className={styles.item}>
							<span>{item.status}</span>
							<p>{item.text}</p>
						</div>
			})}	
		</div>
	</div>
	)
}

export default SystemNotifications