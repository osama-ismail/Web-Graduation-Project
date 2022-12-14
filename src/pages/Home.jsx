import React, { useEffect } from "react";
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

const Container = styled.div`
    position: relative;
    background-color: #0f0f0f;
`

const Home = () => {
    const [showNavList, setShowNavList] = React.useState(false);

    const handleClickOnList = () => setShowNavList(!showNavList);

    useEffect(() => {
        let id = localStorage.getItem('loggedIn')
        if (id > 0) {
            window.location.replace(`http://localhost:3000/user-profile/edit-profile/${id}`)
        }
    }, [])

    return (
        <Container>
            <MainNavbar handleEvent={handleClickOnList} />
            {showNavList ? <NavList /> : null}
            <BackToTop />
            <AnimatedLine />
            <Background />
            <About />
            <Services />
            <FormBackground />
            <Footer />
        </Container>
    )
}

export default Home