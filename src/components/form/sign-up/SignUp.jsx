import "../form.css";
import TextField from "@mui/material/TextField";

const SignUp = (props) => {
    return (
        <div className="inputs">
            <TextField
                id="standard-basic"
                label="Username"
                variant="standard"
                required
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
                }}
            />
            <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
                required
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
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
                    width: "100%"
                }}
            />
            <button className="toggle" onClick={props.handleClick}>Have an account? login</button>
            <button className="submit-button">Create account</button>
        </div>
    )
}

export default SignUp