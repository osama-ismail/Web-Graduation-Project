import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showScrolledNav, setShowScrolledNav] = React.useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50)
            setShowScrolledNav(true)
        else
            setShowScrolledNav(false)
    })

    return (
        <nav className={showScrolledNav ? "navbar-scroll" : "navbar"}>
            <main className="wrapper">
                <section id="left">
                    <NavLink to="/">
                        <img src={Logo} className="logo" />
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
                    <a href="#" className="headers">Contact</a>
                    <a href="#" className="headers">FAQ</a>
                </section>
            </main>
        </nav>
    )
}

export default Navbar