import React from "react";
import moduleClasses from './Footer.module.scss'
import globalClasses from "../../App.module.scss"
import {BlockLinks} from "./BlockLinks/BlockLinks";
import {BlockCompany} from "./BlockCompany/BlockCompany";
import {BlockMenu} from "./BlockMenu/BlockMenu";
import {BlockContacts} from "./BlockContacts/BlockContacts";

export const Footer = ({ref1}) => {
    return (
        <footer className={moduleClasses["footer"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["footer__info"]}>
                  <BlockCompany/>
                  <BlockMenu/>
                  <BlockContacts/>
                  <BlockLinks/>
                </div>
            </div>
            <div className={moduleClasses["footer__rest"]} ref={ref1}>
                <div className={globalClasses["container"]} >
                    <p> © 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </div>
            </div>
        </footer>
    )
}