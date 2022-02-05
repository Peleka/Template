import React from "react";
import globalClasses from "../../../App.module.scss"

export const Title = ({title, modifier}) => {
    return (
        <>
            <h1 className={`${globalClasses["title"]} ${globalClasses[modifier]}`}>{title}</h1>
        </>
    )
}