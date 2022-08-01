import React from 'react'

import styles from '../GoodsSearch.module.scss'

type RangeFilterProps = {
    name: string,
    min: string,
    max: string
}

const RangeFilter: React.FC<RangeFilterProps> = ({name, min, max}) => {

    const [minValue, setMinValue] = React.useState(min);
    const [maxValue, setMaxValue] = React.useState(max);

    return (
        <div className={styles.rangeFilter}>
            {name}
            <input type="text" value={minValue} onChange={(e) => setMinValue(e.target.value)}/>
            -
            <input type="text" value={maxValue} onChange={(e) => setMaxValue(e.target.value)}/>
        </div>
    )
}

export default RangeFilter;