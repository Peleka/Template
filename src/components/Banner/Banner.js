import React from "react";
import s from './Banner.module.scss'
import classes from "../../App.module.scss"
import logo from '../../images/logo.png'

export const Banner = () => {
    return (
        <div className={s.banner}>
            <div className={classes.container}>
                <div className={s.content}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <div>
                        <h1 className={s.title}>Partner with konstuct</h1>
                        <p className={s.text}>An award-winning construction management firm</p>
                    </div>
                    <div className={s.subtext}>Scroll down</div>
                </div>
            </div>
        </div>
    )
}