import "./navbar.css";

const Navbar = () => {
    return (
        <nav>
            <main className="wrapper">
                <section id="left">
                    <div className="logo">Site Logo</div>
                </section>
                <section id="right">
                    <a className="headers" href="#">Home</a>
                    <a className="headers" href="#">Services</a>
                    <a className="headers" href="#">Features</a>
                    <a className="headers" href="#">Team</a>
                    <a className="headers" href="#">FAQ</a>
                    <a className="headers" href="#">Contact</a>
                </section>
            </main>
        </nav>
    )
}

export default Navbar