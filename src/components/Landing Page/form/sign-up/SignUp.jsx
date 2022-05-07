import "../form.css";
import React, { useState } from "react";
import { handleRegister } from "../../../../backend/handleRegister";
import styled from "styled-components";
import MapForm from "../../mapForm/MapForm";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    &:last-child {
        margin-bottom: 3rem;
    }
`

const Input = styled.input`
    background-color: #0d0d0d;
    padding: 12px 5px 12px 15px;
    color: #dcdde1;
    font-size: 17px;
    outline: none;
    border: 1px solid #b2bec3;
    margin-bottom: 2rem;
    border-radius: 3px;
    transition: 300ms;

    &:focus {
        border: 1px solid #d63031;
    }
`

const SignUp = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [accountType, setAccountType] = useState('Garage Account')

    const handleClick = (e) => {
        handleRegister(e, { name, email, password, phoneNumber, accountType });
    }

    const closeMapForm = () => setShowMapForm(false);
    const [showMapForm, setShowMapForm] = React.useState(false);

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
            {/* <div id="account-type">
                <span>Account Type:</span>
                <select
                    id="select-account-type"
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option>User Account</option>
                    <option>Garage Account</option>
                </select>
            </div> */}
            <button className="toggle" onClick={props.handleClick}>
                Have an account? login
            </button>
            <button className="submit-button" onClick={(e) => {
                handleClick(e);
                // if (accountType === "Garage Account")
                setShowMapForm(true)
            }}>
                Create account
            </button>

            {showMapForm ? (
                <MapForm closeMapForm={closeMapForm} />
            ) : null}
        </Container>
    )
}

export default SignUp;