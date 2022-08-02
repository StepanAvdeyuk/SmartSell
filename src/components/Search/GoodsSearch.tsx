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

import styles from './GoodsSearch.module.scss'

type configFiltersType = {
    component: string,
    payload?: any
}

const GoodsSearch = () => {

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
                name: 'Название поставщика'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'ASIN(s)'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'UPС/EAN/ISBN'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Part Number'
            }
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Вариация',
                childrenItems: ['Вариация 1', 'Вариация 2', 'Вариация 3']
            },
        },
        {
            component: 'SearchByName'
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Бренд'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Категория'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Производитель'
            }
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Исключить правообладателей',
                childrenItems: ['Не исключать правообладателей'],
            },
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Rank (BSR) %',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Amazon In Stock Rate',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество продавцов',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Присутствие Amazon',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Количество ревью',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Рейтинг ревью',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Buy Box Price',
                min: '24',
                max: '24'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Количество FBA селлеров'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Количество FBM селлеров'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Количество FBM Prime селлеров'
            }
        },
        {
            component: 'TextAreaFilter',
            payload: {
                name: 'Количество без By Box'
            }
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Out of Stock',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Плохие бренды',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Хорошие бренды',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Неизвестные бренды',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'SwitchFilter',
            payload: {
                name: 'Selling App',
                childrenItems: ['Да', 'Нет']
            },
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Примерный ежимесячный доход',
                min: '$24',
                max: '$24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Примерный ежимесячные продажи',
                min: '$24',
                max: '$24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Цена на товар без Buy Box',
                min: '$24',
                max: '$24'
            }
        },
        {
            component: 'RangeFilter',
            payload: {
                name: 'Marketplaces Amazon',
                min: '24',
                max: '24'
            }
        },
    ]

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Поиск по товарам</h2>
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
                    default:
                        return null
                }
            })}
            <SearchBar/>
        </div>
    </div>
    )
}

export default GoodsSearch