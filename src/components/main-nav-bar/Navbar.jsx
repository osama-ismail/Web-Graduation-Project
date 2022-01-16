import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <main className="wrapper">
                <section id="left">
                    <div className="logo">Site Logo</div>
                </section>
                <section id="right">
                    <a href="#" className="headers">About</a>
                    <a href="#" className="headers">Services</a>
                    <a href="#" className="headers">Features</a>
                    <a href="#" className="headers">FAQ</a>
                    <a href="#" className="headers">Contact</a>
                </section>
            </main>
        </nav>
    )
}

export default Navbar