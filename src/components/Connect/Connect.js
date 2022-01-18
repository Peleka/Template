import React from "react";
import s from './Connect.module.scss'
import classes from "../../App.module.css"


export const Connect = () => {
    return (
        <div className={s.connectBlock}>
            <div className={classes.container}>
                <div className={s.innerBlock}>
                    <h1 className={s.text}>Want to build something amazing?</h1>
                    <button className={classes.button}>Get in touch</button>
                </div>
            </div>
        </div>
    )
}