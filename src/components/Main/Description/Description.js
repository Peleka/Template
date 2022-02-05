import React from "react";
import s from './Description.module.scss'
import globalClasses from "../../../App.module.scss"
import {Title} from "../../../common/components/Title/Title";


export const Description = () => {
    return (
        <div className={globalClasses["container"]}>
            <div className={s.description}>
                <Title title={"Our story"}/>
                <div className={s.innerBlock}>
                    <div className={s.textBlock}>
                        <h2 className={s.textBlock_title}>Founded in 2011 by John Mathew Smith, Konstruct has become the
                            number
                            one
                            construction
                            management firm</h2>
                        <p className={s.text}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat.
                        </p>
                    </div>
                    <div className={s.imagesBlock}>
                        <div className={s.innerImage}>
                            <div className={`${s.description} ${s.description1}`}>
                                <span className={s.text}>We plan   </span>
                            </div>
                            <div className={`${s.description} ${s.description2}`}>
                                <span className={s.text}>We manage</span>
                            </div>
                            <div className={`${s.description} ${s.description3}`}>
                                <span className={s.text}>We build</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}