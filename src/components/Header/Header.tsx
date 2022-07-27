import React from 'react'

import AccountPopup from './AccountPopup';

import searchIcon from '../../assets/svg/search.svg';
import bellIcon from '../../assets/svg/bell.svg';
import USFlag from '../../assets/img/us-flag.png';

import styles from './Header.module.scss';
import SystemNotifications from '../notifications/SystemNotifications';
import DeveloperNotifications from '../notifications/DeveloperNotifications';
import InfoNotifications from '../notifications/InfoNotifications';
import DashboardPopup from './DashboardPopup';

const Header: React.FC = () => {

	const [accountPopup, setAccountPopup] = React.useState(false);

	function toggleAccountPopup() {
		setAccountPopup(!accountPopup);
	} 

	const [dashboardPopup, setDashboardPopup] = React.useState(false);

	function toggleDashboardPopup() {
		setDashboardPopup(!dashboardPopup);
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

			<div className={styles.notificationWrapper}>
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
			{accountPopup ? <AccountPopup/> : null}
			{dashboardPopup ? <DashboardPopup/> : null}
			{false ? <SystemNotifications/> : null}
			{false ? <DeveloperNotifications/> : null}
			{false ? <InfoNotifications/> : null}
		</div>
	)      
}

export default Header; 