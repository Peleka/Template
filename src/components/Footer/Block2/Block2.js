import React from "react";
import s from "./FooterBlock2.module.scss";


export const FooterBlock2 = () => {
    return (
        <div className={s.blockLinks}>
            <p className={s.title}>Links</p>
            <ul className={s.links}>
                <li className={s.link}>
                    <a href={""}> Home</a>
                </li>
                <li className={s.link}>
                    <a href={""}>About</a>
                </li>
                <li className={s.link}>
                    <a href={""}>Services</a>
                </li>
                <li className={s.link}>
                    <a href={""}>Projects</a>
                </li>
                <li className={s.link}>
                    <a  className={s.linkContact} href={""}>Contacts Us</a>
                </li>
                <li className={s.link}>
                    <a href={""}>FAQ</a>
                </li>
                <li className={s.link}>
                    <a href={""}>Terms</a>
                </li>
                <li className={` ${s.linkCareers} ${s.link}`}>
                    <a href={""}>Careers</a>
                </li>
                <li className={s.link}>
                    <a href={""}>Blog</a>
                </li>
                <li className={s.link}>
                    <a href={""}>Partners</a>
                </li>
                <li className={s.link}>
                    <a href={""}>News</a>
                </li>
            </ul>
        </div>
    )
}