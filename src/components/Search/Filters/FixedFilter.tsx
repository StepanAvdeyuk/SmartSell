import React from 'react'

import styles from './FixedFilter.module.scss';

type FixedFilterProps = {
    name: string
}

const FixedFilter:React.FC<FixedFilterProps> = ({name}) => {

    const [isActive, setIsActive] = React.useState(false);

    function test(e: any) {
        e.stopPropagation();
        alert('function()');
    }

    return (
    <div className={isActive ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={() => setIsActive(!isActive)}>
        <span>{name}</span>
        <svg className={styles.svgFix} onClick={test} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.42871 6.57094C5.98266 7.35219 7.14935 7.2151 7.72078 6.57094L8.85728 5.42809C9.49977 4.72633 9.5225 3.82015 8.85728 3.14237C8.20836 2.48119 7.22049 2.48119 6.57157 3.14237L5.42871 4.28523" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.57134 6.03905C6.01739 5.2578 4.85705 5.35503 4.28563 5.99918L3.14277 7.12768C2.50028 7.82944 2.47755 8.74997 3.14277 9.42775C3.79169 10.0889 4.77956 10.0889 5.42848 9.42775L6.57134 8.2849" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg className={styles.svgClose} onClick={test} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L3 9" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 2L10 9" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    )
}

export default FixedFilter;