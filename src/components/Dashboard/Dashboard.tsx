import React from 'react'

import DashboardItem from './DashboardItem';

import styles from './Dashboard.module.scss'

const arr = [true, true, true, false, true, false, true, true, true, true, false, false, false, false, false, false];

const Dashboard: React.FC = () => {
	return ( 
		<div className={styles.wrapper}>
			{arr.map(item => {
				return <DashboardItem colored={item}/>
			})}
		</div>
	)
}

export default Dashboard;