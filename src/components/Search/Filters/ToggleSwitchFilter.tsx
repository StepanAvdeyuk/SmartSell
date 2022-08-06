import React from 'react'
import { useId } from "react-id-generator";

import styles from './ToggleSwitchFilter.module.scss'

type ToggleSwitchFilterProps = {
	name: string,
	helper?: boolean,
	m0?: boolean
}

const ToggleSwitchFilter: React.FC<ToggleSwitchFilterProps> = ({name, helper, m0}) => {

	const [htmlId] = useId();
	const [checked, setChecked] = React.useState(false);

	function changeCheckbox() {
	   setChecked(!checked);
	}

	return (
	<div className={m0 ? styles.toggleSwitchFilter + ' ' + styles.m0 : styles.toggleSwitchFilter}>
		<input type="checkbox" id={htmlId} checked={checked} onChange={changeCheckbox}/><label htmlFor={htmlId} className={checked ? styles.active : ''}>Toggle</label>
		<div className={styles.name}>
			{name}
			{helper && <div className={styles.helper}>{helper}</div>}
		</div>
	</div>
	)
}

export default ToggleSwitchFilter