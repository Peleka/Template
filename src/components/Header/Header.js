import React, {useState} from "react";
import classes from "../../App.module.scss"
import sc from './Header.module.scss'
import logo from '../../images/logo_black.png'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className={classes.container}>
            <div className={`${sc.header} ${!collapsed && sc.menu_collapsed}`}>
                <img src={logo} alt="logo"/>
                <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
        </div>
    )
}