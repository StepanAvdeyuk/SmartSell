import React from 'react'

import styles from './TextAreaFilter.module.scss'

type TextAreaFilterProps = {
    name: string,
    helper?: string
}

const TextAreaFilter: React.FC<TextAreaFilterProps> = ({name, helper}) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const inputRef = React.useRef(null);

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

    function showPopup() {
        setIsOpen(true);
    }

    return (
        <div ref={inputRef} className={isOpen ? styles.textAreaFilter + ' ' + styles.active : styles.textAreaFilter} onClick={showPopup}>
            <div className={styles.name}>
                {name}
                {helper && <div className={styles.helper}>{helper}</div>}
            </div>
            <div className={styles.popup}>
                <p>Введите {name} в поле</p>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default TextAreaFilter;