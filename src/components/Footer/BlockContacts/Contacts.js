import React from "react";
import moduleClasses from "./Contacts.module.scss";

export const Contacts = () => {
    return (
        <div className={moduleClasses["contacts"]}>
            <p className={moduleClasses["contacts__title"]}>Contact us</p>
            <p className={moduleClasses["contacts__address"]}>213 Baker Street Oriel City Country 7000 KNW, Country Name </p>
            <a href={"tel:+239942334022"} className={moduleClasses["contacts__phone"]}> +23 994 233 4022</a>
            <a className={moduleClasses["contacts__email"]} href="#"> info@konstruct.com</a>
        </div>
    )
}