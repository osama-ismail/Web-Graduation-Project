import React from 'react';
import styled from "styled-components";
import Notification from '../notification/Notification';
import { notifications } from "./NotificationsFakeData";

const Container = styled.div`
    position: absolute;
    right: 8em;
    top: 5.5rem;
    z-index: 10;
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #777;
`

// Header
const TopDiv = styled.div`
    padding: 1rem 0.4rem;
    margin: 7px;
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

const NotificationList = () => {
    return (
        <Container>
            <TopDiv>
                <TopHeader>Notifications</TopHeader>
                <Explain>You have {3} new unread notifications</Explain>
            </TopDiv>
            <Separator />
            <Notifications>
                {
                    notifications.map(
                        notification =>
                            <Notification
                                img={notification.img}
                                name={notification.name}
                                text={notification.text}
                                time={notification.time}
                            />
                    )
                }
            </Notifications>
        </Container>
    );
};

export default NotificationList;