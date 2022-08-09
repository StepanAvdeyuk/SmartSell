import React from 'react'
import { useId } from "react-id-generator";

import styles from './ToggleSwitch.module.scss';

const ToggleSwitchFilter: React.FC = () => {

	const [htmlId] = useId();
	const [checked, setChecked] = React.useState(false);

	function changeCheckbox() {
	   setChecked(!checked);
	}

	return (
	<div className={styles.toggleSwitch}>
		<input type="checkbox" id={htmlId} checked={checked} onChange={changeCheckbox}/>
        <label htmlFor={htmlId} className={checked ? styles.active : ''}>Toggle</label>
	</div>
	)
}

export default ToggleSwitchFilter