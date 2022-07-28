import React from 'react'

import styles from './TechnicalWorks.module.scss';

const TechnicalWorks: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.text}>
        Уважаемыe пользователи, <span>Внимание!</span> Этой ночью с 00:00 до 02:00 на сайте будут проводиться технические работы.
        <br/>Заранее <span>приносим извинения</span> за предоставленные неудобства. По всем вопросам общайтесь <a href='#'>в группу тех. поддержки.</a>
        </p>
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9L9 1L1 9" stroke="#492C2A" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  )
}

export default TechnicalWorks;