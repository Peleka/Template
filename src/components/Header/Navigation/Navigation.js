import React from "react";
import s from './Navigation.module.scss'
import {v1} from "uuid";
import sc from '../Header.module.scss'


export const Navigation = ({collapsed, setCollapsed}) => {
    const navLinks = [
        {id: v1(), title: "HOME", href: "#HOME"},
        {id: v1(), title: "ABOUT", href: "#ABOUT"},
        {id: v1(), title: "SERVICES", href: "#SERVICES"},
        {id: v1(), title: "WORK", href: "#WORK"},
        {id: v1(), title: "CONTACTS", href: "#CONTACTS"},
    ]
    const navItems = navLinks.map(link =>
        <li key={link.id} className={s.item}>
            <a className={s.link} href={link.href}>{link.title}</a>
        </li>
    )

    const collapsedMenuHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <nav className={sc.menu}>
            <ul className={sc.list}>
                {navItems}
            </ul>
            <div className={s.menuBurger} onClick={collapsedMenuHandler}>
                <span></span>
            </div>
        </nav>
    )
}