import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(28, 28, 28);
    padding: 2em;
    transition: 0.3s;
    margin: 2em 2em 2em 2em;
    width: 15em;
    border: 12px solid rgb(200, 25, 30);

    &:hover {
        background-color: rgb(190, 25, 30);
    }
`

const MaskTop = styled.div`
    position: absolute;
    top: -12px;
    left: 0;
    width: 50%;
    height: 12px;
    background-color: #eee;
`

const MaskLeft = styled.div`
    position: absolute;
    top: -12px;
    left: -12px;
    width: 12px;
    height: 50%;
    background-color: #eee;
`

const MaskRight = styled.div`
    position: absolute;
    bottom: 0;
    right: -12px;
    width: 12px;
    height: 50%;
    background-color: #eee;
`

const MaskBottom = styled.div`
    position: absolute;
    bottom: -12px;
    right: -12px;
    width: 50%;
    height: 12px;
    background-color: #eee;
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
            <MaskTop />
            <MaskLeft />
            <MaskRight />
            <MaskBottom />
            <LogoBox>
                <Logo src={require("../../assets/Services/" + props.services.sourceImg)} />
            </LogoBox>
            <Header>{props.services.title}</Header>
            <Description>{props.services.description}</Description>
        </Container>
    )
}

export default Card
