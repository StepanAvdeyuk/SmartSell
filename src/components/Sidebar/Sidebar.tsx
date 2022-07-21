import React from 'react'

import styles from './Sidebar.module.scss';
import { getIcon } from './getIcon';

const arr = [0, 0, 0, 0, 0, 0, 0, 0];

const Sidebar = () => {

	const [activePage, setActivePage] = React.useState(0);

	return ( 
		<div className={styles.sidebarWrapper}>
				<div className={styles.logo}>Smart<br/>Sell</div>
				<div className={styles.sidebarItemWrapper}>
					{arr.map((item, i) => {
						return <div className={activePage === i ? "sidebar-item active" : "sidebar-item"} onClick={() => setActivePage(i)}>
								{getIcon(i + 1)}
							</div>
					})}
				</div>
		</div>
	)
}

export default Sidebar;