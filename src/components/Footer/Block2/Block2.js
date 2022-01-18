import React from "react";
import s from "./FooterBlock2.module.scss";


export const FooterBlock2 = () => {
    return (
        <div className={s.blockLinks}>
            <p className={s.title}>Links</p>
            <div className={s.links}>
                <ul className={s.linksUl}>
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
                        <a href={""}>Contacts Us</a>
                    </li>
                </ul>
                <ul className={s.linksUl}>

                    <li className={s.link}>
                        <a href={""}>FAQ</a>
                    </li>
                    <li className={s.link}>
                        <a href={""}>Terms</a>
                    </li>
                    <li className={s.link}>
                        <a href={""}>Careers</a>
                    </li>
                </ul>
                <ul className={s.linksUl}>
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
        </div>
    )
}