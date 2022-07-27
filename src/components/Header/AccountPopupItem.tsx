import React from 'react'

import usFlag from '../../assets/img/us-flag.png';
import canadaFlag from '../../assets/img/canada-flag.png';
import germanyFlag from '../../assets/img/germany-flag.png';
import spainFlag from '../../assets/img/spain-flag.png';

import styles from './AccountPopup.module.scss';

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

type AccountPopupItemProps = {
	name: string,
	changeAccount: number | null,
	setChangeAccount: React.Dispatch<React.SetStateAction<number | null>>,
	id: number
}

const activeCountry = 0;

const AccountPopupItem: React.FC<AccountPopupItemProps> = ({name, changeAccount, setChangeAccount, id}) => {

	function toggleChangeAccount() {
		if (changeAccount === id) {
			setChangeAccount(null)
		} else {
			setChangeAccount(id);
		}
	}


	return (
	<div className={styles.item}>
			<div className={styles.account} onClick={toggleChangeAccount}>
				<p>{name}</p>
				<svg className={changeAccount === id ? styles.transform + ' ' + styles.active : styles.transform} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.75 9.375L12.5 15.625L6.25 9.375" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
			{changeAccount === id && <div className={styles.countries}>
				<div className={styles.title}>Страна</div>
				<div className={styles.title}>Сообщения</div>
				{data.map((item, i) => {
					return <>
						<div className={activeCountry === i ? styles.flag + ' ' + styles.active : styles.flag}>
							<img src={item.imageUrl} alt="flag"/>
							{item.name}
						</div>
						<div className={activeCountry === i ? styles.messages + ' ' + styles.active : styles.messages}>{item.messages}</div>
					</>
				})}
			</div>}
	</div>
	)
}

export default AccountPopupItem;