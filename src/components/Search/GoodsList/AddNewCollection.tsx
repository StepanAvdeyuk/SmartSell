import React from 'react'

import styles from './AddNewCollection.module.scss'

type AddNewCollectionProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const AddNewCollection: React.FC<AddNewCollectionProps> = ({isOpen, setIsOpen}) => {
  return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.active : styles.wrapper} onClick={e => e.stopPropagation()}>
        <h3 className={styles.title}>Добавить новую коллекцию</h3>
        <div className={styles.input}>
            <label>Имя: <input type="text"/></label>
        </div>
        <div className={styles.buttons}>
            <button className={styles.fill} onClick={() => setIsOpen(false)}>Сохранить</button>
            <button className={styles.outline} onClick={() => setIsOpen(false)}>Отмена</button>
        </div>
    </div>
  )
}

export default AddNewCollection