import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <main className="wrapper">
                <section id="left">
                    <div className="logo">Site Logo</div>
                </section>
                <section id="right">
                    <NavLink className="headers" to="/">Home</NavLink>
                    <NavLink className="headers" to="/services">Services</NavLink>
                    <NavLink className="headers" to="/features">Features</NavLink>
                    <NavLink className="headers" to="/team">Team</NavLink>
                    <NavLink className="headers" to="/faq">FAQ</NavLink>
                    <NavLink className="headers" to="/contact">Contact</NavLink>
                </section>
            </main>
        </nav>
    )
}

export default Navbar