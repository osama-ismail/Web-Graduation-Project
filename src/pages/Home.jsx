import React from "react";
import MainNavbar from "../components/main-nav-bar/Navbar";
import Background from "../components/background/Background";
import About from '../components/about/About';
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <MainNavbar />
            <Background />
            <About />
            <Footer />
        </React.Fragment>
    )
}

export default Home