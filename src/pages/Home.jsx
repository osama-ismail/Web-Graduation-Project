import React from "react";
import Background from "../components/background/Background";
import About from '../components/about/About';
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";
import AnimatedLine from "../components/animatedLine/AnimatedLine";

const Home = () => {
    return (
        <React.Fragment>
            <AnimatedLine />
            <Background />
            <About />
            <Services />
            <Footer />
        </React.Fragment>
    )
}

export default Home