import React from "react";
import s from "./FooterBlock3.module.scss";

export const FooterBlock3 = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>Contact us</p>
            <p className={s.address}>213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name </p>
            <p className={s.phone}> +23 994 233 4022</p>
            <a className={s.email} href="#"> info@konstruct.com</a>
        </div>
    )
}