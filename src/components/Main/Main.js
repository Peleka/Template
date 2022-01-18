import React from "react";
import {Description} from "../Description/Description";
import {Capabilities} from "../Capabilities/Capabilities";
import {Connect} from "../Connect/Connect";
import {SignUp} from "../SignUp/SignUp";

export const Main = () => {
    return (
        <div>
            <Description/>
            <Capabilities/>
            <Connect/>
            <SignUp/>
        </div>
    )
}