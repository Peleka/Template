import React from "react";
import moduleClasses from "./SocialLinks.module.scss";
import facebook from '../../../images/facebook.svg'
import google from '../../../images/twitter.svg'
import twitter from '../../../images/google.svg'

export const SocialLinks = () => {
    const socialLinks = [facebook, google, twitter]
    const links = socialLinks.map((link, index) =>
        <a href={''} key={index}>
            <img src={link} alt=""/>
        </a>
    )
    return (
        <div className={moduleClasses["icons"]}>
            {links}
        </div>
    )
}