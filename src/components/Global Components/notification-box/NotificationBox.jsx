import React, { useState } from 'react';
import styled from "styled-components";


const Container = styled.button`
    position: relative;
    border: none;
    padding: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    background-color: #ccc;
    border-radius: 50%;
`

const Counter = styled.span`
    background-color: rgb(240, 18, 47);
    padding: 3px;
    color: white;
    font-size: 14px;
    border-radius: 50%;
    position: absolute;
    right: -7px;
    top: -7px;
    width: 16px;
    height: 16px;
    text-align: center;
`

const NotificationBox = ({ handleNotificationBox, counter }) => {
    const [clickedFlag, setClickedFlag] = useState(false)
    const [showCounter, setShowCounter] = useState(true)

    const handleClick = () => {
        setClickedFlag(!clickedFlag)
        setShowCounter(!showCounter)
        handleNotificationBox()
    }

    return (
        <Container border={clickedFlag} onClick={handleClick}>
            <i
                class="fa fa-bell"
                aria-hidden="true"
                style={{
                    color: `${clickedFlag ? "rgb(230, 18, 47)" : "black"}`
                }}
            />
            {
                counter !== 0 ? (
                    showCounter ? <Counter>{counter}</Counter> : null
                ) : null
            }
        </Container>
    );
};

export default NotificationBox;