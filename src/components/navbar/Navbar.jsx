import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import NotificationBox from "../notification-box/NotificationBox";
import UserBox from "../user-box/UserBox";

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    background-color: #f6f6f6;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
            <Right>
                <NotificationBox />
                <UserBox />
            </Right>
        </Nav>
    );
};

export default Navbar;