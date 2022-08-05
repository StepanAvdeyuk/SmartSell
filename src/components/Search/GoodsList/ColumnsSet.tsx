import React from 'react'
import CheckCheckbox from '../../Checkboxes/CheckCheckbox'

import styles from './ColumnsSet.module.scss'

const data = [
	{
		name: 'ASIN'
	},
	{
		name: 'Название товара'
	},
	{
		name: 'Изображение товара'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
];

type ColumnsSetType = {
	isOpen: boolean
}

const ColumnsSet: React.FC<ColumnsSetType> = ({isOpen}) => {

	return (
		<div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={(e) => e.stopPropagation()}>
			<div className={styles.top}>
				<CheckCheckbox/>
				<div className={styles.search}>
					<input type="text" placeholder='Поиск'/>
					<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.00002 8.99999C7.20917 8.99999 9.00004 7.20913 9.00004 4.99999C9.00004 2.79086 7.20917 1 5.00002 1C2.79087 1 1 2.79086 1 4.99999C1 7.20913 2.79087 8.99999 5.00002 8.99999Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M9.99923 9.99999L7.82422 7.825" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div className={styles.content}>
					{data.map(item => {
						return <div className={styles.item}>
							<CheckCheckbox/>
							<span>{item.name}</span>
						</div>
					})}
				</div>
		</div>
	)
}

export default ColumnsSet