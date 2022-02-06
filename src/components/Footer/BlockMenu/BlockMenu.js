import React from "react";
import moduleClasses from "./BlockMenu.module.scss";


export const BlockMenu = () => {
    const navLinks = ["Home", "About", "Services", "Projects", "Contacts Us",
        "FAQ", "Terms", "Careers", "Blog", "Partners", "News"]

    const listLinks = navLinks.map((link, index) =>
        <li className={moduleClasses["menu__link"]} key={index}>
            <a href={""}>{link}</a>
        </li>
    )

    return (
        <div className={moduleClasses["menu"]}>
            <p className={moduleClasses["menu__title"]}>Links</p>
            <div className={moduleClasses["menu__links"]}>
                <ul className={moduleClasses["menu__list"]}>
                    {listLinks}
                </ul>
            </div>
        </div>
    )
}