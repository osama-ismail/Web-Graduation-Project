import React from 'react';
import styled from "styled-components";
import ServicesSeparator from "../../../assets/images/ServicesSeparator.png";
import Card from "./Card";
import services from '../../../iterated_variables/servicesData';
import workingImg from "../../../assets/images/working.jpg";

const Container = styled.div`
    background-image: url(${workingImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopHeader = styled.h1`
    font-size: 45px;
    font-weight: 800;
    color: #dcdde1;
    margin-top: 2rem;
`

const MainSeparator = styled.img`
    margin: 0.5em 0 0 0;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Services = () => {
    return (
        <Container id="ServicesElement">
            <TopHeader>
                <span style={{
                    color: "rgb(230, 40, 47)",
                    fontStyle: "italic"
                }}>iDrive</span> Services
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

export default Services;