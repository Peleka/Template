import React from "react";
import moduleClasses from './Banner.module.scss'
import globalClasses from "../../App.module.scss"
import logo from '../../images/logo.png'

export const Banner = (props) => {

    const onScroll = () => {
        props.onScrollDown()
    }

    return (
        <div className={moduleClasses["banner"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["banner__content"]}>
                    <img className={moduleClasses["banner__logo"]} src={logo} alt="logo"/>
                    <div>
                        <h1 className={moduleClasses["banner__title"]}>Partner with konstuct</h1>
                        <p className={moduleClasses["banner__text"]}>An award-winning construction management firm</p>
                    </div>
                    <div className={moduleClasses["banner__scroll"]}>
                        <a href={''} onClick={onScroll}>Scroll down</a>
                    </div>
                </div>
            </div>
        </div>
    )
}