import React from "react";
import classes from "./App.module.scss"
import {Banner} from "./components/Banner/Banner";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <div className={classes.wrapper}>
            <Banner/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;