import React from "react";
import s from './Banner.module.scss'
import '../../App.module.css'
import logo from '../../images/logo.png'

export const Banner = () => {
    return (
        <div className={s.banner}>
            <div className={"container"}>
                <img className={s.logo} src={logo} alt="logo"/>
                <div className={s.content}>
                    <h1 className={s.title}>
                        Partner with konstuct
                    </h1>
                    <div className={s.text}>
                        An award-winning construction management firm
                    </div>
                    <div className={s.subtext}>Scroll down</div>
                </div>
            </div>

        </div>
    )

}