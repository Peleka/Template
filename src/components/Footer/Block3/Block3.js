import React from "react";
import s from "./FooterBlock3.module.scss";

export const FooterBlock3 = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>Contact us</p>
            <p className={s.address}>213 Baker Street Oriel City Country 7000 KNW, Country Name </p>
            <a href={"tel:+239942334022"} className={s.phone}> +23 994 233 4022</a>
            <a className={s.email} href="#"> info@konstruct.com</a>
        </div>
    )
}