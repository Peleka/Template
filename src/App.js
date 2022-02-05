import React, {useRef} from "react";
import {Banner} from "./components/Banner/Banner";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    const scrollRef = useRef(null)

    const onScrollDown = () => {
        scrollRef.current.scrollIntoView({behavior: 'smooth', block: "end", inline: 'nearest'})
    }

    return (
        <div>
            <Banner onScrollDown={onScrollDown} />
            <Header/>
            <Main/>
            <div ref={scrollRef}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;