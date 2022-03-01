import React, {useState} from "react";
import moduleClasses from './Navigation.module.scss';
import {faBars, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {v1} from "uuid";


export const Navigation = () => {
    const [menuActive, setMenuActive] = useState(false)

    const navLinks = [
        {id: v1(), title: "HOME", href: "#home"},
        {id: v1(), title: "ABOUT", href: "#about"},
        {id: v1(), title: "SERVICES", href: "#services"},
        {id: v1(), title: "WORK", href: "#work"},
        {id: v1(), title: "CONTACTS", href: "#contacts"},
    ]

    const navItems = navLinks.map(link =>
        <li key={link.id}>
            <a onClick={() => setMenuActive(!menuActive)}
               className={moduleClasses["navigation__link"]} href={link.href}>{link.title}</a>
        </li>
    )

    return (
        <nav className={moduleClasses["navigation"]}>
            <div className={moduleClasses["navigation__menuBurger"]} onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <ul className={`${moduleClasses["navigation__list"]}`}>
                {navItems}
            </ul>
            {menuActive &&
            <div className={moduleClasses["navigation__collapsed"]}>
                <div className={moduleClasses["navigation__close"]} onClick={() => setMenuActive(!menuActive)}>
                    <FontAwesomeIcon icon={faWindowClose}/>
                </div>
                <ul>
                    {navItems}
                </ul>
            </div>
            }
        </nav>
    )
}