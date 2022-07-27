import React from 'react'

import AddDashboard from '../Dashboard/AddDashboard'

import styles from './DashboardPopup.module.scss'


const DashboardPopup = () => {
	const [addDashboardPopup, setAddDashboardPopup] = React.useState(false);

	function toggleAddDashboardPopup() {
		setAddDashboardPopup(!addDashboardPopup);
	} 

	const data = [
		{
			name: 'Добавить дашборд',
			f: toggleAddDashboardPopup
		},
		{
			name: 'Переместить дашборд',
			f: () => alert('Переместить дашборд')
		},
		{
			name: 'Удалить дашборд',
			f: () => alert('Удалить дашборд')
		},
		{
			name: 'Добавить диаграму',
			f: () => alert('Добавить диаграму')
		},
		{
			name: 'Изменить диаграму',
			f: () => alert('Изменить диаграму')
		},
		{
			name: 'Переместить диаграму',
			f: () => alert('Переместить диаграму')
		},
		{
			name: 'Удалить диаграму',
			f: () => alert('Удалить диаграму')
		}
	]

	return (
		<div className={styles.wrapper}>
			{data.map(item => <div className={styles.item} onClick={item.f}>
				{item.name}
			</div>)}
			<AddDashboard isOpen={addDashboardPopup} toggleOpen={toggleAddDashboardPopup}/>
		</div>
	)
}

export default DashboardPopup;