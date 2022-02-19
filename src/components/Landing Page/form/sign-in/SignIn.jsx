import "../form.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handel_login = (e) => {
        if (!email.includes("@")) {
            console.log("enter an email")
            return
        }
        e.preventDefault()
        const user = [email, password]
        console.log(user)
        axios.post(
            "http://localhost:8080//users/login",

            JSON.stringify(user)
            ,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Accept": "application/json"
                }
            }
        ).then((response) => {
            console.log(response.data)
        })



    }

    return (
        <div className="inputs">
            <TextField
                id="standard-basic"
                label="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
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
            <button className="submit-button" onClick={handel_login}>Login</button>
        </div>
    )
}

export default SignIn