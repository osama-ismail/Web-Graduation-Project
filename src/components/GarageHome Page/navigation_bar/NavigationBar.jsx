import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";
import "./styles.css";
import NotificationBox from "../notification-box/NotificationBox";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 1em 2em;
    position: fixed;
    z-index: 100;
    width: 100%;
`

const Right = styled.div`
    text-align: right;
    display: flex;
    align-items: center;
    flex: 1;
`

const Center = styled.div`
    margin: 0 1rem;
    text-align: center;
    display: flex;
    align-items: center;
`

const Left = styled.div``

const Logo = styled.img``

const Catalog = styled.div`
    background-color: black;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid rgb(210, 210, 210, 0.2);
    color: white;
    transition: 300ms;

    &:hover {
        color: rgb(230, 18, 47);
        background-color: #111;
    }
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
    padding: 3px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 10px;

    &:hover > .search-txt {
        width: 120px;
        padding: 0 7px;
    }
`

const SearchButton = styled.a`
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #2d3436;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
`

const NavigationBar = ({ handleNotificationBox }) => {
    const [showBackground, setBackground] = React.useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50)
            setBackground(true)
        else
            setBackground(false)
    })

    return (
        <Container className={showBackground ? "background" : null}>
            <Left>
                <NavLink to="/">
                    <Logo src={logo} alt="logo" />
                </NavLink>
            </Left>
            <Center>
                <Catalog>
                    <i class="fa fa-bars" aria-hidden="true"></i> CATALOG
                </Catalog>
                <NavLink to="#" className="navlinks">HOME</NavLink>
                <NavLink to="#" className="navlinks">
                    Services <i class="fa fa-angle-down" aria-hidden="true"></i>
                </NavLink>
                <NavLink to="#" className="navlinks">Shop</NavLink>
                <NavLink to="#" className="navlinks">Blog</NavLink>
                <NavLink to="#" className="navlinks">Contacts</NavLink>
            </Center>
            <Right>
                <NavLink to="/login/:userid/booking" className="booking">Booking</NavLink>
                <SearchWrapper>
                    <Input className="search-txt" type="text" placeholder="Type to search" />
                    <SearchButton href="">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </SearchButton>
                </SearchWrapper>
                <NotificationBox handleNotificationBox={handleNotificationBox} />
            </Right>
        </Container >
    )
}

export default NavigationBar;