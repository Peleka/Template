import React from "react";
import globalClasses from "../../../App.module.scss";
import moduleClasses from "./Capabilities.module.scss";
import icon1 from "./images/icon_1.png";
import icon2 from "./images/icon_2.png";
import icon3 from "./images/icon_3.png";
import {Card} from "./Card/Card";
import {v1} from "uuid";
import {Title} from "../../Global/Title/Title";
import {Button} from "../../Global/Button/Button";

export const Capabilities = () => {
    const cardsList = [
        {
            id: v1(),
            icon: icon1,
            title: "PROJECT AND CONSTRUCTION MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
        },
        {
            id: v1(),
            icon: icon2,
            title: "STRUCTURE AUDIT AND MAINTENANCE",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
        },
        {
            id: v1(),
            icon: icon3,
            title: "FACTORY CONSTRUCTION AND MODELING",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
        },
    ]

    const cards = cardsList.map(card =>
        <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            text={card.text}
        />
    )

    return (
        <div className={globalClasses["container"]}>
            <div className={moduleClasses["abilities"]}>
                <Title
                    modifier={""}
                    title={"Our capabilities"}/>
                <div className={moduleClasses["abilities__content"]}>
                    <p className={moduleClasses["abilities__text"]}>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat.</p>
                    <Button textButton={"All services"}/>
                </div>
            </div>
            <ul className={`${moduleClasses["abilities"]} ${moduleClasses["abilities--margin"]}`}>
                {cards}
            </ul>
        </div>
    )
}
