import React from "react";
import moduleClasses from './Navigation.module.scss'
import {v1} from "uuid";

export const Navigation = ({collapsed, setCollapsed}) => {
    const navLinks = [
        {id: v1(), title: "HOME", href: "#home"},
        {id: v1(), title: "ABOUT", href: "#about"},
        {id: v1(), title: "SERVICES", href: "#services"},
        {id: v1(), title: "WORK", href: "#work"},
        {id: v1(), title: "CONTACTS", href: "#contacts"},
    ]

    const navItems = navLinks.map(link =>
        <li key={link.id} className={moduleClasses["navigation__item"]}>
            <a className={moduleClasses["navigation__link"]} href={link.href}>{link.title}</a>
        </li>
    )

    const collapsedMenuHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <nav className={moduleClasses["navigation"]}>
            <ul className={`${moduleClasses["navigation__list"]}  ${!collapsed && moduleClasses["navigation__collapsed"]}`}>
                {navItems}
            </ul>
            <div className={moduleClasses["navigation__menuBurger"]} onClick={collapsedMenuHandler}>
                <span></span>
            </div>
        </nav>
    )
}