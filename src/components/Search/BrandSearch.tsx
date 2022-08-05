import usFlag from '../../assets/img/us-flag.png';
import canadaFlag from '../../assets/img/canada-flag.png';
import germanyFlag from '../../assets/img/germany-flag.png';
import spainFlag from '../../assets/img/spain-flag.png';

import SwitchFilter from './Filters/SwitchFilter';
import SearchName from './Filters/SearchName';
import DownloadSearch from './Filters/DownloadSearch';
import SearchByName from './Filters/SearchByName';
import TextAreaFilter from './Filters/TextAreaFilter';
import RangeFilter from './Filters/RangeFilter';
import SearchBar from './SearchBar';
import MyFilter from './Filters/MyFilter';
import TextFilter from './Filters/TextFilter';
import ToggleSwitchFilter from './Filters/ToggleSwitchFilter';

import styles from './GoodsSearch.module.scss';

type configFiltersType = {
    component: string,
    payload?: any
}

const BrandSearch = () => {

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
            component: 'SearchName',
            payload: {
              big: true
            }
        },
        {
            component: 'DownloadSearch',
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: '25',
                childrenItems: ['50', '100', '250']
            },
        },
        {
            component: 'SearchByName'
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Категория',
                childrenItems: ['Категория 1 ', 'Категория 2']
            },
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'Amazon In Stock Rate %',
                min: '24',
                max: '24',
                helper: 'Сколько из всех продавцов в процентах продаёт Amazon для данного товара'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество продавцов',
                min: '24',
                max: '24',
                helper: 'Среднее количество селлеров от и до для всех товаров'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество FBA селлеров',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество FBM селлеров',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество FBM Prime селлеров',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Средняя цена продажи $',
                min: '24',
                max: '24',
                helper: 'Средняя цена продажи от и до по всем товарам'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Ежемесячный доход',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Средний размер товара',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество продуктов в основной категории',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количетсво продуктов в основной подкатегории',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'ToggleSwitchFilter',
            payload: {
                name: 'Storefront',
                helper: 'Бренд оформлен на Amazon как отдельный сайт'
            }
        },
        {
            component: 'TextFilter',
            payload: {
                name: 'Dominant seller',
                helper: 'На долю этого продавца припадает N% продаж от всех продаж этого бренда'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Конкуренция TOP',
                min: '24%',
                max: '24%',
                helper: 'Между продавцами которые наибольше продают, разница в продажах не более указанного процента, от большего к меньшему.'
            }
        },
        {
            component: 'ToggleSwitchFilter',
            payload: {
                name: 'Исключить потенциальных правообладателей'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Marketplaces Amazon',
                min: '24',
                max: '24',
                helper: 'Число в скольких странах на Amazon продается еще этот бренд'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Другие маркетплейсы',
                min: '24',
                max: '24',
                helper: 'Число в скольки других маркетплейсах продается этот бренд'
            }
        },
    ]

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по брендам</h2>
        <div className={styles.filters}>
            {configFilters.map((item, i) => {
                switch (item.component) {
                    case 'MyFilter':
                            return <MyFilter/> 
                    case 'SearchName':
						if (item.payload) {
							return <SearchName {...item.payload}/>
						} else {
							return <SearchName/>
						}
                    case 'SearchByName':
                        return <SearchByName/>
                    case 'RangeFilter': 
						if (item.payload) {
							return <RangeFilter {...item.payload}/>
						} else {
							return null
						}
                    case 'DownloadSearch':
                        return <DownloadSearch/>
                    case 'TextAreaFilter': 
                        if (item.payload) {
                            return <TextAreaFilter {...item.payload}/>
                        } else {
                            return null
                        }
                    case 'SwitchFilter': 
                        if (item.payload) {
                            return <SwitchFilter {...item.payload}/>
                        } else {
                            return null
                        }
					case 'TextFilter': 
						if (item.payload) {
							return <TextFilter {...item.payload}/>
						} else {
							return null
						}
                    case 'ToggleSwitchFilter':
                        if (item.payload) {
                            return <ToggleSwitchFilter key={i} {...item.payload}/>
                        } else {
                            return null
                        }
                    default:
                        return null
                }
            })}
            <SearchBar/>
        </div>
    </div>
    )
}

export default BrandSearch