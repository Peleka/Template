import React from "react";
import moduleClasses from "./About.module.scss";
import globalClasses from "../../../App.module.scss";
import picture1 from "../../../images/description1.jpg";
import picture2 from "../../../images/description2.jpg";
import picture3 from "../../../images/description3.jpg";
import {Picture} from "./Picture/Picture";
import {Title} from "../../Global/Title/Title";

export const About = () => {
    return (
        <div className={globalClasses["container"]}>
            <Title
                modifier={"title--stripe"}
                title={"Our story"}
            />
            <div className={moduleClasses["about"]}>
                <div className={moduleClasses["about__description"]}>
                    <h2 className={moduleClasses["about__title"]}>Founded in 2011 by John Mathew Smith, Konstruct
                        has become the number one construction management firm</h2>
                    <p className={moduleClasses["about__text"]}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat.
                    </p>
                </div>
                <div className={moduleClasses["about__images"]}>
                    <Picture text={"Our plan"} picture={picture1}/>
                    <Picture text={"We manage"} picture={picture2}/>
                    <Picture text={"We build"} picture={picture3}/>
                </div>
            </div>
        </div>
    )
}
