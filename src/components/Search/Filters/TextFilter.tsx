import React from 'react'

import styles from './TextFilter.module.scss'

type TextFilterProps = {
    name: string,
	helper?: string
}

const TextFilter: React.FC<TextFilterProps> = ({name, helper}) => {
  return (
    <div className={styles.textFilter}>
        <div className={styles.name}>
			{name}
			{helper && <div className={styles.helper}>{helper}</div>}
		</div>
		<input type='text'/>
    </div>
  )
}

export default TextFilter;