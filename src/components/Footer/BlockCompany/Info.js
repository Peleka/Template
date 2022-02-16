import React from "react";
import moduleClasses from "./Info.module.scss";
import logo from "../../../images/logo.png";

export const Info = () => {
    return (
        <div className={moduleClasses["info"]}>
            <p className={moduleClasses["info__title"]}>Company</p>
            <img className={moduleClasses["info__logo"]} src={logo} alt="logo"/>
            <p className={moduleClasses["info__text"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
        </div>
    )
}