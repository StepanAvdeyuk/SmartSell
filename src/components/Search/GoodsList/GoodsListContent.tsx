import React from 'react'
import CheckCheckbox from '../../Checkboxes/CheckCheckbox';

import testImg from '../../../assets/img/test-img.png';
import threeDots from '../../../assets/svg/three-dots.svg';

import styles from './GoodsList.module.scss';
import { sortTypesType } from './GoosList';
import SortType from './SortType';


const fixSortTypes = [
	{
		name: 'Image'
	}
];

const sortTypes: sortTypesType[] = [
	{
		name: 'ASIN'
	}, 
	{
		name: 'Название товара'
	}
];

const data = [
	{
		name: 'Название позиции товара',
		asin: 'OP-63TZ-3UM2'
	},
	{
		name: 'Название позиции',
		asin: 'OP-63TZ-3UM2-33'
	},
	{
		name: 'Название позиции товара',
		asin: 'OP-63TZ-3UM2'
	},
	{
		name: 'Название позиции',
		asin: 'OP-63TZ-3UM2-33'
	},
	{
		name: 'Название позиции товара',
		asin: 'OP-63TZ-3UM2'
	},
	{
		name: 'Название позиции',
		asin: 'OP-63TZ-3UM2-33'
	},
	{
		name: 'Название позиции товара',
		asin: 'OP-63TZ-3UM2'
	},
	{
		name: 'Название позиции',
		asin: 'OP-63TZ-3UM2-33'
	},
];

const morePopupDataHeader = [
	{
		name: 'Искать товарные пары'
	},
	{
		name: 'Детали продавцов'
	},
	{
		name: 'Детали вариаций'
	},
	{
		name: 'Детали брендов'
	},
	{
		name: 'Детали категорий'
	},
	{
		name: 'Маркетплейсы Амазон'
	},
	{
		name: 'Другие Маркетплейсы'
	},
	{
		name: 'Добавить в'
	},
	{
		name: 'Экспорт'
	},
	{
		name: 'Архиваровать'
	},
	{
		name: 'Удалить из системы'
	}
];

const morePopupData = [
	{
		name: 'Искать товарные пары'
	},
	{
		name: 'Детали товара'
	},
	{
		name: 'Детали вариации'
	},
	{
		name: 'Детали бренда'
	},
	{
		name: 'Детали категории'
	},
	{
		name: 'Маркетплейсы Амазон'
	},
	{
		name: 'Другие Маркетплейсы'
	},
	{
		name: 'Добавить в'
	},
	{
		name: 'Экспорт'
	},
	{
		name: 'Архиваровать'
	},
	{
		name: 'Удалить из системы'
	}
];


const GoodsListContent = () => {
    return (
    <>
    <div className={styles.topLeft}>
            <CheckCheckbox/>
            <div className={styles.more}>
                <img src={threeDots}/>
                <div className={styles.morePopup}>
                    {morePopupDataHeader.map(item => <span>{item.name}</span>)}
                </div>
            </div>
        </div>
        {fixSortTypes.map((item, i) => {
            const borderClass = (i === fixSortTypes.length - 1) ? (' ' + styles.fixBorder) : ''; 
            return <div className={styles.fixedColumnName + borderClass}>{item.name}</div>
        })}
        {sortTypes.map((item) => {
                return <SortType item={item}/>
        })}
        {data.map((item, i) => {
            const bgClass = (i % 2 === 0) ? (' ' + styles.darkBG) : '';
            return <>
            <div className={styles.itemLeft + bgClass}>
                <CheckCheckbox/>
                <div className={styles.more}>
                    <img src={threeDots}/>
                    <div className={styles.morePopup}>
                        {morePopupData.map(item => <span>{item.name}</span>)}
                    </div>
                </div>
            </div>
            <div className={styles.fixedColumn + bgClass + ' ' + styles.fixBorder}>
                {/* Нужно добавить условие border только для последнего fixed столбца */}
                <div className={styles.pic}>
                    <img src={testImg}/>
                </div>
            </div>
            <div className={styles.textContent + ' ' + styles.tdu + bgClass}><span>{item.asin}</span></div>
            <div className={styles.textContent + bgClass}><span>{item.name}</span></div>
            </>
        })}
    </>
    )
}

export default GoodsListContent