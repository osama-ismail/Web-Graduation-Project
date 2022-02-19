import "../form.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
const SignUp = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const handel_signup = (e) => {
        if (!email.includes("@")) {
            console.log("enter an email")
            return
        }

        e.preventDefault()
        const user = [name, email, phoneNumber, password]
        console.log(user)
        axios.post(
            "http://localhost:8080//users/signup",

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

        // fetch("http://localhost:8080//users/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(user)

        // }).then((res) => res.json())
        //     .then((data) => {
        //         console.log(data.results);
        //     }).catch((e) => {
        //         console.log("failed with us");
        //     });

    }
    return (
        <div className="inputs">
            <TextField
                id="standard-basic"
                label="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                variant="standard"
                type={"password"}
                required
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
                }}
            />
            <button className="toggle" onClick={props.handleClick}>Have an account? login</button>
            <button className="submit-button" onClick={handel_signup}>Create account</button>
        </div>
    )
}

export default SignUp