import React from "react";
import "./MainNavbar.css";
import Logo from "../../../assets/images/iDrive.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

const LogoImage = styled.img`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: 3px solid #d63031;
`

const Navbar = (props) => {
    const [showScrolledNav, setShowScrolledNav] = React.useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100)
            setShowScrolledNav(true)
        else
            setShowScrolledNav(false)
    })

    return (
        <nav className={showScrolledNav ? "navbar-scroll" : "navbar"}>
            <main className="wrapper">
                <section id="left">
                    <NavLink to="/">
                        <LogoImage src={Logo} className="logo" />
                    </NavLink>
                </section>
                <section id="right">
                    <Link
                        to="AboutElement"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="headers"
                    >
                        About
                    </Link>
                    <Link
                        to="ServicesElement"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="headers"
                    >
                        Services
                    </Link>
                    <Link
                        to="FooterElement"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="headers"
                    >
                        Contact
                    </Link>
                    <Link
                        to="FormElement"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-200}
                        className="headers"
                    >
                        Start
                    </Link>
                </section>
                <button id="navbar-list" onClick={props.handleEvent}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </main>
        </nav>
    )
}

export default Navbar