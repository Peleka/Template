import React from "react";
import {Capabilities} from "./Capabilities/Capabilities";
import {Connect} from "./Connect/Connect";
import {Registration} from "./Registration/Registration";
import {About} from "./About/About";

export const Main = () => {
    return (
        <>
            <About/>
            <Capabilities/>
            <Connect/>
            <Registration/>
        </>
    )
}