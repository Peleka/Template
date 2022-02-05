import React from "react";
import moduleClasses from "./Connect.module.scss"
import globalClasses from "../../App.module.scss"

export const Connect = () => {
    return (
        <div className={moduleClasses["connect"]}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["connect__text"]}>Want to build something amazing?</h1>
                <button className={globalClasses["button"]}>Get in touch</button>
            </div>
        </div>
    )
}