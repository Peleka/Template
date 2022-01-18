import React from "react";
import classes from "../../App.module.css"
import s from './Header.module.scss'
import logo from '../../images/logo_black.png'

export const Header = () => {
    return (
        <div className={classes.container}>
            <div className={s.header}>
                <img src={logo} alt="logo"/>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="" className={s.link}>Home</a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>About</a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>Services</a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>Work</a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}