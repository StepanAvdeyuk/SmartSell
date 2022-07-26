import { ReactComponent as Icon1 } from '../../assets/svg/sidebar-1.svg';
import { ReactComponent as Icon2 } from '../../assets/svg/sidebar-2.svg';
import { ReactComponent as Icon3 } from '../../assets/svg/sidebar-3.svg';
import { ReactComponent as Icon4 } from '../../assets/svg/sidebar-4.svg';
import { ReactComponent as Icon5 } from '../../assets/svg/sidebar-5.svg';
import { ReactComponent as Icon6 } from '../../assets/svg/sidebar-6.svg';
import { ReactComponent as Icon7 } from '../../assets/svg/sidebar-7.svg';
import { ReactComponent as Icon8 } from '../../assets/svg/sidebar-8.svg';

import styles from './Sidebar.module.scss';

export const getIcon = (i: number) => {
    switch (i) {
        case 1:
            return <Icon1 stroke="black" className={styles.svgStroke}/>
        case 2:
            return <Icon2 stroke="black" className={styles.svgStroke}/>
        case 3:
            return <Icon3 fill="black" className={styles.svgStroke + ' ' + styles.svgFill + ' ' + styles.svg3}/>
        case 4:
            return <Icon4 stroke="black" className={styles.svgStroke}/>
        case 5:
            return <Icon5 fill="black" className={styles.svgFill}/>
        case 6:
            return <Icon6 stroke="black" className={styles.svgStroke}/>
        case 7:
            return <Icon7 stroke="black" className={styles.svgStroke}/>
        case 8:
            return <Icon8 fill="black" className={styles.svgFill}/>
        default:
            return <svg></svg>;
    }
};