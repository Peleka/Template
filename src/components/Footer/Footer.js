import React from "react";
import moduleClasses from './Footer.module.scss'
import globalClasses from "../../App.module.scss"
import {SocialLinks} from "./BlockLinks/SocialLinks";
import {Menu} from "./BlockMenu/Menu";
import {Contacts} from "./BlockContacts/Contacts";
import {Info} from "./BlockCompany/Info";

export const Footer = () => {
    return (
        <footer className={moduleClasses["footer"]} id={"footer"}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["footer__info"]}>
                    <Info/>
                    <Menu/>
                    <Contacts/>
                    <SocialLinks/>
                </div>
            </div>
            <div className={`${moduleClasses["footer"]} ${moduleClasses["footer--black"]}`}>
                <div className={globalClasses["container"]}>
                    <p className={moduleClasses["footer__text"]}> © 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </div>
            </div>
        </footer>
    )
}