import React from 'react'
import FillCheckbox from '../Checkboxes/FillCheckbox';

import styles from './SalesReview.module.scss';

const columnsNames = [
    {
        name: 'Дата'
    },
    {
        name: 'Активные товары'
    },
    {
        name: 'Заказы для отправки'
    },
    {
        name: 'Требуют внимания'
    },
    {
        name: 'Доход'
    },
    {
        name: 'Заказы'
    },
    {
        name: 'Проданные юниты'
    },
    {
        name: 'ROI'
    },
]

const data = [
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
    {
        date: '10/01/2022',
        activeGoods: '$0.00',
        dispatchOrder: '20',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
    },
]

const totalData = {
        activeGoods: '$0.00',
        dispatchOrder: '100',
        needAttention: '$0.00',
        income: '$0.00',
        orders: '$0.00',
        soldUnits: '$0.00',
        roi: '$0.00'
}

const configInfo = ['Заказы для отправки', 'Требуют внимания', 'Доход', 'Заказы', 'Проданные юниты', 'Затраты на покупку', 'Затраты на отправку', 'Затраты на склад', 'Возвраты', 'Процент возвратов', 'Amazon Fee', 'Чистая прибыль', 'ROI', 'MARGIN', 'Среднее кол-во заказов'];

const SalesReview = () => {

    const [activeReviewType, setActiveReviewType] = React.useState(1);
    const [isOpenConfig, setIsOpenConfig] = React.useState(false);

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Обзор продаж</h2>
        <div className={styles.content}>
            <div className={styles.top}>
                <div className={styles.input}>
                    <input type="text" placeholder='Поиск'/>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33336 11.6667C9.2789 11.6667 11.6667 9.27884 11.6667 6.33333C11.6667 3.38781 9.2789 1 6.33336 1C3.38783 1 1 3.38781 1 6.33333C1 9.27884 3.38783 11.6667 6.33336 11.6667Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13 13.0001L10.1 10.1001" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </div>
                <div className={styles.config}>
                    <button className={styles.outline}>Обзор за день</button>
                    <div className={styles.dateWrap}>
                        <span>От</span>
                        <div className={styles.date}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.26682 0C3.0209 0 2.82523 0.199083 2.82523 0.443069V3.34709C2.82523 3.59108 3.0209 3.78535 3.26682 3.78535H3.50563C3.75155 3.78535 3.95172 3.59108 3.95172 3.34709V0.443069C3.95172 0.199083 3.75155 0 3.50563 0H3.26682ZM10.4944 0C10.2485 0 10.0483 0.199083 10.0483 0.443069V3.34709C10.0483 3.59108 10.2485 3.78535 10.4944 3.78535H10.7287C10.9746 3.78535 11.1748 3.59108 11.1748 3.34709V0.443069C11.1748 0.199083 10.9746 0 10.7287 0H10.4944ZM1.4374 2.11902C0.64202 2.11902 0 2.79075 0 3.62642V12.4878C0 13.3235 0.64202 14 1.4374 14H12.5626C13.358 14 14 13.3235 14 12.4878V3.62642C14 2.79075 13.358 2.11902 12.5626 2.11902H11.4722V3.59271C11.4722 3.96596 11.168 4.26694 10.7918 4.26694H10.4313C10.0551 4.26694 9.75089 3.96596 9.75089 3.59271V2.11902H4.24911V3.59271C4.24911 3.96596 3.94493 4.26694 3.56872 4.26694H3.20373C2.82752 4.26694 2.52784 3.96596 2.52784 3.59271V2.11902H1.4374ZM0.901191 6.32336H13.0943V11.9099C13.0943 12.4724 12.6744 12.9212 12.1481 12.9212H1.85195C1.32564 12.9212 0.901191 12.4724 0.901191 11.9099V6.32336Z" fill="#227AFF"/>
                            </svg>
                            <span>02/15/2022</span>
                        </div>
                    </div>
                    <div className={styles.dateWrap}>
                        <span>До</span>
                        <div className={styles.date}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.26682 0C3.0209 0 2.82523 0.199083 2.82523 0.443069V3.34709C2.82523 3.59108 3.0209 3.78535 3.26682 3.78535H3.50563C3.75155 3.78535 3.95172 3.59108 3.95172 3.34709V0.443069C3.95172 0.199083 3.75155 0 3.50563 0H3.26682ZM10.4944 0C10.2485 0 10.0483 0.199083 10.0483 0.443069V3.34709C10.0483 3.59108 10.2485 3.78535 10.4944 3.78535H10.7287C10.9746 3.78535 11.1748 3.59108 11.1748 3.34709V0.443069C11.1748 0.199083 10.9746 0 10.7287 0H10.4944ZM1.4374 2.11902C0.64202 2.11902 0 2.79075 0 3.62642V12.4878C0 13.3235 0.64202 14 1.4374 14H12.5626C13.358 14 14 13.3235 14 12.4878V3.62642C14 2.79075 13.358 2.11902 12.5626 2.11902H11.4722V3.59271C11.4722 3.96596 11.168 4.26694 10.7918 4.26694H10.4313C10.0551 4.26694 9.75089 3.96596 9.75089 3.59271V2.11902H4.24911V3.59271C4.24911 3.96596 3.94493 4.26694 3.56872 4.26694H3.20373C2.82752 4.26694 2.52784 3.96596 2.52784 3.59271V2.11902H1.4374ZM0.901191 6.32336H13.0943V11.9099C13.0943 12.4724 12.6744 12.9212 12.1481 12.9212H1.85195C1.32564 12.9212 0.901191 12.4724 0.901191 11.9099V6.32336Z" fill="#227AFF"/>
                            </svg>
                            <span>02/15/2022</span>
                        </div>
                    </div>
                    <div className={styles.configInfo}>
                        <button className={styles.outline} onClick={() => setIsOpenConfig(!isOpenConfig)}>Конфигурация</button>
                        <div className={isOpenConfig ? styles.configPopup + ' ' + styles.active : styles.configPopup}>
                            {configInfo.map(item => {
                                return <span>{item}</span>;
                            })}
                        </div>
                    </div>
                    <div className={styles.reveiwTypeWrapper}>
                        <div className={activeReviewType === 0 ? styles.reveiwType + ' ' + styles.active : styles.reveiwType} onClick={() => setActiveReviewType(0)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.98798 9.96396H0.0240173C0.501152 4.68028 4.7043 0.477135 9.98798 0V9.96396ZM11.5965 1.60516V10.7814C11.5965 11.244 11.221 11.6194 10.7584 11.6194H1.58169C2.00575 16.317 5.9491 20 10.7573 20C15.8488 20 19.976 15.8717 19.976 10.7814C19.976 5.97313 16.2947 2.0281 11.5965 1.60516Z" fill="current"/>
                            </svg>
                        </div>
                        <div className={activeReviewType === 1 ? styles.reveiwType + ' ' + styles.active : styles.reveiwType} onClick={() => setActiveReviewType(1)}>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.872 1.58203H6.58873C5.96678 1.58203 5.46075 2.08806 5.46075 2.71V4.34528C5.46075 4.96723 5.96678 5.47326 6.58873 5.47326H17.872C18.494 5.47326 19 4.96723 19 4.34528V2.71C19 2.08806 18.494 1.58203 17.872 1.58203Z" fill="current"/>
                            <path d="M17.872 7.55469H6.58873C5.96678 7.55469 5.46075 8.06071 5.46075 8.68266V10.3179C5.46075 10.9399 5.96678 11.4459 6.58873 11.4459H17.872C18.494 11.4459 19 10.9399 19 10.3179V8.68266C19 8.06071 18.494 7.55469 17.872 7.55469Z" fill="current"/>
                            <path d="M17.872 13.5273H6.58873C5.96678 13.5273 5.46075 14.0334 5.46075 14.6554V16.2906C5.46075 16.9125 5.96678 17.4186 6.58873 17.4186H17.872C18.494 17.4186 19 16.9125 19 16.2906V14.6554C19 14.0334 18.494 13.5273 17.872 13.5273Z" fill="current"/>
                            <path d="M2.94052 1.58203H1.12797C0.506027 1.58203 0 2.08806 0 2.71V4.34528C0 4.96723 0.506027 5.47326 1.12797 5.47326H2.94052C3.56247 5.47326 4.0685 4.96723 4.0685 4.34528V2.71C4.0685 2.08806 3.56247 1.58203 2.94052 1.58203Z" fill="current"/>
                            <path d="M2.94052 7.55469H1.12797C0.506027 7.55469 0 8.06071 0 8.68266V10.3179C0 10.9399 0.506027 11.4459 1.12797 11.4459H2.94052C3.56247 11.4459 4.0685 10.9399 4.0685 10.3179V8.68266C4.0685 8.06071 3.56247 7.55469 2.94052 7.55469Z" fill="current"/>
                            <path d="M2.94052 13.5273H1.12797C0.506027 13.5273 0 14.0334 0 14.6554V16.2906C0 16.9125 0.506027 17.4186 1.12797 17.4186H2.94052C3.56247 17.4186 4.0685 16.9125 4.0685 16.2906V14.6554C4.0685 14.0334 3.56247 13.5273 2.94052 13.5273Z" fill="current"/>
                            </svg>
                        </div>
                    </div>
                    <button className={styles.outline}>Скачать</button>
                </div>
            </div>
            <div className={styles.gridWrapper} style={{gridTemplateColumns: `76px repeat(7, auto) 1fr`}}>

                <div className={styles.checkAll}>
                    <FillCheckbox/>
                </div>
                {columnsNames.map(item => {
                        return <div className={styles.columnName}>
                            <span>{item.name}</span>
                            <div className={styles.svg}><svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></div>
                        </div>
                })}

                {data.map((item, i) => {
                    const bgClass = (i % 2 == 0) ? (' ' + styles.darkBG) : '';
                    return <>
                    <div className={styles.itemInfo + bgClass}>
                        <FillCheckbox/>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.date}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.activeGoods}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.dispatchOrder}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.needAttention}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.income}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.orders}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass}>
                        <span>{item.soldUnits}</span>
                    </div>
                    <div className={styles.itemInfo + bgClass + ' ' + styles.last}>
                        <span>{item.roi}</span>
                    </div>
                    </>
                })}

                <div className={styles.totalInfo + ' ' + styles.first}></div>
                <div className={styles.totalInfo}><span>Всего</span></div>
                <div className={styles.totalInfo}><span>{totalData.activeGoods}</span></div>
                <div className={styles.totalInfo}><span>{totalData.dispatchOrder}</span></div>
                <div className={styles.totalInfo}><span>{totalData.needAttention}</span></div>
                <div className={styles.totalInfo}><span>{totalData.income}</span></div>
                <div className={styles.totalInfo}><span>{totalData.orders}</span></div>
                <div className={styles.totalInfo}><span>{totalData.soldUnits}</span></div>
                <div className={styles.totalInfo + ' ' + styles.last}><span>{totalData.roi}</span></div>
            </div>
        </div>
    </div>
    )
}

export default SalesReview;