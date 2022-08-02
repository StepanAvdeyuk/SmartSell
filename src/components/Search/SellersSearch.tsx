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

const SellersSearch = () => {

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
            component: 'TextAreaFilter',
            payload: {
                name: 'Имя продавца',
				helper: 'Поиск продавца по имени (по одному имени или несколько одновременно)'
            }
        },
		{
			component: 'TextFilter',
			payload: {
				name: 'Seller ID',
				helper: 'Поиск продавца по его идентификатору (по одному идентификатору или несколько одновременно)'
			}
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
                name: 'Месячный доход $',
                min: '24',
                max: '24',
				helper: 'Оборот в $ по всем товарам'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'FBA %',
                min: '24',
                max: '24',
				helper: 'Какой % товаров от всех у его инвентаря он продает через FBA'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'FBM %',
                min: '24',
                max: '24',
				helper: 'Какой % товаров от всех у его инвентаря он продает через FBM'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'Количество ASIN',
                min: '24',
                max: '24',
				helper: 'Количество товаров, которое есть в инвенторе'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'TOP ASIN',
                min: '24',
                max: '24',
				helper: 'Количество товаров, которое есть в инвенторе и которые имеют оборот в месяц более чем 10к$'
            }
        },
		{
			component: 'TextFilter',
			payload: {
				name: 'Business Name',
				helper: 'Официальное название продавца'
			}
		},
		{
			component: 'TextFilter',
			payload: {
				name: 'Страна',
				helper: 'Cтрана, где зарегистрирован продавец'
			}
		},
		{
			component: 'TextFilter',
			payload: {
				name: 'Штат',
				helper: 'Штат, в котором зарегистрирован продавец'
			}
		},
		{
            component: 'RangeFilter',
            payload: {
                name: 'Охват бренда',
                min: '24',
                max: '24',
				helper: 'Количество брендов, с которым данный продавец имеет более 60% предполагаемых продаж, это указывает на связь с брендом'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'Количество продаваемых брендов',
                min: '24',
                max: '24',
				helper: 'Количество брендов, которые продавец продает больше чем на 1к$ в месяц.'
            }
        },
		{
			component: 'ToggleSwitchFilter'
		}
    ]

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по продавцам</h2>
        <div className={styles.filters}>
            {configFilters.map(item => {
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
						return <ToggleSwitchFilter/>
                    default:
                        return null
                }
            })}
            <SearchBar/>
        </div>
    </div>
    )
}

export default SellersSearch