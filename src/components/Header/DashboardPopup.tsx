import React from 'react'

import AddDashboard from '../Dashboard/AddDashboard'

import styles from './DashboardPopup.module.scss'


const DashboardPopup = () => {
	const [addDashboardPopup, setAddDashboardPopup] = React.useState(false);
	const dashboarhRef = React.useRef(null);

	function toggleAddDashboardPopup() {
		setAddDashboardPopup(!addDashboardPopup);
	} 

	React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (dashboarhRef.current && !_e.path.includes(dashboarhRef.current)) {
				setAddDashboardPopup(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

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
		<div className={styles.wrapper} ref={dashboarhRef}>
			{data.map(item => <div className={styles.item} onClick={item.f}>
				{item.name}
			</div>)}
			<AddDashboard isOpen={addDashboardPopup} toggleOpen={toggleAddDashboardPopup}/>
		</div>
	)
}

export default DashboardPopup;