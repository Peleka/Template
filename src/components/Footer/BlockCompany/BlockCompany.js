import React from "react";
import moduleClasses from "./BlockCompany.module.scss";
import logo from "../../../images/logo.png";

export const BlockCompany = () => {
    return (
        <div className={moduleClasses["block"]}>
            <p className={moduleClasses["block__title"]}>Company</p>
            <img className={moduleClasses["block__logo"]} src={logo} alt="logo"/>
            <p className={moduleClasses["block__text"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy
                nibh euismod
                tincidunt ut
                laoreet dolore magna aliquam erat.
            </p>
        </div>
    )
}