import React from 'react'
import { sortTypesType } from './GoosList';

import styles from './GoodsList.module.scss';

import СolumnSettings from './СolumnSettings';

type SortTypeProps = {
	item: sortTypesType;
}

const SortType: React.FC<SortTypeProps> = ({item}) => {

	const [isOpenColumnSettings, setIsOpenColumnSettings] = React.useState(false);
	const columnSettingsRef = React.useRef(null);

	React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (columnSettingsRef.current && !_e.path.includes(columnSettingsRef.current)) {
				setIsOpenColumnSettings(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

	return (
		<div className={styles.sortType} ref={columnSettingsRef}>
				<p>{item.name}</p>
				<svg className={styles.arrowSvg} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L5.5 5.5L10 1" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<svg className={styles.burgerSvg} onClick={() => setIsOpenColumnSettings(!isOpenColumnSettings)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.37499 2.625H11.625C11.832 2.625 12 2.45698 12 2.25001C12 2.043 11.832 1.87502 11.625 1.87502H0.37499C0.168013 1.87502 0 2.043 0 2.25001C0 2.45701 0.168013 2.625 0.37499 2.625Z" fill="#227AFF"/>
					<path d="M11.625 5.62502H0.37499C0.167982 5.62502 0 5.79303 0 6.00001C0 6.20698 0.168013 6.375 0.37499 6.375H11.625C11.832 6.375 12 6.20698 12 6.00001C12 5.79303 11.832 5.62502 11.625 5.62502Z" fill="#227AFF"/>
					<path d="M11.625 9.375H0.37499C0.167982 9.375 0 9.54301 0 9.74999C0 9.957 0.168013 10.125 0.37499 10.125H11.625C11.832 10.125 12 9.95697 12 9.74999C12 9.54298 11.832 9.375 11.625 9.375Z" fill="#227AFF"/>
				</svg>
				<СolumnSettings isOpen={isOpenColumnSettings}/>
		</div>
	)
}

export default SortType;