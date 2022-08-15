import React from 'react'
import ToggleSwitch from '../Checkboxes/ToggleSwitch';

import styles from './InventoryChanges.module.scss';

import testImg from '../../assets/img/test-img-big.png';

const switchData = ['Непроверенные', 'Принятые', 'Удалённые'];

const providerData = ['Название', 'Бренд', 'Описание', 'Фото', 'Сроки доставки', 'ASIN'];
const ourData = ['Название', 'Бренд', 'Описание', 'Фото', 'ASIN', 'Listing removed', 'Search Suppressed'];

const InventoryChangesSwitch = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeSpan, setActiveSpan] = React.useState(0);

    return (
        <div className={isOpen ? styles.switch + ' ' + styles.active : styles.switch} onClick={() => setIsOpen(!isOpen)}>
            <span>{switchData[activeSpan]}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? styles.popup + ' ' + styles.active : styles.popup}>
                {switchData.map((item, i) => <span onClick={() => setActiveSpan(i)}>{item}</span>)}
            </div>
        </div>
    )
}

const InventoryChanges = () => {

    const [settingsPage, setSettingsPage] = React.useState(false);

    return (
        <>
        <div className={styles.top}>
            <h2>Изменения в Инвентаре</h2>
            <div className={styles.right}>
                <div className={styles.monitoring}>
                    <ToggleSwitch/>
                    <span>Мониторинг включен</span>
                </div>
                <button className={styles.btnFill} onClick={() => setSettingsPage(true)}>Настройки</button>
            </div>
        </div>
        <p className={styles.textInfo}>Тут отображаются изменения в листингах Amazon для продажи и закупки (бренд, название, описание, фото, сроки доставки)</p>
        <div className={styles.header}>
           <InventoryChangesSwitch/>
           <div className={styles.input}>
                <input type="text" placeholder='Поиск'/>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33336 11.3056C9.2789 11.3056 11.6667 8.91776 11.6667 5.97224C11.6667 3.02673 9.2789 0.638916 6.33336 0.638916C3.38783 0.638916 1 3.02673 1 5.97224C1 8.91776 3.38783 11.3056 6.33336 11.3056Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 12.6389L10.1 9.73892" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className={styles.help}>?</div>
           </div>
           <span className={styles.changesCount}>0 изменений</span>
           <div className={styles.buttons}>
                <button className={styles.btnOutline}>Принять все</button>
                <button className={styles.btnOutline}>Удалить все</button>
           </div>
        </div>
        {settingsPage ? 
        <div className={styles.settingsWrap}>
            <h3>Настройки</h3>
            <div className={styles.settingsContent}>
                <div className={styles.left}>
                    <p>Мониторить следующие изменения в товара у поставщика <span>и применить изменения:</span></p>
                    <div className={styles.settingsList}>
                        <div className={styles.top}>
                            <div className={styles.left}>Авто</div>
                            <div className={styles.right}>В ручную</div>
                        </div>
                        {providerData.map(item => {
                            return <div className={styles.settingsItem}>
                                <span>{item}</span>
                                <div className={styles.settingsSwitch}>
                                    <ToggleSwitch/>
                                    <ToggleSwitch/>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className={styles.right}>
                    <p>Мониторить следующие изменения в нашем магазине <span>и применить изменения:</span></p>
                    <div className={styles.settingsList}>
                        <div className={styles.top}>
                            <div className={styles.left}>Авто</div>
                            <div className={styles.right}>В ручную</div>
                        </div>
                        {ourData.map(item => {
                            return <div className={styles.settingsItem}>
                                <span>{item}</span>
                                <div className={styles.settingsSwitch}>
                                    <ToggleSwitch/>
                                    <ToggleSwitch/>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.settingsButtons}>
                <button className={styles.btnFill} onClick={() => setSettingsPage(false)}>Сохранить</button>
                <button className={styles.btnOutline} onClick={() => setSettingsPage(false)}>Отмена</button>
            </div>
        </div> 
        : 
        // <div className={styles.zeroChanges}>
        //     <span>Нет изменений в инвентаре</span>
        // </div>
        <div className={styles.content}>
            <div className={styles.item}>
                <div className={styles.image}>
                    <div className={styles.pic}>
                        <img src={testImg}/>
                    </div>
                    <span>BSDVN34MVNI</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.brand}>Valuspa</span>
                    <span className={styles.name}>Название товара</span>
                    <div className={styles.copySvg}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8079 2.00001H10.9398C10.9218 2.00001 10.9057 2.00622 10.8889 2.01029V1.09874C10.8889 0.492844 10.3847 0 9.76494 0H2.235C1.61522 0 1.11108 0.492844 1.11108 1.09874V11.3457C1.11108 11.9516 1.61522 12.4444 2.235 12.4444H3.55553V12.9405C3.55553 13.5247 4.04034 14 4.63648 14H11.8079C12.4041 14 12.8889 13.5247 12.8889 12.9405V3.05946C12.8889 2.47527 12.4041 2.00001 11.8079 2.00001ZM1.55552 11.3457V1.09874C1.55552 0.738063 1.86043 0.444456 2.235 0.444456H9.76494C10.1395 0.444456 10.4444 0.738063 10.4444 1.09874V11.3457C10.4444 11.7064 10.1395 12 9.76494 12H2.235C1.86043 12 1.55552 11.7064 1.55552 11.3457ZM12.4444 12.9405C12.4444 13.2797 12.1588 13.5556 11.8079 13.5556H4.63648C4.28556 13.5556 3.99996 13.2797 3.99996 12.9405V12.4444H9.76494C10.3847 12.4444 10.8889 11.9516 10.8889 11.3457V2.43416C10.9057 2.43823 10.9218 2.44444 10.9398 2.44444H11.8079C12.1588 2.44444 12.4444 2.72027 12.4444 3.05946V12.9405Z" fill="#227AFF"/>
                        <path d="M8.44437 2.88889H3.55548C3.43265 2.88889 3.33325 2.98826 3.33325 3.11109C3.33325 3.23394 3.43265 3.33332 3.55548 3.33332H8.44437C8.5672 3.33332 8.6666 3.23394 8.6666 3.11109C8.6666 2.98826 8.5672 2.88889 8.44437 2.88889Z" fill="#227AFF"/>
                        <path d="M8.44437 4.66669H3.55548C3.43265 4.66669 3.33325 4.76607 3.33325 4.88889C3.33325 5.01172 3.43265 5.11112 3.55548 5.11112H8.44437C8.5672 5.11112 8.6666 5.01172 8.6666 4.88889C8.6666 4.76607 8.5672 4.66669 8.44437 4.66669Z" fill="#227AFF"/>
                        <path d="M8.44437 6.44443H3.55548C3.43265 6.44443 3.33325 6.54383 3.33325 6.66666C3.33325 6.78948 3.43265 6.88888 3.55548 6.88888H8.44437C8.5672 6.88888 8.6666 6.78948 8.6666 6.66666C8.6666 6.54383 8.5672 6.44443 8.44437 6.44443Z" fill="#227AFF"/>
                        <path d="M6.22215 8.22223H3.55548C3.43265 8.22223 3.33325 8.32163 3.33325 8.44446C3.33325 8.56729 3.43265 8.66669 3.55548 8.66669H6.22215C6.34498 8.66669 6.44436 8.56729 6.44436 8.44446C6.44436 8.32163 6.34498 8.22223 6.22215 8.22223Z" fill="#227AFF"/>
                        </svg>
                    </div>
                    <div className={styles.findSvg}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0494 11.0987C8.8381 11.0987 11.0988 8.83805 11.0988 6.04936C11.0988 3.26068 8.8381 1 6.0494 1C3.26069 1 1 3.26068 1 6.04936C1 8.83805 3.26069 11.0987 6.0494 11.0987Z" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3611 12.3611L9.61548 9.61548" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className={styles.date}>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.33344 0.722168C2.15779 0.722168 2.01802 0.86437 2.01802 1.03865V3.11295C2.01802 3.28722 2.15779 3.42599 2.33344 3.42599H2.50402C2.67968 3.42599 2.82266 3.28722 2.82266 3.11295V1.03865C2.82266 0.86437 2.67968 0.722168 2.50402 0.722168H2.33344ZM7.49598 0.722168C7.32032 0.722168 7.17734 0.86437 7.17734 1.03865V3.11295C7.17734 3.28722 7.32032 3.42599 7.49598 3.42599H7.66334C7.83899 3.42599 7.98198 3.28722 7.98198 3.11295V1.03865C7.98198 0.86437 7.83899 0.722168 7.66334 0.722168H7.49598ZM1.02671 2.23576C0.458586 2.23576 0 2.71556 0 3.31247V9.64202C0 10.2389 0.458586 10.7222 1.02671 10.7222H8.97329C9.54141 10.7222 10 10.2389 10 9.64202V3.31247C10 2.71556 9.54141 2.23576 8.97329 2.23576H8.1944V3.28839C8.1944 3.555 7.97712 3.76998 7.7084 3.76998H7.45092C7.18219 3.76998 6.96492 3.555 6.96492 3.28839V2.23576H3.03508V3.28839C3.03508 3.555 2.8178 3.76998 2.54908 3.76998H2.28838C2.01966 3.76998 1.8056 3.555 1.8056 3.28839V2.23576H1.02671ZM0.643708 5.23885H9.35307V9.22922C9.35307 9.63102 9.05311 9.95161 8.67718 9.95161H1.32282C0.946886 9.95161 0.643708 9.63102 0.643708 9.22922V5.23885Z" fill="#227AFF"/>
                        </svg>
                        <span>07.06.2022, 22:22</span>
                    </div>
                    <div className={styles.changes}>Изменения: <span>ASIN merged/changed</span></div>
                    <button className={styles.apply}>Применить</button>
                    <button className={styles.notApply}>Не применять</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.image}>
                        <div className={styles.pic}>
                            <img src={testImg}/>
                        </div>
                        <span>BSDVN34MVNI</span>
                </div>  
            </div>
        </div>
        }

        </>
    )
}

export default InventoryChanges