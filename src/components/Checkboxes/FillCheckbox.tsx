import React from 'react'

import { useId } from "react-id-generator";

import styles from './FillCheckbox.module.scss';

const FillCheckbox = () => {

	const [htmlId] = useId();
	const [checked, setChecked] = React.useState(false);

	function changeCheckbox() {
	   setChecked(!checked);
	}

	return (
	<div className={styles.wrapper}>
		<input id={htmlId} type="checkbox" checked={checked} onChange={changeCheckbox}/>
		<label htmlFor={htmlId}>
		</label>
	</div>
	)
}

export default FillCheckbox