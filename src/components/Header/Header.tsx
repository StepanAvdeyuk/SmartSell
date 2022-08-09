import React from 'react'

import AccountPopup from './AccountPopup';

import searchIcon from '../../assets/svg/search.svg';
import bellIcon from '../../assets/svg/bell.svg';
import USFlag from '../../assets/img/us-flag.png';

import styles from './Header.module.scss';
import SystemNotifications from '../Notifications/SystemNotifications';
import DeveloperNotifications from '../Notifications/DeveloperNotifications';
import InfoNotifications from '../Notifications/InfoNotifications';
import DashboardPopup from './DashboardPopup';
import { CSSTransition } from 'react-transition-group';

const Header: React.FC = () => {

	const [accountPopup, setAccountPopup] = React.useState(false);

	function toggleAccountPopup() {
		setAccountPopup(!accountPopup);
	} 

	const [dashboardPopup, setDashboardPopup] = React.useState(false);

	function toggleDashboardPopup() {
		setDashboardPopup(!dashboardPopup);
	} 

	const [infoNotificationsPopup, setInfoNotificationsPopup] = React.useState(false);

	function toggleInfoNotificationsPopup() {
		setInfoNotificationsPopup(!infoNotificationsPopup);
	}

	return (
		<div className={styles.wrapper}>

			<div className={styles.searchWrapper}>
				<input className={styles.input} type="text" placeholder='Поиск'/>
				<img className={styles.searchIcon} src={searchIcon} alt="search-icon"/>
			</div>

			<div className={styles.dashboardWrapper} onClick={toggleDashboardPopup}>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div className={styles.notificationWrapper} onClick={toggleInfoNotificationsPopup}>
				<img src={bellIcon} alt="bell"/>
			</div>

			<div className={styles.accountWrapper}>
				<div className={styles.languageWrapper}>
					<img src={USFlag} alt="us-flag"/>
					<span>EN</span>
				</div>	
				<div className={styles.accountInfo} onClick={toggleAccountPopup}>
					<span>Аккаунт #1</span>
					<p>USD ($)</p>
				</div>
			</div>

			<div className={styles.avatarWrapper}>
				{/* <img src={avatar} alt="avatar"/> */}
			</div>
			{dashboardPopup ? <DashboardPopup/> : null}
			{accountPopup ? <AccountPopup/> : null}
			{false ? <SystemNotifications/> : null}
			{false ? <DeveloperNotifications/> : null}
			{infoNotificationsPopup ? <InfoNotifications/> : null}
		</div>
	)      
}

export default Header; 