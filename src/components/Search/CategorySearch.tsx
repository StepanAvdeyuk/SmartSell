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

const CategorySearch = () => {

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
            component: 'SearchName'
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Product ID Type',
                childrenItems: ['UPC', 'EAN', 'ASIN']
            },
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
                name: 'Название категории'
            }
        },
		{
            component: 'RangeFilter',
            payload: {
                name: 'Месячный доход $',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Доля Амазон $',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Число брендов',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Средний объём $',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Число продавцов',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количетсво продаж',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количетсво ASIN',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Средняя цена $',
                min: '24',
                max: '24'
            }
        },
    ]

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по категориям</h2>
        <div className={styles.filters + ' ' + styles.p30}>
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
                        if (item.payload) {
                            return <ToggleSwitchFilter {...item.payload}/>
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

export default CategorySearch