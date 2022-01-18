import React from "react";
import s from "./FooterBlock4.module.scss";
import facebook from '../../../images/facebook.svg'
import google from '../../../images/twitter.svg'
import twitter from '../../../images/google.svg'

export const FooterBlock4 = () => {
    return (
        <div className={s.block}>
            <img src={facebook} alt=""/>
            <img src={google} alt=""/>
            <img src={twitter} alt=""/>
        </div>
    )
}