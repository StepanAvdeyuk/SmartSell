import React from 'react'
import FixedFilter from '../Filters/FixedFilter';

import styles from './ProductsList.module.scss';

import testImg from '../../../assets/img/test-img.png';
import threeDots from '../../../assets/svg/three-dots.svg';
import AddNewCollection from '../GoodsList/AddNewCollection';

const headerData = ['#', 'Изображение', 'ASIN', 'Вариация', 'Рейтинг', 'Всего', 'Доля'];

const data = [0, 0, 0];

const morePopupData = [
	{
		name: 'Детали товара'
	},
	{
		name: 'Вариации товара'
	},
	{
		name: 'Продавцы'
	},
	{
		name: 'Анализ брендов'
	},
	{
		name: 'Маркетплейсы Амазон'
	},
	{
		name: 'Другие Маркетплейсы'
	},
	{
		name: 'Искать поставщиков'
	},
	{
		name: 'Удалить'
	},
	{
		name: 'Экспорт'
	},
	{
		name: 'Добавить в'
	}
];

const ProductsList = () => {

    const [addNCPopup, setAddNCPopup] = React.useState(false);

    return (
    <>
    <div className={styles.top}>
        <button className={styles.outline}>Продукты</button>
        <FixedFilter name={'BO7WHFFN5D'}/>
    </div>
    <div className={styles.line}></div>
    <div className={styles.subTop}>
        <div className={styles.mr20}><FixedFilter name={'Детали'}/></div>
        <div className={styles.mr20}><FixedFilter name={'Вариации'}/></div>
        <div className={styles.mr20}><FixedFilter name={'Маркетплейсы'}/></div>
        <div className={styles.mr20}><FixedFilter name={'Искать поставщика'}/></div>
    </div>
    <div className={styles.content}>
        <div className={styles.gridWrap}>
            {headerData.map((item, i) => {
                const lastClass = (i === headerData.length - 1) ? (' ' + styles.last) : '';
                return <div className={styles.topTable + lastClass}>
                <div className={styles.sortSvg}>
                    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3.5L4 0.5L1 3.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.5L4 3.5L7 0.5" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span>{item}</span>
                <div className={styles.filterSvg}><svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.9669 0.124179C8.92354 0.0472634 8.84413 0 8.75827 0H0.241714C0.155854 0 0.0764481 0.0472634 0.033083 0.124179C-0.010258 0.20107 -0.0110798 0.296099 0.0310042 0.373767L3.80505 7.34291V10.7491C3.80505 10.8408 3.85325 10.9252 3.93072 10.9692C3.96696 10.9898 4.00689 11 4.04675 11C4.09215 11 4.13745 10.9868 4.17706 10.9604L5.0835 10.3584C5.15292 10.3123 5.19491 10.2326 5.19491 10.1471V7.34291L8.96901 0.373767C9.01107 0.296099 9.01027 0.201095 8.9669 0.124179ZM4.2885 10.2907V7.5281H4.71149V10.0098L4.2885 10.2907ZM4.81178 7.02636H4.18821L0.654843 0.501734H8.34512L4.81178 7.02636Z" fill="#227AFF"/>
                </svg></div>
            </div>
            })}
            {data.map((item, i) => {
                return <>
                <div className={styles.itemInfo + ' ' + styles.jcs}>
                    <div className={styles.more}>
                        <img src={threeDots}/>
                        <div className={styles.morePopup}>
                            {morePopupData.map(item => {
                                if (item.name === 'Добавить в') {
                                return <span>{item.name}
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
                                }
                                return <span>{item.name}</span>
                            })}
                        </div>
                    </div>
                    <span>{i + 1}</span>
                </div>
                <div className={styles.itemInfo}>
                    <div className={styles.pic}>
                        <img src={testImg}/>
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <span>BO7WHFFN5D</span>
                    <div className={styles.copySvg}>
                        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.11959 1.50419H5.62298C5.61263 1.50419 5.60343 1.50774 5.59381 1.51007V0.989178C5.59381 0.642953 5.3054 0.361328 4.95082 0.361328H0.642985C0.28841 0.361328 0 0.642953 0 0.989178V6.84459C0 7.19082 0.28841 7.47244 0.642985 7.47244H1.39845V7.75593C1.39845 8.08975 1.67581 8.36133 2.01686 8.36133H6.11959C6.46064 8.36133 6.738 8.08975 6.738 7.75593V2.10959C6.738 1.77577 6.46064 1.50419 6.11959 1.50419ZM0.254258 6.84459V0.989178C0.254258 0.783078 0.428699 0.615303 0.642985 0.615303H4.95082C5.16511 0.615303 5.33955 0.783078 5.33955 0.989178V6.84459C5.33955 7.05069 5.16511 7.21848 4.95082 7.21848H0.642985C0.428699 7.21848 0.254258 7.05069 0.254258 6.84459ZM6.48373 7.75593C6.48373 7.94975 6.32035 8.10737 6.11959 8.10737H2.01686C1.8161 8.10737 1.65271 7.94975 1.65271 7.75593V7.47244H4.95082C5.3054 7.47244 5.59381 7.19082 5.59381 6.84459V1.75228C5.60343 1.7546 5.61263 1.75815 5.62298 1.75815H6.11959C6.32035 1.75815 6.48373 1.91577 6.48373 2.10959V7.75593Z" fill="#227AFF"/>
                        <path d="M4.19017 2.01172H1.39652C1.32633 2.01172 1.26953 2.06851 1.26953 2.13869C1.26953 2.20889 1.32633 2.26568 1.39652 2.26568H4.19017C4.26036 2.26568 4.31716 2.20889 4.31716 2.13869C4.31716 2.06851 4.26036 2.01172 4.19017 2.01172Z" fill="#227AFF"/>
                        <path d="M4.19017 3.02832H1.39652C1.32633 3.02832 1.26953 3.08511 1.26953 3.1553C1.26953 3.22548 1.32633 3.28228 1.39652 3.28228H4.19017C4.26036 3.28228 4.31716 3.22548 4.31716 3.1553C4.31716 3.08511 4.26036 3.02832 4.19017 3.02832Z" fill="#227AFF"/>
                        <path d="M4.19017 4.04395H1.39652C1.32633 4.04395 1.26953 4.10075 1.26953 4.17093C1.26953 4.24112 1.32633 4.29792 1.39652 4.29792H4.19017C4.26036 4.29792 4.31716 4.24112 4.31716 4.17093C4.31716 4.10075 4.26036 4.04395 4.19017 4.04395Z" fill="#227AFF"/>
                        <path d="M2.92033 5.05957H1.39652C1.32633 5.05957 1.26953 5.11637 1.26953 5.18656C1.26953 5.25675 1.32633 5.31355 1.39652 5.31355H2.92033C2.99052 5.31355 3.04731 5.25675 3.04731 5.18656C3.04731 5.11637 2.99052 5.05957 2.92033 5.05957Z" fill="#227AFF"/>
                        </svg>
                    </div>
                    <div className={styles.chainSvg}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.52344 5.47644C4.98506 6.12748 5.9573 6.01323 6.43349 5.47644L7.38058 4.52406C7.91598 3.93926 7.93493 3.18411 7.38058 2.61929C6.83981 2.06831 6.01659 2.06831 5.47582 2.61929L4.52344 3.57167" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.47579 5.03352C5.01417 4.38248 4.04722 4.4635 3.57103 5.0003L2.61865 5.94071C2.08324 6.52551 2.0643 7.29262 2.61865 7.85744C3.15942 8.40842 3.98264 8.40842 4.52341 7.85744L5.47579 6.90506" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <span className={styles.blue}>Цвет:</span>
                    <span>Black</span>
                </div>
                <div className={styles.itemInfo}><span>239</span></div>
                <div className={styles.itemInfo}><span>239</span></div>
                <div className={styles.itemInfo + ' ' + styles.last}><span>85%</span></div>
                </>
            })}
        </div>
    </div>
    <AddNewCollection isOpen={addNCPopup} setIsOpen={setAddNCPopup}/>
    </>
    )
}

export default ProductsList;