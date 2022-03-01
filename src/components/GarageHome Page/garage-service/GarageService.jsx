import React from 'react';
import styled from "styled-components";

const Label = styled.a`
    color: white;
    z-index: 10;
    font-size: 18px;
    background-color: rgb(150, 150, 150, 0.5);
    padding: 1rem;
    text-decoration: none;
    transition: 400ms;
`

const Container = styled.div`
    background-image: ${props => `url(${require("../../../assets/images/garage-services/" + props.background)})`};
    background-size: 170%;
    background-repeat: no-repeat;
    height: 25rem;
    width: 25rem;
    margin: 10px 7px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.78;
    transition: 500ms;

    &:hover ${Label} {
        background-color: rgb(207, 37, 63);
    }

    &:hover {
        background-size: 180%;
    }
`

const GarageService = ({ img, serviceName }) => {
    return (
        <Container id='garage-services' background={img}>
            <Label href="#">{serviceName}</Label>
        </Container>
    );
};

export default GarageService;