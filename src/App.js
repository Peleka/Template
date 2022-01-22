import React, {useEffect, useRef} from "react";
import classes from "./App.module.scss"
import {Banner} from "./components/Banner/Banner";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    const scrollRef = useRef(null)

    const onScrollDown = () => {
        debugger
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={classes.wrapper}>
            <Banner
                onScrollDown={onScrollDown}
            />
            <Header/>
            <Main/>
            <div ref={scrollRef}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;