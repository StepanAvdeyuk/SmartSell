import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss'
import { getIcon } from './getIcon';
import { MenuData } from './Sidebar';
import useHover from '../../hooks/useHover';
import { CSSTransition } from 'react-transition-group';

type SidebarItemProps = {
    item: MenuData,
    i: number,
    onClick: any,
    activePage: number,
    isHover: boolean,
    setIsHover: any
}

const SidebarItem: React.FC<SidebarItemProps> = React.memo(({item, i, onClick, activePage, isHover, setIsHover}) => {

    const [isOpenUl, setIsOpenUl] = React.useState(false);
    const iconRef = React.useRef(null);

    const on = () => {
        if(!isHover) {
            setIsHover(true);
        }
    };

    const ulRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
        if (activePage !== i) {
            setIsOpenUl(false);
        }
    }, [activePage])

    function wrapperClick() {
        if (activePage !== i) {
            onClick(i);
        }
        setIsOpenUl(!isOpenUl);
    }

    const SidebarItemBody = () => {
        return (
            <>
            <div className={styles.icon} ref={iconRef} onMouseEnter={on} onMouseMove={on}>
                {getIcon(i + 1)}
            </div>
                <div className={isOpenUl ? styles.name + ' ' + styles.active : styles.name}>
                    <p>{item.name}</p>
                        {(item.list.length > 0) && <ul ref={ulRef} className={styles.ul} onClick={(e) => e.stopPropagation()}>
                            {item.list.map((element, i) => {
                                if (item.listLink) {
                                    return <Link to={item.listLink[i]}><li key={i}>{element}</li></Link>
                                } else {
                                    return <li key={i}>{element}</li>;
                                }
                            })}
                        </ul>}
                </div>
            </>
        )
    }

    if (item.link) {
        return (
            <NavLink to={item.link} className={({isActive}) => isActive ? styles.item + ' ' + styles.active : styles.item} onClick={wrapperClick}>
                <SidebarItemBody/>
            </NavLink>
        )
    } else {
        return null;
    }
})

export default SidebarItem;