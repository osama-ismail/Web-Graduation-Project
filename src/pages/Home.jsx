import React from "react";
import Background from "../components/Landing Page/background/Background";
import About from '../components/Landing Page/about/About';
import Footer from "../components/Landing Page/footer/Footer";
import Services from "../components/Landing Page/services/Services";
import AnimatedLine from "../components/Landing Page/animatedLine/AnimatedLine";
import BackToTop from "../components/Global Components/backToTop/BackToTop";
import FormBackground from "../components/Landing Page/form-background/FormBackground";
import MainNavbar from '../components/Landing Page/main-nav-bar/MainNavbar';
import NavList from "../components/Landing Page/navlist/NavList";

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