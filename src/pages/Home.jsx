import React from "react";
import Background from "../components/background/Background";
import About from '../components/about/About';
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";
import AnimatedLine from "../components/animatedLine/AnimatedLine";
import BackToTop from "../components/backToTop/BackToTop";
import FormBackground from "../components/form-background/FormBackground";

const Home = () => {
    return (
        <div style={{ position: "relative" }}>
            <BackToTop />
            <AnimatedLine />
            <Background />
            <About />
            <Services />
            <FormBackground />
            <Footer />
        </div>
    )
}

export default Home