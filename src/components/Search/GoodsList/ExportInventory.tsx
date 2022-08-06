import React from 'react'
import ToggleSwitchFilter from '../Filters/ToggleSwitchFilter';

import styles from './ExportInventory.module.scss';

const exportType = [
    {
        name: 'Exel'
    },
    {
        name: 'CVC'
    },
    {
        name: 'TXT'
    },
]

type ExportInventoryProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const ExportInventory: React.FC<ExportInventoryProps> = ({isOpen, setIsOpen}) => {

    const [activeExportType, setActiveExportType] = React.useState(0);
    const [isOpenPopup, setIsOpenPopup] = React.useState(false);

    return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={e => e.stopPropagation()}>
        <h3 className={styles.title}>Экспортирование инвентаря</h3>
        <p>Вы экспортируете 1 товар в фаил</p>
        <div className={isOpenPopup ? styles.switch + ' ' + styles.active : styles.switch} onClick={() => setIsOpenPopup(!isOpenPopup)}>
            <span>{exportType[activeExportType].name}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpenPopup ? styles.switchPopup + ' ' + styles.active : styles.switchPopup}>
                {exportType.map((item, i) => <span onClick={() => setActiveExportType(i)}>{item.name}</span>)}
            </div>
        </div>
        <div className={styles.toggleFilter}>
            <ToggleSwitchFilter m0 name={'Указывать ссылки вместо идентификаторов'}/>
        </div>
        <div className={styles.buttons}>
            <button className={styles.fill} onClick={() => setIsOpen(false)}>Сохранить</button>
            <button className={styles.outline} onClick={() => setIsOpen(false)}>Отмена</button>
        </div>
    </div>
    )
}

export default ExportInventory