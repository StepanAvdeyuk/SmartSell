import React from 'react'

import searchIcon from '../../assets/svg/search.svg';
import bellIcon from '../../assets/svg/bell.svg';

import USFlag from '../../assets/img/us-flag.png';

import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<div className={styles.headerWrapper}>

			<div className={styles.searchWrapper}>
				<input className={styles.input} type="text" placeholder='Поиск'/>
				<img className={styles.searchIcon} src={searchIcon} alt="search-icon"/>
			</div>

			<div className={styles.dashboardWrapper}>
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
				<div className={styles.accountInfo}>
					<span>Аккаунт #1</span>
					<p>USD ($)</p>
				</div>
			</div>

			<div className={styles.avatarWrapper}>
				{/* <img src={avatar} alt="avatar"/> */}
			</div>
		</div>
	)      
}

export default Header; 