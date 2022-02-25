import "../form.css";
import { useState } from "react";
import { handleLogin } from "../../../../backend/handleLogin";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Input = styled.input`
    background-color: black;
    padding: 12px 5px 12px 15px;
    color: white;
    font-size: 17px;
    border: none;
    outline: none;
    border: 1px solid rgb(210, 210, 210, 0.5);
    margin-bottom: 2rem;
`;

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        handleLogin(e, { email, password });
    }

    return (
        <Container>
            <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email *"
                style={{
                    margin: "20px 0 20px 0",
                    width: "100%"
                }}
            />
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={"password"}
                required
                placeholder="Password *"
                style={{
                    margin: "0 0 20px 0",
                    width: "100%",
                    font: "small-caption",
                    fontSize: "16px"
                }}
            />
            <a className="forget-pass" href="#">Forgot your password?</a>
            <button className="toggle" onClick={props.handleClick}>
                Not have an account? register
            </button>
            <button className="submit-button" onClick={handleClick}>
                Login
            </button>
        </Container>
    )
}

export default SignIn;