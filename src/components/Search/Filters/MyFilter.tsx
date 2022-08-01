import React from 'react'

import styles from '../GoodsSearch.module.scss'

type MyfilterItemProps = {
    isOpen: boolean,
    id: number,
    activeID: number | null,
    setActiveID: React.Dispatch<React.SetStateAction<number | null>>,
}

const MyfilterItem: React.FC<MyfilterItemProps> = ({isOpen, id, activeID, setActiveID})  => {

    const [changeFilterPopup, setChangeFilterPopup] = React.useState(false);
    const [confirmDeletePopup, setConfirmDeletePopup] = React.useState(false);

    React.useEffect(() => {
        if (!isOpen || activeID !== id) {
            setChangeFilterPopup(false);
        }
    }, [isOpen, activeID])

    const toggleChangeFilterPopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        setChangeFilterPopup(!changeFilterPopup);
        setActiveID(id);
    }

    const toggleConfirmDeletePopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        setConfirmDeletePopup(!confirmDeletePopup);
    }

    return (
        <p onClick={toggleChangeFilterPopup}>Фильтр<svg className={styles.filterItemSvg} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={changeFilterPopup ? styles.filterItemChange + ' ' + styles.active : styles.filterItemChange}>
                <button className={styles.change}>Изменить фильтр</button>
                <button className={styles.delete} onClick={toggleConfirmDeletePopup}>
                    Удалить фильтр
                    {confirmDeletePopup && <div className={styles.confirm}>
                        <button onClick={toggleConfirmDeletePopup} className={styles.yes}>Да</button>
                        <button onClick={toggleConfirmDeletePopup} className={styles.no}>Нет</button>
                    </div>}
                </button>
            </div>
        </p>
    )
}

const MyFilter: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [newPopup, setNewPopup] = React.useState(false);
    const inputRef = React.useRef(null);

    const [popupChangeID, setPopupChangeID] = React.useState<number | null>(null);

    const arr = [0, 0];

    function toggleIsOpen() {
        if (!newPopup) {
            setIsOpen(!isOpen);
        }
    }

    function toggleNewPopup() {
        setIsOpen(!isOpen);
        setNewPopup(!newPopup);
    }

    React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (inputRef.current && !_e.path.includes(inputRef.current)) {
				setIsOpen(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

    let popupClass = styles.filterPopup + ' ' + styles.thin + ' ' + styles.justifySB; 

    return (
    <>
    <div ref={inputRef} onClick={toggleIsOpen} className={isOpen ? styles.switchFilter + ' ' + styles.active : styles.switchFilter}> 
        <p>Мои фильтры</p>
            <svg className={styles.filterSvg}  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? popupClass + ' ' + styles.active : popupClass}>
                {arr.map((item, i) => {
                    return <MyfilterItem isOpen={isOpen} id={i} activeID={popupChangeID} setActiveID={setPopupChangeID}/>
                })}
                <button className={styles.myFilterBtn} onClick={toggleNewPopup}>Создать новый фильтр</button>
            </div>
            {newPopup &&  <div className={styles.newFilter}>
                <p>Новый фильтр</p>
                <label>Имя<input type="text"/></label>
                <div>
                    <button className={styles.saveFilter} onClick={toggleNewPopup}>Сохранить</button>
                    <button className={styles.noSaveFilter} onClick={toggleNewPopup}>Отмена</button>
                </div>
            </div>}
    </div>
    </>
    )
}


export default MyFilter;