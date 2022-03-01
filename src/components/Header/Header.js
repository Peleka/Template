import React, {useState} from "react";
import globalClasses from "../../App.module.scss"
import moduleClasses from "./Header.module.scss"
import logo from '../../images/logo_black.png'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {

    return (
        <div className={globalClasses["container"]} id={"home"}>
            <header className={moduleClasses["header"]}>
                <img src={logo} alt={"logo"}/>
                <Navigation/>
            </header>
        </div>
    )
}