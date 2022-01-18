import React from "react";
import classes from "../../App.module.css"
import s from "./SignUp.module.scss"

export const SignUp = () => {
    return (
        <div className={s.background}>
            <div className={classes.container}>
                <div className={s.login}>
                    <h1 className={s.text}>Newsletter Signup</h1>
                    <div className={s.field}>
                        <input className={s.email} type="email" placeholder="test@youremail.com" required/>
                        <button className={`${s.button} ${classes.button}`}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}