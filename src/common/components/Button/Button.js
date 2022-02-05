import React from "react";
import globalClasses from "../../../App.module.scss"

export const Button = ({textButton}) => {
    return (
        <>
            <button className={globalClasses["button"]}>
                {textButton}
            </button>
        </>
    )
}