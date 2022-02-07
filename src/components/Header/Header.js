import React, {useState} from "react";
import globalClasses from "../../App.module.scss"
import moduleClasses from "./Header.module.scss"
import logo from '../../images/logo_black.png'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <header className={moduleClasses["header"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["header__wrapper"]}>
                    <img src={logo} alt={"logo"}/>
                    <Navigation collapsed={collapsed} setCollapsed={setCollapsed}/>
                </div>
            </div>
        </header>
    )
}