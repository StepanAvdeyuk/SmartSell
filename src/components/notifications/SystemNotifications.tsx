import React from 'react'

import styles from './SystemNotifications.module.scss'

const data = [
	{
		time: '02 декабря 2020, 02:39',
		id: '#111-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#112-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#111-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#112-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
	
	{
		time: '02 декабря 2020, 02:39',
		id: '#112-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
	{
		time: '02 декабря 2020, 02:39',
		id: '#113-0056743-0973009'
	},
]

const SystemNotifications = () => {
	return (
	<div className={styles.wrapper}>
		<div className={styles.title}>
			<div className={styles.name}>
				Уведомления системы
			</div>
			<a href="#">Смотреть все уведомления</a>
		</div>
		<div className={styles.notifications}>
			{data.map((item, i) => {
				return <div className={styles.item}>
							<div className={styles.time}>
								<span>{i + 1}.</span>
								{item.time}
							</div>
							<p>
							Возникла проблема с заказом {item.id} - Осталось меньше 
							суток для отправки
							</p>
						</div>
			})}	
		</div>
	</div>
	)
}

export default SystemNotifications