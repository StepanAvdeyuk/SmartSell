import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import useHover from '../../hooks/useHover';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

export type MenuData = {
	name: string,
	list: string[],
	link?: string,
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
		listLink: ['/search/goods', '/search/brands', '/search/sellers', '/search/category', '/search/favourites', '/search/history']
	}, 
	{
		name: 'Инвентарь',
		list: [],
		link: '/'
	}, 
	{
		name: 'Заказы',
		list: [''],
		link: '/goods_list'
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
	const wrapRef = React.useRef(null);
	const isHover = useHover(wrapRef);

	function setPage(i: number) {
		setActivePage(i);
	}

	return ( 
		<div className={styles.wrapper} ref={wrapRef}>
			<Link to='/' className={styles.logo}>
				Smart<br/>Sell
			</Link>
			<div className={styles.sidebarItemWrapper}>
				{menu.map((item, i) => {
					const sidabarClass = activePage === i ? styles.item + ' ' + styles.active : styles.item;
					return <SidebarItem 
								onClick={setPage}  
								className={sidabarClass} 
								item={item} i={i} key={i} 
								activePage={activePage}
								isHover={isHover}
								/>
				})}
			</div>
		</div>
	)
}

export default Sidebar;