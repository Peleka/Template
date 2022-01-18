import React from "react";
import s from './Footer.module.scss'
import classes from "../../App.module.css"
import {FooterBlock1} from "./Block1/Block1";
import {FooterBlock2} from "./Block2/Block2";
import {FooterBlock3} from "./Block3/Block3";
import {FooterBlock4} from "./Block4/Block4";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={classes.container}>
                <div className={s.footerInfo}>
                  <FooterBlock1/>
                  <FooterBlock2/>
                  <FooterBlock3/>
                  <FooterBlock4/>
                </div>
            </div>
            <div className={s.footerRest}>
                <div className={classes.container}>
                    <p> © 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </div>
            </div>
        </footer>
    )
}