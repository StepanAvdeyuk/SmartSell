import React from 'react'

import styles from './AccountPopup.module.scss';

import usFlag from '../../assets/img/us-flag.png';
import canadaFlag from '../../assets/img/canada-flag.png';
import germanyFlag from '../../assets/img/germany-flag.png';
import spainFlag from '../../assets/img/spain-flag.png';

type AccountData = {
	name: string
	imageUrl: string
	messages: number
}

const data: AccountData[] = [
	{
		name: 'USA',
		imageUrl: usFlag,
		messages: 1
	},
	{
		name: 'Canada',
		imageUrl: canadaFlag,
		messages: 2
	},
	{
		name: 'Germany',
		imageUrl: germanyFlag,
		messages: 1
	},
	{
		name: 'Spain',
		imageUrl: spainFlag,
		messages: 1
	}
]

const AccountPopup = () => {

	const [changeAccount, setChangeAccount] = React.useState(false);

	function toggleChangeAccount() {
		setChangeAccount(!changeAccount);
	}

	return (
	<div className={styles.wrapper}>
		<div className={styles.account} onClick={toggleChangeAccount}>
			<p>Аккаунт #1</p>
			<svg className={changeAccount ? styles.transform + ' ' + styles.active : styles.transform} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    			<path d="M18.75 9.375L12.5 15.625L6.25 9.375" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			{changeAccount && <div className={styles.change}>
				<div>Аккаунт #1</div>
				<div>Аккаунт #2</div>
				<div>Аккаунт #3</div>
			</div>}
		</div>
		<div className={styles.countries}>
			<div className={styles.title}>Страна</div>
			<div className={styles.title}>Сообщения</div>
			{data.map((item, i) => {
				return <>
					<div className={styles.flag}>
						<img src={item.imageUrl} alt="flag"/>
						{item.name}
					</div>
					<div className={styles.messages}>{item.messages}</div>
				</>
			})}
		</div>
		<div className={styles.line}></div>
	</div>
	)
}

export default AccountPopup;