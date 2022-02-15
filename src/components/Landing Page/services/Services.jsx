import React from 'react';
import styled from "styled-components";
import ServicesSeparator from "../../../assets/images/ServicesSeparator.png";
import Card from "./Card";
import services from '../../../iterated_variables/servicesData';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopHeader = styled.h1`
    font-size: 45px;
    font-weight: 800;
    color: white;
`

const MainSeparator = styled.img`
    margin: 0.5em;
`

const Cards = styled.div`
    width: 90%;
    background-color: #0a0a0a;
    padding: 2em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Services = () => {
    return (
        <Container id="ServicesElement">
            <TopHeader>
                <span style={{
                    color: "rgb(190, 25, 30)",
                    fontStyle: "italic"
                }}>Tinker</span> Services
            </TopHeader>
            <MainSeparator src={ServicesSeparator} />
            <Cards>
                {
                    services.map((service) => {
                        return <Card services={service} />
                    })
                }
            </Cards>
        </Container>
    )
}

export default Services