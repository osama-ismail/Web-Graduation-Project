import React, { useState } from 'react';
import styled from "styled-components";
import img from "../../../assets/images/user.png";

const Container = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 1.4rem;
    border: none;
    background: none;
    position: relative;
`

const UserImg = styled.div`
    background-image: url(${img});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const UserSpan = styled.span`
    font-size: 14px;
    font-weight: bold;
`

const UserBox = ({ handleUserBox }) => {
    const [spanColor, setSpanColor] = useState("white")

    const handleClick = () => {
        if (spanColor === "rgb(240, 18, 47)") {
            setSpanColor("white")
        }
        else if (spanColor === "white") {
            setSpanColor("rgb(240, 18, 47)")
        }
        handleUserBox();
    }

    return (
        <Container onClick={handleClick}>
            <UserImg />
            <UserSpan style={{ color: spanColor }}>Me</UserSpan>
        </Container >
    );
};

export default UserBox;