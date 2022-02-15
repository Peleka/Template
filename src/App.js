import React from "react";
import {Banner} from "./components/Banner/Banner";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <>
            <Banner/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;