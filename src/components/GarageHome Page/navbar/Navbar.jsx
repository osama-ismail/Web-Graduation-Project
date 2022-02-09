import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import NotificationBox from "../../notification-box/NotificationBox";
import UserBox from "../../user-box/UserBox";

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    background-color: #b2bec3;
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

const Input = styled.input`
    border: none;
    outline: none;
    padding: 7px 0;
    background: none;
    color: white;
    font-size: 16px;
    transition: 400ms;
    width: 0;
`

const SearchWrapper = styled.div`
    background-color: #636e72;
    padding: 7px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover > .search-txt {
        width: 240px;
        padding: 0 7px;
    }
`

const SearchButton = styled.a`
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2d3436;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
`

// Right
const Right = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Navbar = ({ handleUserBox, handleNotificationBox }) => {
    return (
        <Nav>
            <Left>
                <NavLink to="/">
                    <Logo src={logo} alt="logo" />
                </NavLink>
            </Left>
            <Center>
                <SearchWrapper>
                    <Input className="search-txt" type="text" placeholder="Type to search" />
                    <SearchButton href="">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </SearchButton>
                </SearchWrapper>
            </Center>
            <Right>
                <NotificationBox handleNotificationBox={handleNotificationBox} />
                <UserBox handleUserBox={handleUserBox} />
            </Right>
        </Nav>
    );
};

export default Navbar;