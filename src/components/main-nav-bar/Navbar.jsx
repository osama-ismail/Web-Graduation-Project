import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <main className="wrapper">
                <section id="left">
                    <div className="logo">Site Logo</div>
                </section>
                <section id="right">
                    <a className="headers" to="/">ABOUT</a>
                    <a className="headers" to="/services">SERVICES</a>
                    <a className="headers" to="/features">FEATURES</a>
                    <a className="headers" to="/faq">FAQ</a>
                    <a className="headers" to="/contact">CONTACT</a>
                </section>
            </main>
        </nav>
    )
}

export default Navbar