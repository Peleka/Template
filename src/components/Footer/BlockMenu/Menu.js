import React from "react";
import moduleClasses from "./Menu.module.scss";
import {v1} from "uuid";


export const Menu = () => {
    const navLinks1 = [
        {id: v1(), title: "HOME", href: "#HOME"},
        {id: v1(), title: "ABOUT", href: "#ABOUT"},
        {id: v1(), title: "SERVICES", href: "#SERVICES"},
        {id: v1(), title: "WORK", href: "#WORK"},
        {id: v1(), title: "CONTACTS", href: "#CONTACTS"},
    ]
    const navLinks2 = [
        {id: v1(), title: "FAQ", href: "#FAQ"},
        {id: v1(), title: "Terms", href: "#Terms"},
        {id: v1(), title: "Careers", href: "#Careers"},
    ]
    const navLinks3 = [
        {id: v1(), title: "Blog", href: "#Blog"},
        {id: v1(), title: "Partners", href: "#Partners"},
        {id: v1(), title: "News", href: "#News"},
    ]

    const listLinks = (links) => {
        return links.map((link) =>
            <li key={link.id}>
                <a href={link.href}>{link.title}</a>
            </li>
        )
    }

    return (
        <div className={moduleClasses["menu"]}>
            <p className={moduleClasses["menu__title"]}>Links</p>
            <div className={moduleClasses["menu__links"]}>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks(navLinks1)}
                </ul>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks(navLinks2)}
                </ul>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks(navLinks3)}
                </ul>
            </div>
        </div>
    )
}