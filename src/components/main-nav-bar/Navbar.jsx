import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <main className="wrapper">
                <section id="left">
                    <NavLink to="/">
                        <img src={Logo} className="logo" />
                    </NavLink>
                </section>
                <section id="right">
                    <a href="#" className="headers">About</a>
                    <a href="#" className="headers">Services</a>
                    <a href="#" className="headers">Features</a>
                    <a href="#" className="headers">Contact</a>
                    <a href="#" className="headers">FAQ</a>
                </section>
            </main>
        </nav>
    )
}

export default Navbar