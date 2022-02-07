import React from "react";
import moduleClasses from './Navigation.module.scss'
import {v1} from "uuid";

export const Navigation = ({collapsed, setCollapsed}) => {
    const navLinks = [
        {id: v1(), title: "HOME", href: "#HOME"},
        {id: v1(), title: "ABOUT", href: "#ABOUT"},
        {id: v1(), title: "SERVICES", href: "#SERVICES"},
        {id: v1(), title: "WORK", href: "#WORK"},
        {id: v1(), title: "CONTACTS", href: "#CONTACTS"},
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