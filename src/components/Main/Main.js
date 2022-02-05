import React from "react";
import {Capabilities} from "./Capabilities/Capabilities";
import {Connect} from "./Connect/Connect";
import {SignUp} from "./SignUp/SignUp";
import {About} from "./About/About";

export const Main = () => {
    return (
        <>
            <About/>
            <Capabilities/>
            <Connect/>
            <SignUp/>
        </>
    )
}