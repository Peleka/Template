import React from "react";
import globalClasses from "../../../App.module.scss";
import moduleClasses from "./Registration.module.scss";
import {Button} from "../../Global/Button/Button";

export const Registration = () => {
    return (
        <div className={moduleClasses["registration"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["registration__form"]}>
                    <h1 className={moduleClasses["registration__text"]}>Newsletter Signup</h1>
                    <div className={moduleClasses["registration__field"]}>
                        <input className={moduleClasses["registration__email"]}
                               type="email"
                               placeholder="test@youremail.com" required/>
                        <Button textButton={"SignUp"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}