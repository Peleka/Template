import React from "react";
import moduleClasses from "./Connect.module.scss";
import globalClasses from "../../../App.module.scss";
import {Button} from "../../Global/Button/Button";


export const Connect = () => {
    return (
        <div className={moduleClasses["connect"]} id={"work"}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["connect__text"]}>Want to build something amazing?</h1>
                <Button textButton={"Get in touch"}/>
            </div>
        </div>
    )
}