import "./form.css";
import TextField from "@mui/material/TextField";


const Form = () => {
    return (
        <section className="form">
            <div className="header">
                <h1>Get started</h1>
            </div>
            <div className="inputs">
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
                        margin: "0 0 40px 0",
                        width: "18em"
                    }}
                />
                <button className="submit-button">Register</button>
            </div>
        </section>
    )
}

export default Form
