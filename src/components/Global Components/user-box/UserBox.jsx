import React, { useState } from 'react';
import styled from "styled-components";

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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    border-radius: 50%;
`

const UserSpan = styled.span`
    font-size: 14px;
    font-weight: bold;
`

const UserBox = ({ handleUserBox }) => {
    const [spanColor, setSpanColor] = useState("white")
    const [profileImg, setProfileImg] = React.useState(`http://localhost:8080/${localStorage.getItem('accountType') === 'Garage' ? 'garages' : 'users'}/${localStorage.getItem('loggedIn')}/profileImage/-1`)

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
            <UserImg style={{ backgroundImage: `url(${profileImg})` }} />
            <UserSpan style={{ color: spanColor }}>Me</UserSpan>
        </Container >
    );
};

export default UserBox;