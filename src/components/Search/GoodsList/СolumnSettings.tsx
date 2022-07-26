import React from 'react'
import CheckCheckbox from '../../Checkboxes/CheckCheckbox';

import styles from './ColumnSettings.module.scss';

type СolumnSettingsType = {
	isOpen: boolean
} 

const СolumnSettings: React.FC<СolumnSettingsType> = ({isOpen}) => {

    const [currentWindow, setCurrentWindow] = React.useState(1);


    const ColumnSettingsMid = () => {
        return <>
        <div className={styles.fixColumn}>
            <span>Закрепить колонку</span>
            <svg className={styles.svg} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg className={styles.pinSvg} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.47036 1.66395C9.01011 1.15821 9.84299 1.16039 10.3798 1.65132L10.4581 1.72862L13.4362 4.90709C13.5112 4.98714 13.5765 5.07567 13.631 5.17091C13.9995 5.81591 13.8012 6.62987 13.1932 7.03669L13.1077 7.08956L10.0474 8.83831C9.9738 8.88037 9.91336 8.94137 9.87199 9.0145L9.84461 9.0715L8.7183 11.8925C8.6018 12.1843 8.24224 12.2761 8.0013 12.0936L7.95155 12.0502L5.92797 10.0276L2.83354 13.1271L2.16797 13.125L2.16924 12.4656L5.26484 9.3645L3.26179 7.36275C3.03956 7.14062 3.09698 6.774 3.35977 6.6245L3.4192 6.59594L6.22874 5.47306C6.31093 5.44022 6.38167 5.38499 6.43336 5.31424L6.46836 5.25837L8.19105 2.02836C8.26355 1.89241 8.35792 1.7693 8.47036 1.66395ZM12.752 5.5481L9.77392 2.36962C9.59692 2.18071 9.3003 2.17106 9.11136 2.34807C9.08636 2.37148 9.06405 2.39752 9.0448 2.42571L9.01824 2.46954L7.29561 5.69956C7.1568 5.95981 6.94018 6.16897 6.67736 6.29875L6.57668 6.34362L4.42762 7.2025L8.1113 10.8844L8.97399 8.72387C9.07711 8.46556 9.25418 8.24444 9.48174 8.08756L9.5823 8.02431L12.6425 6.27556C12.8674 6.14715 12.9454 5.86081 12.817 5.63604L12.7871 5.59017L12.752 5.5481Z" fill="#227AFF"/>
            </svg>
            <div className={styles.howToFix}>
                <span>Закрепить слева</span>
                <span>Закрепить справа</span>
                <span>Не закреплять</span>
            </div>
        </div>
        <div className={styles.autoSize}>
            <span>Авторазмер этой колонки</span>
            <span>Авторазмер всех колонок</span>
        </div>
        <div className={styles.defaultSize}>
            <span>Размер по умолчанию</span>
        </div>
        </>
    }

    const ColumnSettingsLeft = () => {

        const sets = ['Начинать с', 'Закончить с', 'Содержит', 'Не содержит', 'Равен', 'Не равен', 'Заготовки'];

        const [isOpen, setIsOpen] = React.useState(false);
        const [activeSet, setActiveSet] = React.useState(0);

        return <>
        <div className={isOpen ? styles.filterSet + ' ' + styles.active : styles.filterSet} onClick={() => setIsOpen(!isOpen)}>
            <span>{sets[activeSet]}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? styles.chooseFilterSet + ' ' + styles.active : styles.chooseFilterSet}>
                {sets.map((item, i) => <span onClick={() => setActiveSet(i)}>{item}</span>)}
            </div>
        </div>
        <div className={styles.filterInput}>
            <input type="text" placeholder='Фильтр...'/>
        </div>
        </>
    }

    const ColumnSettingsRight = () => {

        const data = [
            {
                name: 'ASIN'
            },
            {
                name: 'Название товара'
            },
            {
                name: 'Изображение товара'
            },
            {
                name: 'Название поставщика'
            },
            {
                name: 'Part Nubmer'
            },
            {
                name: 'Вариация'
            },
            {
                name: 'Название поставщика'
            },
            {
                name: 'Part Nubmer'
            },
            {
                name: 'Вариация'
            },
        ];

        return (
            <>
            <div className={styles.topRight}>
				<CheckCheckbox/>
				<div className={styles.searchRight}>
					<input type="text" placeholder='Поиск'/>
					<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.00002 8.99999C7.20917 8.99999 9.00004 7.20913 9.00004 4.99999C9.00004 2.79086 7.20917 1 5.00002 1C2.79087 1 1 2.79086 1 4.99999C1 7.20913 2.79087 8.99999 5.00002 8.99999Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M9.99923 9.99999L7.82422 7.825" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div className={styles.contentRight}>
					{data.map(item => {
						return <div className={styles.itemRight}>
							<CheckCheckbox/>
							<span>{item.name}</span>
						</div>
					})}
            </div>
            </>
        )
    }

    return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper}>
        <div className={styles.switch}>
            <div className={currentWindow === 0 ? styles.switchItem + ' ' + styles.active : styles.switchItem} onClick={() => setCurrentWindow(0)}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.96323 0.135468C9.91504 0.05156 9.82682 0 9.73142 0H0.268571C0.173171 0 0.0849424 0.05156 0.0367589 0.135468C-0.0113978 0.219349 -0.0123109 0.323017 0.0344491 0.407746L4.22784 8.01044V11.7263C4.22784 11.8263 4.28139 11.9184 4.36747 11.9664C4.40773 11.9888 4.4521 12 4.49639 12C4.54683 12 4.59716 11.9855 4.64118 11.9568L5.64833 11.3001C5.72547 11.2498 5.77212 11.1629 5.77212 11.0695V8.01044L9.96556 0.407746C10.0123 0.323017 10.0114 0.219377 9.96323 0.135468ZM4.765 11.2263V8.21247H5.23499V10.9198L4.765 11.2263ZM5.34642 7.66512H4.65356L0.727604 0.547347H9.27236L5.34642 7.66512Z" fill="#227AFF"/>
                </svg>
            </div>
            <div className={currentWindow === 1 ? styles.switchItem + ' ' + styles.active + ' ' + styles.mid : styles.switchItem + ' ' + styles.mid} onClick={() => setCurrentWindow(1)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.37499 2.625H11.625C11.832 2.625 12 2.45698 12 2.25001C12 2.043 11.832 1.87502 11.625 1.87502H0.37499C0.168013 1.87502 0 2.043 0 2.25001C0 2.45701 0.168013 2.625 0.37499 2.625Z" fill="#227AFF"/>
                    <path d="M11.625 5.62502H0.37499C0.167982 5.62502 0 5.79303 0 6.00001C0 6.20698 0.168013 6.375 0.37499 6.375H11.625C11.832 6.375 12 6.20698 12 6.00001C12 5.79303 11.832 5.62502 11.625 5.62502Z" fill="#227AFF"/>
                    <path d="M11.625 9.375H0.37499C0.167982 9.375 0 9.54301 0 9.74999C0 9.957 0.168013 10.125 0.37499 10.125H11.625C11.832 10.125 12 9.95697 12 9.74999C12 9.54298 11.832 9.375 11.625 9.375Z" fill="#227AFF"/>
                </svg>
            </div>
            <div className={currentWindow === 2 ? styles.switchItem + ' ' + styles.active : styles.switchItem} onClick={() => setCurrentWindow(2)}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6562 0.875H1.40625L0.9375 1.34375V11.6562L1.40625 12.125H12.6562L13.125 11.6562V1.34375L12.6562 0.875ZM1.875 1.8125H12.1875V2.75H1.875V1.8125ZM8.4375 5.5625H5.625V3.6875H8.4375V5.5625ZM8.4375 6.5V8.375H5.625V6.5H8.4375ZM1.875 3.6875H4.6875V5.5625H1.875V3.6875ZM1.875 6.5H4.6875V8.375H1.875V6.5ZM1.875 11.1875V9.3125H4.6875V11.1875H1.875ZM5.625 11.1875V9.3125H8.4375V11.1875H5.625ZM12.1875 11.1875H9.375V9.3125H12.1875V11.1875ZM12.1875 8.375H9.375V6.5H12.1875V8.375ZM9.375 5.5625V3.6875H12.1875V5.5625H9.375Z" fill="#227AFF"/>
                </svg>
            </div>
        </div>   
        <div className={styles.content}>
            {currentWindow === 0 && <ColumnSettingsLeft/>}
            {currentWindow === 1 && <ColumnSettingsMid/>}
            {currentWindow === 2 && <ColumnSettingsRight/>}
        </div>
    </div>
    )
}

export default СolumnSettings;