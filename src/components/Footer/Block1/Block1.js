import React from "react";
import s from "./FooterBlock1.module.scss";
import logo from "../../../images/projeco-logo.png";

export const FooterBlock1 = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>Company</p>
            <img className={s.logo} src={logo} alt="logo"/>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy
                nibh euismod
                tincidunt ut
                laoreet dolore magna aliquam erat.
            </p>
        </div>
    )
}