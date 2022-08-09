import React from 'react'

import styles from './SwitchInput.module.scss';

type SwitchInputProps = {
    choose: string[]
}

const SwitchInput: React.FC<SwitchInputProps> = ({choose}) => {

    const [activeValue, setActiveValue] = React.useState(choose[0]);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
        <span>{activeValue}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#5F7289" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className={isOpen ? styles.popup + ' ' + styles.active : styles.popup}>
            {choose.map((item, i) => <span onClick={() => setActiveValue(choose[i])}>{item}</span>)}
        </div>
    </div>
    )
}

export default SwitchInput