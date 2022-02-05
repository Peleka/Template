import React from "react";
import globalClasses from "../../../App.module.scss"
import moduleClasses from './Capabilities.module.scss'
import icon1 from '../../../images/icon_1.png'
import icon2 from '../../../images/icon_2.png'
import icon3 from '../../../images/icon_3.png'
import {Card} from "./Card/Card";
import {Title} from "../../../common/components/Title/Title";
import {Button} from "../../../common/components/Button/Button";

export const Capabilities = () => {

    return (
        <div className={moduleClasses["sectionAbilities"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["sectionAbilities__flex"]}>
                    <Title
                        modifier={""}
                        title={"Our capabilities"}/>
                    <div className={moduleClasses["sectionAbilities__content"]}>
                        <p className={moduleClasses["sectionAbilities__text"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat.</p>
                        <Button textButton={"All services"}/>
                    </div>
                </div>
                <ul className={moduleClasses["sectionAbilities__list"]}>
                    <Card
                        icon={icon1}
                        title={"PROJECT AND CONSTRUCTION MANAGEMENT"}
                        text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."}
                    />
                   <Card
                       icon={icon2}
                       title={"STRUCTURE AUDIT AND MAINTENANCE"}
                       text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."}
                   />
                   <Card
                       icon={icon3}
                       title={"FACTORY CONSTRUCTION AND MODELING"}
                       text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."}
                   />
                </ul>
            </div>
        </div>
    )
}
