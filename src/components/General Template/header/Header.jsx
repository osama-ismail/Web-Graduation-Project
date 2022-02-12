import React from 'react';
import styled from 'styled-components';
import background from "../../../assets/images/working.jpg";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Container = styled.div`
    background-image: url(${background});
    background-size: 100% 115%;
    background-repeat: no-repeat;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const PageName = styled.h1`
    color: white;
    margin-bottom: 1rem;
    font-family: 'Righteous',cursive;
    font-size: 38px;
    font-weight: 500;
`

const Sequence = styled.h1`
    color: #777;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
`

const Span = styled.span`
    margin-left: 14px;
    transition: 300ms;
    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Header = () => {
    return (
        <Container>
            <PageName>Page Name</PageName>
            <Sequence>
                <NavLink className="links" to="/">Home</NavLink>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <Span>Page Name</Span>
            </Sequence>
        </Container>
    )
}

export default Header;