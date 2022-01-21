import React from "react";
import s from "./FooterBlock4.module.scss";
import facebook from '../../../images/facebook.svg'
import google from '../../../images/twitter.svg'
import twitter from '../../../images/google.svg'

export const FooterBlock4 = () => {
    return (
        <div className={s.block}>
            <a className={s.link} href={''}>
                <img src={facebook} alt=""/>
            </a>
            <a className={s.link} href={''}>
                <img src={google} alt=""/>
            </a>
            <a className={s.link} href={''}>
                <img src={twitter} alt=""/>
            </a>
        </div>
    )
}