import "../../form/form.css";
import TextField from "@mui/material/TextField";

const SignIn = (props) => {
    return (
        <div className="inputs">
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
            <a className="forget-pass" href="#">Forgot your password?</a>
            <button className="toggle" onClick={props.handleClick}>Not have an account? register</button>
            <button className="submit-button">Login</button>
        </div>
    )
}

export default SignIn