import React from 'react'

import styles from './ToggleSwitchFilter.module.scss'

type ToggleSwitchFilterProps = {
	name: string,
	id: string,
	helper?: boolean
}

const ToggleSwitchFilter: React.FC<ToggleSwitchFilterProps> = ({name, id, helper}) => {

	const [checked, setChecked] = React.useState(false);

	function changeCheckbox() {
	   setChecked(!checked);
	}

	return (
	<div className={styles.toggleSwitchFilter}>
		<input type="checkbox" id={id} checked={checked} onChange={changeCheckbox}/><label htmlFor={id} className={checked ? styles.active : ''}>Toggle</label>
		<div className={styles.name}>
			{name}
			{helper && <div className={styles.helper}>{helper}</div>}
		</div>
	</div>
	)
}

export default ToggleSwitchFilter