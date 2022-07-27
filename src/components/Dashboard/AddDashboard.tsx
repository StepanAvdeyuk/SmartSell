import React from 'react'

import DashboardItem from './DashboardItem';

import styles from './AddDashboard.module.scss'

const arr = [true, true, true, false, true, false, true, true, true, true, false, false];

type AddDashboardProps = {
	isOpen: boolean,
	toggleOpen: Function 
}

const AddDashboard: React.FC<AddDashboardProps> = ({isOpen, toggleOpen}) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Выберите дэшборд для добавления</div>
			<div className={styles.scroll}>
				<div className={styles.itemsWrapper}>
					{arr.map(item => {
						return <DashboardItem colored={item}/>
					})}
				</div>
			</div>
			<div className={styles.close} onClick={() => toggleOpen()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
					<g clip-path="url(#clip0_153_2063)">
					<path d="M6.74626 5.74996L11.2605 1.23593C11.3577 1.13865 11.3577 0.981017 11.2605 0.883732L10.6167 0.23956C10.57 0.192976 10.5065 0.166626 10.4405 0.166626C10.3744 0.166626 10.311 0.192976 10.2643 0.23956L5.75012 4.7537L1.23598 0.23956C1.14246 0.14604 0.976942 0.146157 0.883657 0.23956L0.239956 0.883732C0.142671 0.981017 0.142671 1.13865 0.239956 1.23593L4.7541 5.74996L0.239956 10.264C0.142671 10.3613 0.142671 10.5189 0.239956 10.6162L0.883775 11.2604C0.930476 11.3069 0.993881 11.3333 1.05999 11.3333C1.1261 11.3333 1.18939 11.3069 1.23609 11.2604L5.75024 6.74621L10.2644 11.2604C10.3111 11.3069 10.3746 11.3333 10.4406 11.3333C10.5066 11.3333 10.5701 11.3069 10.6168 11.2604L11.2606 10.6162C11.3578 10.5189 11.3578 10.3613 11.2606 10.264L6.74626 5.74996Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_153_2063">
					<rect width="11.1667" height="11.1667" fill="white" transform="translate(0.166748 0.166626)"/>
					</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	)
}

export default AddDashboard;