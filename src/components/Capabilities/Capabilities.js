import React from "react";
import classes from "../../App.module.scss"
import s from './Capabilities.module.scss'
import  icon1 from '../../images/icon_1.png'
import  icon2 from '../../images/icon_2.png'
import  icon3 from '../../images/icon_3.png'

export const Capabilities = () => {
    return (
        <div className={s.section_abilities}>
            <div className={classes.container}>
                <div className={s.capabilities}>
                    <h1 className={s.title}>Our capabilities</h1>
                    <div className={s.content}>
                        <p className={s.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat.</p>
                        <button className={classes.button}>All services</button>
                    </div>
                </div>
                <ul className={s.list}>
                    <li className={s.item}>
                        <img className={s.itemIcon} src={icon1} alt="icon"/>
                        <h1 className={s.itemTitle}>PROJECT AND CONSTRUCTION MANAGEMENT</h1>
                        <p className={s.itemText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt
                            ut laoreet dolore magna aliquam erat.</p>
                    </li>
                    <li className={s.item}>
                        <img className={s.itemIcon} src={icon2} alt="icon"/>
                        <h1 className={s.itemTitle}>STRUCTURE AUDIT AND MAINTENANCE</h1>
                        <p className={s.itemText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt
                            ut laoreet dolore magna aliquam erat.</p>
                    </li>
                    <li className={s.item}>
                        <img className={s.itemIcon} src={icon3} alt="icon"/>
                        <h1 className={s.itemTitle}>FACTORY CONSTRUCTION AND MODELING</h1>
                        <p className={s.itemText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt
                            ut laoreet dolore magna aliquam erat.</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}