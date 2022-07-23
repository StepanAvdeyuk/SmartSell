import React from 'react'

import styles from './Sidebar.module.scss'
import { getIcon } from './getIcon';
import { MenuData } from './Sidebar';

type SidebarItemProps = {
    item: MenuData,
    i: number,
    className: string,
    onClick: React.MouseEventHandler,
    activePage: number,
    isHover: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({item, i, className, onClick, activePage, isHover}) => {

    const ulRef = React.useRef<HTMLUListElement>(null);

    const [paddingBottom, setPaddingBottom] = React.useState(0);

    React.useEffect(() => {
        if (ulRef.current?.scrollHeight) {
            setPaddingBottom(+ulRef.current?.scrollHeight)
        } else {
            setPaddingBottom(0);
        }
        if (activePage !== i || !isHover) {
            setPaddingBottom(0);
        }
    }, [ulRef, className, activePage, isHover])

    return (
    <div className={className} onClick={onClick} style={{paddingBottom: `${paddingBottom}px`}}>
        <div className={styles.icon}>
            {getIcon(i + 1)}
        </div>
        <div className={styles.name}>
            {item.name}
            {(item.list.length > 0) && <ul ref={ulRef} className={styles.ul}>
                {item.list.map((element, i) => {
                    return <li key={i}>{element}</li>;
                })}
            </ul>}
        </div>
    </div>
    )
}

export default SidebarItem;