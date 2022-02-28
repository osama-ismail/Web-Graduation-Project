import "../form.css";
import { useState } from "react";
import { handleRegister } from "../../../../backend/handleRegister";
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
`

const SignUp = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [accountType, setAccountType] = useState('')

    const handleClick = (e) => {
        handleRegister(e, { name, email, password, phoneNumber, accountType });
    }

    return (
        <Container>
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name *"
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
                }}
            />
            <Input
                value={email}
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email *"
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
                }}
            />
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Phone Number *"
                style={{
                    margin: "0 0 20px 0",
                    width: "100%"
                }}
            />
            <div id="account-type">
                <span>Account Type:</span>
                <select
                    id="select-account-type"
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option>Garage Account</option>
                    <option>User Account</option>
                </select>
            </div>
            <button className="toggle" onClick={props.handleClick}>
                Have an account? login
            </button>
            <button className="submit-button" onClick={(e) => {
                handleClick(e);
                if (accountType === "Garage Account")
                    props.appearMapForm();
            }}>
                Create account
            </button>
        </Container >
    )
}

export default SignUp;