import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './UserList.css';

const Container = styled.div`
    position: fixed;
    width: 300px;
    height: 200px;
    background-color: rgb(17, 17, 17, 0.9);
    right: 0;
    top: 5.4rem;
    margin: 0 2rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    z-index: 2;
    box-shadow: 0px 0px 6px #777;
    background-color: #0f0f0f;

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

const UserList = ({ name, bio }) => {
    return (
        <Container>
            <Info>
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
            </Info>
            <NavLink id="user-list-items" to="#">View Profile</NavLink>
            <NavLink id="user-list-items" to="#">Go to iDrive map</NavLink>
            <NavLink id="user-list-items" to="#">Sign Out</NavLink>
        </Container>
    );
};

export default UserList;
