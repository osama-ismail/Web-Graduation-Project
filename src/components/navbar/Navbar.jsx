import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <main className="wrapper">
                <section id="left">
                    <div className="logo">Site Logo</div>
                </section>
                <section id="right">
                    <Link className="headers" to="/">Home</Link>
                    <Link className="headers" to="/services">Services</Link>
                    <Link className="headers" to="/features">Features</Link>
                    <Link className="headers" to="/team">Team</Link>
                    <Link className="headers" to="/faq">FAQ</Link>
                    <Link className="headers" to="/contact">Contact</Link>
                </section>
            </main>
        </nav>
    )
}

export default Navbar