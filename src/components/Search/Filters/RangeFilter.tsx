import React from 'react'

import styles from './RangeFilter.module.scss'

type RangeFilterProps = { 
    name: string,
    min: string,
    max: string,
    helper?: string
}

const RangeFilter: React.FC<RangeFilterProps> = ({name, min, max, helper}) => {

    const [minValue, setMinValue] = React.useState(min);
    const [maxValue, setMaxValue] = React.useState(max);

    return (
        <div className={styles.rangeFilter}>
            <div className={styles.name}>
                {name}
                {helper && <div className={styles.helper}>{helper}</div>}
            </div>
            <input type="text" value={minValue} onChange={(e) => setMinValue(e.target.value)}/>
            -
            <input type="text" value={maxValue} onChange={(e) => setMaxValue(e.target.value)}/>
        </div>
    )
}

export default RangeFilter;