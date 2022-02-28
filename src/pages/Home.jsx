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
import styled from "styled-components";
import MapForm from "../components/Landing Page/mapForm/MapForm";

const Container = styled.div`
    position: relative;
    background-color: #0f0f0f;
`

const Home = () => {
    const [showNavList, setShowNavList] = React.useState(false);
    const [showMapForm, setShowMapForm] = React.useState(false);

    const appearMapForm = () => setShowMapForm(true);
    const closeMapForm = () => setShowMapForm(false);

    const handleClickOnList = () => setShowNavList(!showNavList);

    return (
        <Container>
            <MainNavbar handleEvent={handleClickOnList} />
            {showNavList ? <NavList /> : null}
            <BackToTop />
            <AnimatedLine />
            <Background />
            <About />
            <Services />
            <FormBackground appearMapForm={appearMapForm} />
            <Footer />
            {showMapForm ? <MapForm closeMapForm={closeMapForm} /> : null}
        </Container>
    )
}

export default Home