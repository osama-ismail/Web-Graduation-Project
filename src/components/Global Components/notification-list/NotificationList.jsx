import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    right: 5em;
    top: 5.5rem;
    z-index: 10;
    width: 350px;
    height: 400px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #777;
    background-color: #1f1f1f;
`

// Header
const TopDiv = styled.div`
    padding: 1rem 0.4rem;
    margin: 7px;
    color: #dfe6e9;
`

const TopHeader = styled.h3``

const Explain = styled.span``

const Separator = styled.div`
    margin: 0 0 1rem 0;
    width: 100%;
    height: 1px;
    background-color: #dfe6e9;
`

const Notifications = styled.div``

const Notification = styled.div`
    margin: 0 0 3px 0;
    padding: 8px 15px;
    background-color: #636e72;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: 400ms;
    border-radius: 10px;
    color: #dfe6e9;

    &:last-child {
        margin: 0;
    }

    &:hover {
        background-color: #bdc3c7;
        color: black;
    }
`

const NotificationList = ({ msg, counter }) => {
    return (
        <Container>
            <TopDiv>
                <TopHeader>Notifications</TopHeader>
                <Explain>You have {counter} new unread notifications</Explain>
            </TopDiv>
            <Separator />
            <Notifications>
                {
                    [...msg].reverse().map(
                        message => { return <Notification>{message}</Notification> }
                    )
                }
            </Notifications>
        </Container>
    );
};

export default NotificationList;