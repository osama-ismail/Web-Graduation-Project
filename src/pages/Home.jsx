import React from "react";
import Background from "../components/background/Background";
import About from '../components/about/About';
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";
import AnimatedLine from "../components/animatedLine/AnimatedLine";
import BackToTop from "../components/backToTop/BackToTop";
import FormBackground from "../components/form-background/FormBackground";
import MainNavbar from '../components/main-nav-bar/MainNavbar';
import NavList from "../components/navlist/NavList";

const Home = () => {
    const [showNavList, setShowNavList] = React.useState(false);

    const handleClickOnList = () => {
        console.log('Clicked')
        setShowNavList(!showNavList)
    }
    return (
        <div style={{ position: "relative" }}>
            <MainNavbar handleEvent={handleClickOnList} />
            {showNavList ? <NavList /> : null}
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