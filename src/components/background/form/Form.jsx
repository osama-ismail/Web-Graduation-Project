import "./form.css";
import TextField from "@mui/material/TextField";


const Form = () => {
    return (
        <section className="form">
            <div className="header">
                <h1>Get started and explore <br /> our services</h1>
            </div>
            <div className="inputs">
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    required
                    style={{
                        margin: "0 0 20px 0",
                        width: "18em"
                    }}
                />
                <TextField
                    id="standard-basic"
                    label="Email address"
                    variant="standard"
                    required
                    style={{
                        margin: "0 0 20px 0",
                        width: "18em"
                    }}
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type={"password"}
                    required
                    style={{
                        margin: "0 0 20px 0",
                        width: "18em"
                    }}
                />
                <span style={{
                    margin: "0 0 25px 0",
                }}>Your personal data is safe with us.</span>
                <button className="submit-button">Register</button>
            </div>
        </section>
    )
}

export default Form
