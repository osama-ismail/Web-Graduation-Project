import React, { useState } from 'react';
import styled from "styled-components";
import img from "../../assets/images/user.jpg";
import UserList from "../user-list/UserList";

const Container = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 0 2rem;
    border: none;
    background-color: #f6f6f6;
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

const UserBox = () => {
    const [spanColor, setSpanColor] = useState("black")
    const [showList, setShowList] = useState(false)

    const handleClick = () => {
        if (spanColor === "red") {
            setSpanColor("black")
            setShowList(false)
        }
        else if (spanColor === "black") {
            setSpanColor("red")
            setShowList(true)
        }
    }

    return (
        <Container onClick={handleClick}>
            <UserImg />
            <UserSpan style={{ color: spanColor }}>Me</UserSpan>
            {showList ? <UserList /> : null}
        </Container >
    );
};

export default UserBox;