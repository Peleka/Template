import React from "react";
import moduleClasses from "./BlockLinks.module.scss";
import facebook from '../../../images/facebook.svg'
import google from '../../../images/twitter.svg'
import twitter from '../../../images/google.svg'

export const BlockLinks = () => {
    const socialLinks = [facebook, google, twitter]
    const links = socialLinks.map(link =>
        <a className={moduleClasses["socialLinks__link"]} href={''}>
            <img src={link} alt=""/>
        </a>
    )
    return (
        <div className={moduleClasses["socialLinks"]}>
            {links}
        </div>
    )
}