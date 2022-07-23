import React, { useRef } from 'react'
import useHover from '../../hooks/useHover';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

export type MenuData = {
	name: string,
	list: string[]
}

const menu: MenuData[] = [
	{
		name: 'Главная',
	 	list: []
	}, 
	{
		name: 'Поисковик',
		list: ['Поиск по товарам', 'Поиск брендов', 'Поиск по продавцу', 'Поиск по категориям', 'Поиск по избранному', 'История поиска']
	}, 
	{
		name: 'Инвентарь',
		list: []
	}, 
	{
		name: 'Заказы',
		list: ['']
	},
	{
		name: 'Отчеты',
		list: ['']
	}, 
	{
		name: 'Сообщения',
		list: []
	},
	{
		name: 'Все настройки',
		list: ['Основные', 'Подключенные аккаунты', 'Мои платежи', 'Управление доступами', 'Партнерская программа', 'Справка']
	}, 
	{
		name: 'Выход',
		list: []
	}
];

const Sidebar: React.FC = () => {

	const [activePage, setActivePage] = React.useState(0);
	const sidebarRef = useRef(null);
	const isHover = useHover(sidebarRef);

	const wrapperClass = isHover ? styles.wrapper + ' ' + styles.active : styles.wrapper;

	return ( 
		<div className={wrapperClass} ref={sidebarRef}>
			<div className={styles.logo}>
				Smart<br/>Sell
			</div>
			<div className={styles.sidebarItemWrapper}>
				{menu.map((item, i) => {
					const sidabarClass = activePage === i ? styles.item + ' ' + styles.active : styles.item;
					return <SidebarItem  
								className={sidabarClass} 
								onClick={() => setActivePage(i)} 
								item={item} i={i} key={i} 
								activePage={activePage} 
								isHover={isHover}/>
				})}
			</div>
		</div>
	)
}

export default Sidebar;