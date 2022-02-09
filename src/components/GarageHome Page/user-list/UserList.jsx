import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    background-color: rgb(17, 17, 17, 0.9);
    right: 0;
    top: 5.4rem;
    margin: 0 3rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;

    animation-name: list-animation;
    animation-duration: 400ms;
    animation-function-time: ease-in-out;

    @keyframes list-animation {
        0% {
            height: 0;
            opacity: 0;
        } 100% {
            height: 200px;
            opacity: 1;
        }
    }
`

const Info = styled.div`
    color: #eee;
    padding: 0.5em 0;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ddd;

    animation-name: info;
    animation-duration: 1.5s;
    
    @keyframes info {
        from { opacity: 0 }
        to { opacity: 1 }
    }
`
const Name = styled.h2``

const Bio = styled.span``

const ViewProfile = styled.button`
    margin: 0.5rem 0;
    padding: 3px;
    width: 95%;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid rgb(190, 25, 30);
    border-radius: 30px;
    transition: 100ms;

    &:hover {
        border: 2px solid rgb(250, 35, 30);
        padding: 2px;
        background-color: #ffcccc;
        font-weight: bold;
    }

    animation-name: buttons;
    animation-duration: 2s;
    
    @keyframes buttons {
        from { opacity: 0 }
        to { opacity: 1 }
    }
`

const ChangePassword = ViewProfile

const SignOut = ViewProfile

const UserList = ({ name, bio }) => {
    return (
        <Container>
            <Info>
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
            </Info>
            <ViewProfile>View Profile</ViewProfile>
            <ChangePassword>Change Password</ChangePassword>
            <SignOut>Sign Out</SignOut>
        </Container>
    );
};

export default UserList;
