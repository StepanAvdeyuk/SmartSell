import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import useHover from '../../hooks/useHover';
import { getIcon } from './getIcon';

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
		listLink: ['/search/goods', '/search/brands', '/search/sellers', '/search/category', '/search/favourites', '/search/history'],
		link: '/search'
	}, 
	{
		name: 'Инвентарь',
		list: [],
		link: '/products_list'
	}, 
	{
		name: 'Заказы',
		list: [''],
		link: '/goods_list'
	},
	{
		name: 'Отчеты',
		list: [''],
		link: '/pair_settings'
	}, 
	{
		name: 'Сообщения',
		list: [],
		link: '/notifications'
	},
	{
		name: 'Все настройки',
		list: ['Основные', 'Подключенные аккаунты', 'Мои платежи', 'Управление доступами', 'Партнерская программа', 'Справка'],
		link: '/inventory_changes'
	}, 
	{
		name: 'Выход',
		list: [],
		link: '/tags'
	}
];

const Sidebar: React.FC = () => {

	const [activePage, setActivePage] = React.useState(0);

	const [isHover, setIsHover] = React.useState(false);
	

	function setPage(i: number) {
		setActivePage(i);
	}

	const off = () => {
		setIsHover(false)
	}

	return ( 
		<div className={isHover ? styles.wrapper + " " + styles.active : styles.wrapper} onMouseLeave={off}>
			<Link to='/' className={styles.logo}>
				Smart<br/>Sell
			</Link>
			<div className={styles.sidebarItemWrapper}>
				{menu.map((item, i) => {
					return <SidebarItem 
								onClick={setPage} 
								item={item} i={i} key={i} 
								activePage={activePage}
								isHover={isHover}
								setIsHover={setIsHover}
								/>
				})}
			</div>
		</div>
	)
}

export default Sidebar;