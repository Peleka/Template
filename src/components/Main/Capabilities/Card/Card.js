import React from "react";
import moduleClasses from "./Card.module.scss"

export const Card = ({title, text, icon}) => {
    return (
        <li className={moduleClasses["card"]}>
            <img className={moduleClasses["card__icon"]} src={icon} alt="icon"/>
            <h1 className={moduleClasses["card__title"]}>{title}</h1>
            <p className={moduleClasses["card__text"]}>{text}</p>
        </li>
    )
}