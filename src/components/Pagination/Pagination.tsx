import React from 'react'

import styles from './Pagination.module.scss';

const Pagination = () => {

	const [count, setCount] = React.useState(100);
	const [activePage, setActivePage] = React.useState(1); // будет получаться от родителя

	function incPage() {
		if (activePage < count) {
			setActivePage(activePage + 1);
		}
	}

	function decPage() {
		if (activePage > 1) {
			setActivePage(activePage - 1);
		}
	}

	type PageCardProps = {
		page: number
	}

	const PageCard: React.FC<PageCardProps> = ({page}) => {
		return <li className={(page) === activePage ? styles.active : ''} onClick={() => setActivePage(page)}>{page}</li>
	}

	return (
	<div className={styles.pagination}>
		<div className={styles.prev}>
			{(activePage > 1) && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.5 6L2.5 6" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M6 9.5L2.5 6L6 2.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>}
			<button onClick={decPage}>Предыдущая</button>
		</div>
		<ul>
			{Array(count).fill(0).map((item, i) => {
				const page = i + 1;
				if (page === 1 || page === count) { // Самый первый или последний
					return <PageCard key={i} page={page}/>
				}
				if ((page < 8 && activePage < 6) || (page > count - 7 && activePage > count - 5)) { // Первые и последние 7
					return <PageCard key={i} page={page}/>
				}
				if (page === activePage - 3 || (page === count - 7 && activePage > count - 5) || page === activePage + 3 || (activePage < 6 && page === 8)) { // Через 3 элемента до и после активного
					return <li key={i} onClick={() => setActivePage(page)}>...</li>
				}
				if (page > activePage - 3  && page < activePage + 3) { // Сколько до и после активного
					return <PageCard key={i} page={page}/>
				}
				
			})}
		</ul>
		<div className={styles.next}>
			<button onClick={incPage}>Следующая</button>
			{(activePage < count) && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.5 6H9.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M6 2.5L9.5 6L6 9.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>}
		</div>
	</div>
	)
}

export default Pagination