import { requirePropFactory } from '@mui/material';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(28, 28, 28);
    padding: 2em;
    transition: 0.3s;
    border-radius: 3px;
    margin: 0 2em 2em 2em;
    width: 15em;

    &:hover {
        background-color: #5d5d5d;
    }
`

const LogoBox = styled.div`
    width: 60px;
    height: 60px;
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const Header = styled.h2`
    color: white;
    margin: 1em 0;
`

const Description = styled.p`
    font-size: 20px;
    color: white;
`

const Card = (props) => {
    return (
        <Container>
            <LogoBox>
                <Logo src={require("../../assets/Services/" + props.services.sourceImg)} />
            </LogoBox>
            <Header>{props.services.title}</Header>
            <Description>{props.services.description}</Description>
        </Container>
    )
}

export default Card
