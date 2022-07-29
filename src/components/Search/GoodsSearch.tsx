import React, { ReactComponentElement } from 'react'

import usFlag from '../../assets/img/us-flag.png';
import canadaFlag from '../../assets/img/canada-flag.png';
import germanyFlag from '../../assets/img/germany-flag.png';
import spainFlag from '../../assets/img/spain-flag.png';

import styles from './GoodsSearch.module.scss'

type SwitchFilterProps = {
    name: string,
    childrenItems: string[],
    justifyStart? : boolean,
    img? : string[]
}

const SwitchFilter: React.FC<SwitchFilterProps> = ({name, childrenItems, justifyStart, img}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    let popupClass = styles.filterPopup;

    if (justifyStart) {
        popupClass = popupClass + ' ' + styles.justifyStart;
    }

    return (
    <div className={isOpen ? styles.switchFilter + ' ' + styles.active : styles.switchFilter} onClick={toggleIsOpen}> 
        <p>{name}</p>
            <svg className={styles.filterSvg}  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? popupClass + ' ' + styles.active : popupClass}>
                {childrenItems.map((item, i) => {
                     return <p>
                        {img && <img src={img[i]} alt='falg'></img>}
                        {item}
                        </p>
                })}
            </div>
    </div>
    )
}

type MyfilterItemProps = {
    isOpen: boolean
}

const MyfilterItem: React.FC<MyfilterItemProps> = ({isOpen})  => {

    const [changeFilterPopup, setChangeFilterPopup] = React.useState(false);
    const [confirmDeletePopup, setConfirmDeletePopup] = React.useState(false);

    React.useEffect(() => {
        if (!isOpen) {
            setChangeFilterPopup(false);
        }
    }, [isOpen])

    const toggleChangeFilterPopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        setChangeFilterPopup(!changeFilterPopup)
    }

    const toggleConfirmDeletePopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        setConfirmDeletePopup(!confirmDeletePopup)
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

    function toggleIsOpen() {
        if (!newPopup) {
            setIsOpen(!isOpen);
        }
    }

    function toggleNewPopup() {
        setIsOpen(!isOpen);
        setNewPopup(!newPopup);
    }

    let popupClass = styles.filterPopup + ' ' + styles.thin + ' ' + styles.justifySB; 

    return (
    <>
    <div onClick={toggleIsOpen} className={isOpen ? styles.switchFilter + ' ' + styles.active : styles.switchFilter}> 
        <p>Мои фильтры</p>
            <svg className={styles.filterSvg}  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? popupClass + ' ' + styles.active : popupClass}>
                <MyfilterItem isOpen={isOpen} />
                <MyfilterItem isOpen={isOpen} />
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

type configFiltersType = {
    component: string,
    payload?: SwitchFilterProps
}

const GoodsSearch = () => {

    const configFilters: configFiltersType[] = [
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Маркетплейсы',
                childrenItems: ['Amazon', 'Ebay']
            }
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Страна',
                childrenItems: ['USA', 'Canada', 'Germany', 'Spain'],
                img: [usFlag, canadaFlag, germanyFlag, spainFlag],
                justifyStart: true
            }
        },
        {
            component: 'MyFilter',
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Product ID Type',
                childrenItems: ['UPC', 'EAN', 'ASIN']
            },
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Исключить правообладателей',
                childrenItems: ['Не исключать правообладателей'],
            },
        }
    ]

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по товарам</h2>
        <div className={styles.filters}>
            {configFilters.map(item => {
                switch (item.component) {
                    case 'MyFilter':
                            return <MyFilter/>
                    case 'SwitchFilter': 
                        if (item.payload) {
                            return <SwitchFilter {...item.payload}/>
                        } else {
                            return null
                        }
                    default:
                        return null
                }
            })}
        </div>
    </div>
    )
}

export default GoodsSearch