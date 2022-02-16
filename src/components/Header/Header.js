import React, {useState} from "react";
import globalClasses from "../../App.module.scss"
import moduleClasses from "./Header.module.scss"
import logo from '../../images/logo_black.png'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className={globalClasses["container"]}>
            <header className={moduleClasses["header"]}>
                <img src={logo} alt={"logo"}/>
                <Navigation collapsed={collapsed} setCollapsed={setCollapsed}/>
            </header>
        </div>
    )
}