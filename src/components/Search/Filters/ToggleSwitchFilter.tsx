import React from 'react'

import styles from './ToggleSwitchFilter.module.scss'

const ToggleSwitchFilter = () => {
  return (
    <div className={styles.toggleSwitchFilter}>
        <input type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
        <div className={styles.name}>Amazon</div>
    </div>
  )
}

export default ToggleSwitchFilter