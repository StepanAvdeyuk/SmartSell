import React from 'react'

import styles from './AccountPopup.module.scss';
import AccountPopupItem from './AccountPopupItem';

const data = [
	{
		name: 'Аккаунт #1'
	},
	{
		name: 'Аккаунт #2'
	},
	{
		name: 'Аккаунт #3'
	},
]

const AccountPopup = () => {

	const [changeAccount, setChangeAccount] = React.useState<number | null>(0);

	return (
	<div className={styles.wrapper}>
		{data.map((item, i) => {
			return <AccountPopupItem name={item.name} changeAccount={changeAccount} setChangeAccount={setChangeAccount} id={i}/>
		})}
	</div>
	)
}

export default AccountPopup;