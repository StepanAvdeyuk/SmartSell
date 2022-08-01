import React from 'react'

import styles from '../GoodsSearch.module.scss'

type SwitchFilterProps = {
    name: string,
    childrenItems: string[],
    justifyStart? : boolean,
    img? : string[]
}

const SwitchFilter: React.FC<SwitchFilterProps> = ({name, childrenItems, justifyStart, img}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const inputRef = React.useRef(null);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    let popupClass = styles.filterPopup;

    if (justifyStart) {
        popupClass = popupClass + ' ' + styles.justifyStart;
    }

    React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			}

			if (inputRef.current && !_e.path.includes(inputRef.current)) {
				setIsOpen(false);
			}
		}	
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

    return (
    <div ref={inputRef} className={isOpen ? styles.switchFilter + ' ' + styles.active : styles.switchFilter} onClick={() => setIsOpen(true)}> 
        <p>{name}</p>
            <svg className={styles.filterSvg}  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={isOpen ? popupClass + ' ' + styles.active : popupClass}>
                {childrenItems.map((item, i) => {
                     return <p>
                        {img && <img src={img[i]} alt='falg'></img>}
                        {item}
                        </p>
                })}
            </div>
    </div>
    )
}

export default SwitchFilter;