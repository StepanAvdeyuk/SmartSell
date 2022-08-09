import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss'
import { getIcon } from './getIcon';
import { MenuData } from './Sidebar';
import useHover from '../../hooks/useHover';

type SidebarItemProps = {
    item: MenuData,
    i: number,
    onClick: any,
    activePage: number,
    isHover: boolean,
    setIsHover: any
}

const SidebarItem: React.FC<SidebarItemProps> = ({item, i, onClick, activePage, isHover, setIsHover}) => {

    const [isOpenUl, setIsOpenUl] = React.useState(false);
    const iconRef = React.useRef(null);

    const on = () => setIsHover(true);


    function toggleIsOpenUl() {
        setIsOpenUl(!isOpenUl)
    }

    const ulRef = React.useRef<HTMLUListElement>(null);

    const [paddingBottom, setPaddingBottom] = React.useState(0);

    React.useEffect(() => {
        if (activePage !== i) {
            setPaddingBottom(0);
            setIsOpenUl(false);
        }
    }, [activePage])

    React.useEffect(() => {
        if (ulRef.current?.scrollHeight) {
            setPaddingBottom(+ulRef.current?.scrollHeight)
        } else {
            setPaddingBottom(0);
        }
        if (!isOpenUl || !isHover)  {
            setPaddingBottom(0); 
        }
    }, [ulRef, activePage, isOpenUl, isHover])

    function wrapperClick() {
        if (activePage !== i) {
            onClick(i);
        }
        toggleIsOpenUl();
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
            <NavLink to={item.link} className={({isActive}) => isActive ? styles.item + ' ' + styles.active : styles.item} onClick={wrapperClick} style={{paddingBottom: `${paddingBottom}px`}}>
                <SidebarItemBody/>
            </NavLink>
        )
    } else {
        return null;
    }
}

export default SidebarItem;