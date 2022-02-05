import React from "react";
import globalClasses from "../../../App.module.scss"

export const Title = ({title}) => {
    return (
        <>
            <h1 className={`${globalClasses["title"]} ${globalClasses["title--stripe"]}`}>{title}</h1>
        </>
    )
}