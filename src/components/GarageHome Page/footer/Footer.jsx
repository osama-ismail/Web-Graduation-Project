import React from 'react';
import styled from "styled-components";
import { Responsive } from '../../responsive/Responsive';

const Container = styled.div`
    background-color: black;
    margin: 3rem 0 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 2rem 0;

    ${Responsive({ flexDirection: "column" })}
`

const Title = styled.h2`
    font-family: 'Righteous', cursive;
    font-size: 34px;
    font-weight: 500;
    color: white;
`

const Pages = styled.div`
    display: flex;
    flex-direction: column;

    ${Responsive({ marginBottom: "2rem" })}
`
const Page = styled.a`
    color: #888;
    text-decoration: none;
    transition: 200ms;
    margin-top: 1rem;
    font-size: 15px;

    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Services = styled.div`
    display: flex;
    flex-direction: column;

    ${Responsive({ marginBottom: "2rem" })}
`
const Service = Page;

const Store = styled.div`
    display: flex;
    flex-direction: column;

    ${Responsive({ marginBottom: "2rem" })}
`
const Item = Page;

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
`

const Footer = () => {
    return (
        <Container>
            <Pages>
                <Title>Pages</Title>
                <Page href="#">Home</Page>
                <Page href="#">About Us</Page>
                <Page href="#">Services</Page>
                <Page href="#">Shop</Page>
                <Page href="#">Blog</Page>
                <Page href="#">Contacts</Page>
            </Pages>
            <Services>
                <Title>Services</Title>
                <Service href="#">Change Oil</Service>
                <Service href="#">Engine Repair</Service>
                <Service href="#">Body Painting</Service>
                <Service href="#">Computer Diagnostics</Service>
                <Service href="#">Brake System Repair</Service>
                <Service href="#">Warranty Service</Service>
            </Services>
            <Store>
                <Title>Store</Title>
                <Item href="#">Engine Parts</Item>
                <Item href="#">Suspension Parts</Item>
                <Item href="#">Exterior and Interior</Item>
                <Item href="#">Wheels and Tires</Item>
                <Item href="#">Electrical System</Item>
                <Item href="#">Care and Cleaning</Item>
            </Store>
            <Contacts>
                <Title>Contacts</Title>
                <Item>Garage Address</Item>
                <Item href="mailto:Email">Garage Email</Item>
                <Item>Garage Phone number</Item>
            </Contacts>
        </Container>
    );
};

export default Footer;
