import React from 'react'
import CheckCheckbox from '../../Checkboxes/CheckCheckbox'
import FillCheckbox from '../../Checkboxes/FillCheckbox'

import testImg from '../../../assets/img/test-img.png';
import threeDots from '../../../assets/svg/three-dots.svg';

import styles from './GoodsList.module.scss'

const sortTypes = [
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

]

const GoosList = () => {
  return (
    <>
    <h2 className={styles.title}>Список товаров</h2>
    <div className={styles.flex}>
        <div className={styles.switch + ' ' + styles.mr22}>
			Колонки
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
		<div className={styles.switch}>
			Фильтры
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
    </div>
	<div className={styles.top}>
		<div className={styles.left}>
			<CheckCheckbox/>
			<div className={styles.more}>
				<img src={threeDots}/>
			</div>
			<p>Image</p>
		</div>
		<div className={styles.right}>
			{sortTypes.map(item => {
				return <div className={styles.sortType}>
				<p>{item.name}</p>
				<svg className={styles.arrowSvg} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L5.5 5.5L10 1" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<svg className={styles.burgerSvg} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.37499 2.625H11.625C11.832 2.625 12 2.45698 12 2.25001C12 2.043 11.832 1.87502 11.625 1.87502H0.37499C0.168013 1.87502 0 2.043 0 2.25001C0 2.45701 0.168013 2.625 0.37499 2.625Z" fill="#227AFF"/>
					<path d="M11.625 5.62502H0.37499C0.167982 5.62502 0 5.79303 0 6.00001C0 6.20698 0.168013 6.375 0.37499 6.375H11.625C11.832 6.375 12 6.20698 12 6.00001C12 5.79303 11.832 5.62502 11.625 5.62502Z" fill="#227AFF"/>
					<path d="M11.625 9.375H0.37499C0.167982 9.375 0 9.54301 0 9.74999C0 9.957 0.168013 10.125 0.37499 10.125H11.625C11.832 10.125 12 9.95697 12 9.74999C12 9.54298 11.832 9.375 11.625 9.375Z" fill="#227AFF"/>
				</svg>
			</div>
			})}
		</div>
	</div>
	<div className={styles.content}>
		{data.map(item => {
			return <div className={styles.item}>
			<div className={styles.left}>
				<CheckCheckbox/>
				<div className={styles.more}>
					<img src={threeDots}/>
				</div>
				<div className={styles.pic}>
					<img src={testImg}/>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.textContent}>{item.asin}</div>
				<div className={styles.textContent}>{item.name}</div>
			</div>
		</div>
		})}
	</div>
	<div className={styles.line}></div>
    </>
  )
}

export default GoosList