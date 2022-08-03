import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import useHover from '../../hooks/useHover';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

export type MenuData = {
	name: string,
	list: string[],
	link: string,
	listLink?: string[]
}

const menu: MenuData[] = [
	{
		name: 'Главная',
	 	list: [],
		link: '/'
	}, 
	{
		name: 'Поисковик',
		list: ['Поиск по товарам', 'Поиск брендов', 'Поиск по продавцам', 'Поиск по категориям', 'Поиск по избранному', 'История поиска'],
		link: '/search',
		listLink: ['/search/goods', '/search/brands', '/search/sellers', '/search/category', '/search', '/search']
	}, 
	{
		name: 'Инвентарь',
		list: [],
		link: '/'
	}, 
	{
		name: 'Заказы',
		list: [''],
		link: '/'
	},
	{
		name: 'Отчеты',
		list: [''],
		link: '/'
	}, 
	{
		name: 'Сообщения',
		list: [],
		link: '/notifications'
	},
	{
		name: 'Все настройки',
		list: ['Основные', 'Подключенные аккаунты', 'Мои платежи', 'Управление доступами', 'Партнерская программа', 'Справка'],
		link: '/'
	}, 
	{
		name: 'Выход',
		list: [],
		link: '/'
	}
];

const Sidebar: React.FC = () => {

	const [activePage, setActivePage] = React.useState(0);
	const sidebarRef = useRef(null);
	const isHover = useHover(sidebarRef);

	const wrapperClass = isHover ? styles.wrapper + ' ' + styles.active : styles.wrapper;

	return ( 
		<div className={wrapperClass} ref={sidebarRef}>
			<Link to='/' className={styles.logo}>
				Smart<br/>Sell
			</Link>
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