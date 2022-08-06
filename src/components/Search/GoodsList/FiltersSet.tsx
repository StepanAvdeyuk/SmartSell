import React from 'react';

import styles from './FiltersSet.module.scss';

type dataType = {
    name: string;
}

const data: dataType[] = [
	{
		name: 'ASIN'
	},
	{
		name: 'Название товара'
	},
	{
		name: 'Изображение товара'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
    {
		name: 'ASIN'
	},
	{
		name: 'Название товара'
	},
	{
		name: 'Изображение товара'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
	{
		name: 'Название поставщика'
	},
	{
		name: 'Part Nubmer'
	},
	{
		name: 'Вариация'
	},
];

type FiltersSetProps = {
    isOpen: boolean;
}

const FiltersSet: React.FC<FiltersSetProps> = ({isOpen}) => {

    const [currentTextarea, setCurrentTextarea] = React.useState(data[0].name);
    const [isOpenTextarea, setIsOpenTextarea] = React.useState(false);

    const wrapRef = React.useRef(null);

    React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (wrapRef.current && !_e.path.includes(wrapRef.current)) {
				setIsOpenTextarea(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

    return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
            {data.map((item, i) => {
                function clickItem() {
                    setIsOpenTextarea(!isOpenTextarea);
                    setTimeout(() => {
                        setCurrentTextarea(data[i].name);
                    }, 10);
                }
        
                return <div className={((data[i].name === currentTextarea) && isOpenTextarea) ? styles.item + ' ' + styles.active : styles.item} onClick={clickItem}>
                            <span>{item.name}</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                </div>
            })}
        </div>
        <div className={isOpenTextarea ? styles.popup + ' ' + styles.active : styles.popup} ref={wrapRef}>
            <p>Введите {currentTextarea} в поле</p>
            <textarea></textarea>
        </div>
    </div>
    )
}

export default FiltersSet