import React from 'react'
import ToggleSwitch from '../Checkboxes/ToggleSwitch';
import SwitchFilter from '../Search/Filters/SwitchFilter';

import usFlag from '../../assets/img/us-flag.png';
import canadaFlag from '../../assets/img/canada-flag.png';
import germanyFlag from '../../assets/img/germany-flag.png';
import spainFlag from '../../assets/img/spain-flag.png';

import styles from './CommodityPairSettings.module.scss';
import SwitchInput from '../SwitchInput/SwitchInput';

const CommodityPairSettings = () => {
    return (
    <>
    <div className={styles.topSearch}>
        <div className={styles.name}>
            <p>Название</p>
            <span>?</span>
        </div>
        <div className={styles.input}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33336 11.6667C9.2789 11.6667 11.6667 9.27884 11.6667 6.33333C11.6667 3.38781 9.2789 1 6.33336 1C3.38783 1 1 3.38781 1 6.33333C1 9.27884 3.38783 11.6667 6.33336 11.6667Z" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 13L10.1 10.1" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder='Название товарной пары'/>
        </div>
        <button className={styles.save}>Сохранить настройки</button>
    </div>
    <div className={styles.filters}>
        <div className={styles.filterItem}>
            <SwitchFilter name={'Маркетплейсы'} childrenItems={['Amazon', 'Ebay']}/>
        </div>
        <div className={styles.filterItem}>
            <SwitchFilter name={'Страна'} childrenItems={['USA', 'Canada', 'Germany', 'Spain']} img={[usFlag, canadaFlag, germanyFlag, spainFlag]}/>
        </div>
        <div className={styles.filterItem}>
            <SwitchFilter name={'Название переоценки'} childrenItems={['Переоценка №1', 'Переоценка №2']}/>
        </div>
        <div className={styles.filterItem}>
        <SwitchFilter name={'Правило переоценки'} childrenItems={['Правило №1', 'Правило №2']}/>
        </div>
    </div>
    <div className={styles.irregular}>
        <span>Указать нестандартные настройки переоценки</span>
        <ToggleSwitch/>
    </div>
    <div className={styles.content}>
        <div className={styles.contentItem}>
            <h3>Настройки переоценки</h3>
            <div className={styles.setInput}>
                <div className={styles.left}>
                    <span>Прибыль</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/><span>-</span><input type='text' className={styles.blueInput}/>
                    </div>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/><span>-</span><input type='text' className={styles.blueInput}/>
                    </div>
                </div>
            </div>
            <div className={styles.toggleCheck + ' ' + styles.mt25}>
                <ToggleSwitch/>
                <span>Понизить базовую цену поставщика</span>
            </div>
            <div className={styles.setInput + ' ' + styles.mt20}>
                <div className={styles.left}>
                    <span>Позиция</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/><span>-</span><input type='text' className={styles.blueInput}/>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Шаг репрайсинга</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Макс.откл.цены</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/><span>-</span><input type='text' className={styles.blueInput}/>
                    </div>
                    <div className={styles.smallText}>
                        <span>от сред. за 6 мес.</span>
                        <span>от цены 1 поз. на Amazon</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contentItem}>
            <h3>Другие настройки</h3>
            <div className={styles.setInput}>
                <div className={styles.left}>
                    <span>Количество на Amazon</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                        <div className={styles.toggleCheck + ' ' + styles.ml15}>
                            <ToggleSwitch/>
                            <span>Точно</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Мин.количество</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Откл. поставщика</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.switchInput}>
                        <SwitchInput choose={['Когда у него в наличии', 'Когда не в наличии']}/>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Время поставки</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Макс. кол./Заказ</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                        <span className={styles.infoText}>шт.</span>
                    </div>
                </div>
            </div>
            <div className={styles.setInput + ' ' + styles.mt30}>
                <div className={styles.left}>
                    <span>Шаблон доставки</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.switchInput}>
                        <SwitchInput choose={['Когда у него в наличии', 'Когда не в наличии']}/>
                    </div>
                </div>
            </div>
            <div className={styles.toggleCheck + ' ' + styles.mt25}>
                <ToggleSwitch/>
                <span>Уходить с листинга в присутствии продавца FBA</span>
            </div>
            <div className={styles.toggleCheck}>
                <ToggleSwitch/>
                <span>Обнулить количество вместо удаления</span>
            </div>
            <div className={styles.setInput   + ' ' + styles.mt25}>
                <div className={styles.left}>
                    <span>Обмен валют</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem}>
                        <input type="text" className={styles.blueInput}/>
                        <div className={styles.toggleCheck + ' ' + styles.ml15}>
                            <ToggleSwitch/>
                            <span>Точно</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default CommodityPairSettings;