import React from "react";
import MainNavbar from "../components/main-nav-bar/Navbar";
import Background from "../components/background/Background";
import About from '../components/about/About';
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";

const Home = () => {
    return (
        <React.Fragment>
            <MainNavbar />
            <Background />
            <About />
            <Services />
            <Footer />
        </React.Fragment>
    )
}

export default Home