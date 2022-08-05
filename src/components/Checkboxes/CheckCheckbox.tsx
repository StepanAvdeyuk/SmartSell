import React from 'react'

import { useId } from "react-id-generator";

import styles from './CheckCheckBox.module.scss';

const CheckCheckbox = () => {

	const [htmlId] = useId();
	const [checked, setChecked] = React.useState(false);

	function changeCheckbox() {
	   setChecked(!checked);
	}

	return (
	<div className={styles.wrapper}>
		<input id={htmlId} type="checkbox" checked={checked} onChange={changeCheckbox}/>
		<label htmlFor={htmlId}>
		<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11 1L4.125 8L1 4.81818" stroke="#227AFF" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		</label>
	</div>
	)
}

export default CheckCheckbox