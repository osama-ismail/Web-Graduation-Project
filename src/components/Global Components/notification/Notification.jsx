import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 0 3px 0;
    padding: 8px 15px;
    background-color: #2f2f2f;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: 400ms;
    border-radius: 10px;
    color: rgb(200, 200, 200);

    &:last-child {
        margin: 0;
    }
    
    &:hover {
        background-color: #bdc3c7;
        color: black;
    }
`

const Image = styled.img`
    height: 45px;
    width: 45px;
    background: none;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 0.1rem;
    width: 100%;
`

const Text = styled.div`
    margin-bottom: 4px;
`

const UserName = styled.span`
    font-weight: bold;
`

const Details = styled.span``

const Time = styled.span``

const Clock = styled.span`
    margin-right: 4px;
`

const Before = styled.span`
    font-size: 14px;
`

const Notification = (props) => {
    return (
        <Container>
            {/* <Image src={require("../../../assets/images/" + props.img)} /> */}
            <Box>
                <Text>
                    <UserName>{props.name} </UserName>
                    <Details>{props.text}</Details>
                </Text>
                <Time>
                    <Clock>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </Clock>
                    <Before>
                        {props.time}
                    </Before>
                </Time>
            </Box>
        </Container>
    );
};

export default Notification;