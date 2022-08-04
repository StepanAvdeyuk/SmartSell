import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './Sidebar.module.scss'
import { getIcon } from './getIcon';
import { MenuData } from './Sidebar';

type SidebarItemProps = {
    item: MenuData,
    i: number,
    className: string,
    onClick: any,
    activePage: number,
    isHover: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = React.memo(({item, i, className, onClick, activePage, isHover}) => {

    const [isOpenUl, setIsOpenUl] = React.useState(false);

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
    }, [ulRef, className, activePage, isOpenUl, isHover])

    function wrapperClick() {
        if (activePage !== i) {
            onClick(i);
        }
        toggleIsOpenUl();
    }

    const SidebarItemBody = () => {
        return (
            <>
            <div className={styles.icon}>
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
            <Link to={item.link} className={className} onClick={wrapperClick} style={{paddingBottom: `${paddingBottom}px`}}>
                <SidebarItemBody/>
            </Link>
        )
    }
    else {
        return (
            <div className={className} onClick={wrapperClick} style={{paddingBottom: `${paddingBottom}px`}}>
                <SidebarItemBody/>
            </div>
        )
    }
})

export default SidebarItem;