import React from 'react'

import styles from './GoodsList.module.scss'
import ColumnsSet from './ColumnsSet';
import FiltersSet from './FiltersSet';
import GoodsListContent from './GoodsListContent';
import AddNewCollection from './AddNewCollection';
import ExportInventory from './ExportInventory';

export type sortTypesType = {
	name: string;
}

const ActionsList = () => {

	const [addNCPopup, setAddNCPopup] = React.useState(false);
	const [exportPopup, setExportPopup] = React.useState(false);

	return (
		<>
		<div className={styles.actionsList} onClick={e => e.stopPropagation()}>
			<span>Продавцы</span>
			<span>Анализ брендов</span>
			<span>Amazon's Marketplaces</span>
			<span>Other Marketplaces</span>
			<span>Selling Applications</span>
			<span>Искать поставщиков</span>
			<span>Удалить</span>
			<span onClick={() => setExportPopup(true)}>Экспорт</span>
			<span>Добавить в
				<ul className={styles.addIn}>
					<li onClick={() => setAddNCPopup(true)}>
						<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3407 3.70946H16.829V1.40051C16.829 1.0364 16.5338 0.741211 16.1697 0.741211H12.36H8.55065H4.74149H0.659298C0.29519 0.741211 0 1.0364 0 1.40051V17.5995C0 17.9637 0.29519 18.2588 0.659298 18.2588H18.3407C18.7048 18.2588 19 17.9637 19 17.5995V4.36876C19 4.00465 18.7048 3.70946 18.3407 3.70946ZM15.5103 3.70946H13.0192V2.05981H15.5103V3.70946ZM11.7007 3.70946H9.20995V2.05981H11.7007V3.70946ZM7.89136 3.70946H5.40079V2.05981H7.89136V3.70946ZM17.6814 16.9403H1.3186V2.05981H4.0822V4.36876C4.0822 4.73286 4.37739 5.02805 4.74149 5.02805H8.55065H12.36H16.1697H17.6814V16.9403Z" fill="#227AFF"/>
							<path d="M11.76 10.416V11.184H9.624V13.32H8.856V11.184H6.72V10.416H8.856V8.28H9.624V10.416H11.76Z" fill="#227AFF"/>
						</svg>
						Новая коллекция
					</li>
					<li>
						<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.3407 3.70946H16.829V1.40051C16.829 1.0364 16.5338 0.741211 16.1697 0.741211H12.36H8.55065H4.74149H0.659298C0.29519 0.741211 0 1.0364 0 1.40051V17.5995C0 17.9637 0.29519 18.2588 0.659298 18.2588H18.3407C18.7048 18.2588 19 17.9637 19 17.5995V4.36876C19 4.00465 18.7048 3.70946 18.3407 3.70946ZM15.5103 3.70946H13.0192V2.05981H15.5103V3.70946ZM11.7007 3.70946H9.20995V2.05981H11.7007V3.70946ZM7.89136 3.70946H5.40079V2.05981H7.89136V3.70946ZM17.6814 16.9403H1.3186V2.05981H4.0822V4.36876C4.0822 4.73286 4.37739 5.02805 4.74149 5.02805H8.55065H12.36H16.1697H17.6814V16.9403Z" fill="#227AFF"/>
						</svg>
						Избранные продукты
					</li>
					<li>В белые ASIN</li>
					<li>В чёрные ASIN</li>
					<li>В хорошие бренды</li>
					<li>В плохие бренды</li>
				</ul>
			</span>
		</div>
		<AddNewCollection isOpen={addNCPopup} setIsOpen={setAddNCPopup}/>
		<ExportInventory isOpen={exportPopup} setIsOpen={setExportPopup}/>
		</>
	)
}


const GoosList = () => {

	const [isOpenColumnsSet, setIsOpenColumnsSet] = React.useState(false);
	const [isOpenFiltersSet, setIsOpenFiltersSet] = React.useState(false);
	const columnsSetRef = React.useRef(null);
	const filtersSetRef = React.useRef(null);

	React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (columnsSetRef.current && !_e.path.includes(columnsSetRef.current)) {
				setIsOpenColumnsSet(false);
			}
			if (filtersSetRef.current && !_e.path.includes(filtersSetRef.current)) {
				setIsOpenFiltersSet(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

	return (
	<>
	<h2 className={styles.title}>Список товаров</h2>
	<div className={styles.top}>
		<div className={isOpenColumnsSet ? styles.switch + ' ' + styles.mr22 + ' ' + styles.active : styles.switch + ' ' + styles.mr22} ref={columnsSetRef} onClick={() => setIsOpenColumnsSet(!isOpenColumnsSet)}>
			Колонки
			<svg className={styles.arrowSvg} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<ColumnsSet isOpen={isOpenColumnsSet}/>
			<div className={styles.chooseColumns}>
				<span>Выбрать все</span>
				<span>Выбрать все на текущей странице</span>
			</div>
		</div>
		<div className={isOpenFiltersSet ? styles.switch + ' ' + styles.active : styles.switch} ref={filtersSetRef} onClick={() => setIsOpenFiltersSet(!isOpenFiltersSet)}>
			Фильтры
			<svg className={styles.arrowSvg} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<FiltersSet isOpen={isOpenFiltersSet}/>
			<ActionsList/>
		</div>
	</div>
	<div className={styles.content} style={{gridTemplateColumns: `auto auto auto 1fr`}}>  
		{/*Здесь auto, столько раз, сколько столбцов  (сумма фикс и не фикс) */}
		<GoodsListContent/>
	</div>
	<div className={styles.line}></div>
	</>
	)
}

export default GoosList