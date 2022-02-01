import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    background-color: #eee;
`
// Left
const Left = styled.section`
    flex: 1;
`

const Logo = styled.img`
`

// Center
const Center = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
`

const SearchWrapper = styled.div`
`

// Right
const Right = styled.section`
    flex: 1;
    text-align: right;
`

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <NavLink to="/">
                    <Logo src={logo} alt="logo" />
                </NavLink>
            </Left>
            <Center>
                <SearchWrapper>
                    Search
                </SearchWrapper>
            </Center>
            <Right>right</Right>
        </Nav>
    );
};

export default Navbar;