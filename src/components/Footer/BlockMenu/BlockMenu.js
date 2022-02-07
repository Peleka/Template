import React from "react";
import moduleClasses from "./BlockMenu.module.scss";


export const BlockMenu = () => {
    const navLinks1 = ["Home", "About", "Services", "Projects", "Contacts Us"]
    const navLinks2 = ["FAQ", "Terms", "Careers"]
    const navLinks3 = ["Blog", "Partners", "News"]


    const listLinks1 = navLinks1.map((link, index) =>
        <li className={moduleClasses["menu__link"]} key={index}>
            <a href={""}>{link}</a>
        </li>
    )
    const listLinks2 = navLinks2.map((link, index) =>
        <li className={moduleClasses["menu__link"]} key={index}>
            <a href={""}>{link}</a>
        </li>
    )
    const listLinks3 = navLinks3.map((link, index) =>
        <li className={moduleClasses["menu__link"]} key={index}>
            <a href={""}>{link}</a>
        </li>
    )

    return (
        <div className={moduleClasses["menu"]}>
            <p className={moduleClasses["menu__title"]}>Links</p>
            <div className={moduleClasses["menu__links"]}>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks1}
                </ul>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks2}
                </ul>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks3}
                </ul>
            </div>
        </div>
    )
}