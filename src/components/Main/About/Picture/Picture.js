import React from "react";
import moduleClasses from "./Picture.module.scss"

export const Picture = ({text, picture}) => {
    return (
        <div className={moduleClasses["picture"]}>
            <img className={moduleClasses["picture__image"]} src={picture} alt={"image"}/>
            <h2 className={moduleClasses["picture__text"]}>{text}</h2>
        </div>
    )
}