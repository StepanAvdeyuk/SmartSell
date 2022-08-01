import React from 'react'

import styles from './GoodsSearch.module.scss';

const SearchBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const searchRef = React.useRef(null);

    React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (searchRef.current && !_e.path.includes(searchRef.current)) {
				setIsOpen(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

    function togglePopup() {
        setIsOpen(!isOpen);
    } 

    return (
        <div className={styles.startSearch} ref={searchRef}>
        <button className={styles.start}>Начать поиск</button>
        {/* <button className={styles.start}>100% - Поиск завершён</button> */}
        {/* <div className={styles.await}>
            <div className={styles.progress}>10%</div>   
            {false ?  <><p>Остановить</p>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9914 4.91249C12.3479 4.91249 13.4476 3.81279 13.4476 2.45624C13.4476 1.0997 12.3479 0 10.9914 0C9.63485 0 8.53516 1.0997 8.53516 2.45624C8.53516 3.81279 9.63485 4.91249 10.9914 4.91249Z" fill="#227AFF"/>
                <path d="M10.9931 21C11.807 21 12.4667 20.3403 12.4667 19.5264C12.4667 18.7126 11.807 18.0529 10.9931 18.0529C10.1793 18.0529 9.51953 18.7126 9.51953 19.5264C9.51953 20.3403 10.1793 21 10.9931 21Z" fill="#227AFF"/>
                <path d="M4.95687 7.16631C6.17785 7.16631 7.16765 6.17651 7.16765 4.95553C7.16765 3.73455 6.17785 2.74475 4.95687 2.74475C3.73589 2.74475 2.74609 3.73455 2.74609 4.95553C2.74609 6.17651 3.73589 7.16631 4.95687 7.16631Z" fill="#227AFF"/>
                <path d="M17.0269 18.2536C17.7052 18.2536 18.2551 17.7038 18.2551 17.0255C18.2551 16.3472 17.7052 15.7974 17.0269 15.7974C16.3487 15.7974 15.7988 16.3472 15.7988 17.0255C15.7988 17.7038 16.3487 18.2536 17.0269 18.2536Z" fill="#227AFF"/>
                <path d="M2.4567 12.9563C3.54168 12.9563 4.42122 12.0767 4.42122 10.9917C4.42122 9.90677 3.54168 9.02722 2.4567 9.02722C1.37173 9.02722 0.492188 9.90677 0.492188 10.9917C0.492188 12.0767 1.37173 12.9563 2.4567 12.9563Z" fill="#227AFF"/>
                <path d="M19.5268 11.9728C20.069 11.9728 20.5086 11.5332 20.5086 10.9909C20.5086 10.4486 20.069 10.009 19.5268 10.009C18.9845 10.009 18.5449 10.4486 18.5449 10.9909C18.5449 11.5332 18.9845 11.9728 19.5268 11.9728Z" fill="#227AFF"/>
                <path d="M3.74216 15.8118C3.07032 16.4836 3.07032 17.5707 3.74216 18.2425C4.41321 18.9144 5.50186 18.9144 6.1729 18.2425C6.84474 17.5707 6.84474 16.4836 6.1729 15.8118C5.50186 15.1392 4.414 15.1328 3.74216 15.8118Z" fill="#227AFF"/>
                <path d="M17.0274 5.69191C17.4341 5.69191 17.7638 5.36221 17.7638 4.95551C17.7638 4.54881 17.4341 4.21912 17.0274 4.21912C16.6207 4.21912 16.291 4.54881 16.291 4.95551C16.291 5.36221 16.6207 5.69191 17.0274 5.69191Z" fill="#227AFF"/>
            </svg></> : <>Поиск остановлен<button className={styles.restart} onClick={togglePopup}>Перезапуск</button></>}
            {isOpen && <div className={styles.restartSet}>
                <p>Перезапустить</p>
                <div className={styles.buttons}>
                    <button onClick={togglePopup}>С прежними данными</button>
                    <button onClick={togglePopup}>Применть новые данные</button>
                </div>
            </div>}
        </div> */}
    </div>
    )
}

export default SearchBar;