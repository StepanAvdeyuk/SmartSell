import React from 'react'

import styles from './Dashboard.module.scss'

const diff = true;

type TypeD = {
	colored: boolean
}

const DashboardItem: React.FC<TypeD> = ({colored}) => {
	return (
		<div className={colored ? styles.item + ' ' + styles.colored : styles.item}>
			<div className={styles.name}>Активных товаров</div>
			<span className={styles.count}>
				12 540
				<div className={diff ? styles.diff + ' ' + styles.plus : styles.diff + ' ' + styles.minus}>+ 235</div>
			</span>
			<div className={styles.time}>За последние 30 дней</div>
		</div>
	)
}

export default DashboardItem;