import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";
import "./styles.css";
import NotificationBox from "../notification-box/NotificationBox";
import UserBox from "../user-box/UserBox";
import { MediumScreen } from '../../responsive/Responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 1em;
    position: sticky;
    top: 0;
    z-index: 100;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    text-align: right;

    ${MediumScreen({ display: "none" })}
`

const Menu = styled.div`
    position: relative;
    border: none;
    padding: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    background-color: #ccc;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: none;

    ${MediumScreen({ display: "flex" })}
`

const Center = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    
    ${MediumScreen({ display: "none" })}
`

const Left = styled.div``

const Logo = styled.img``

const CatalogSpan = styled.span`
    text-transform: uppercase;
    margin-left: 3px;
`

const Catalog = styled.div`
    background-color: black;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid rgb(210, 210, 210, 0.2);
    color: white;
    transition: 300ms;
    display: flex;
    align-items: center;

    &:hover {
        color: rgb(230, 18, 47);
        background-color: #111;
    }

    &:hover: ${CatalogSpan} {
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
    margin-left: 1em;

    &:hover > .search-txt {
        width: 130px;
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

const NavigationBar = ({ handleUserBox, handleNotificationBox, handleCatalog }) => {
    const [showBackground, setBackground] = React.useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100)
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
            <Menu>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </Menu>
            <Center>
                <Catalog onClick={handleCatalog}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    <CatalogSpan>Catalog</CatalogSpan>
                </Catalog>
                <NavLink to="#" className="navlinks">HOME</NavLink>
                <NavLink to="#" className="navlinks">
                    <span style={{ marginRight: "3px" }}>Services</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </NavLink>
                <NavLink to="#" className="navlinks">Shop</NavLink>
                <NavLink to="#" className="navlinks">Blog</NavLink>
                <NavLink to="#" className="navlinks">Contacts</NavLink>
                <NavLink to="/login/:userid/booking" className="booking">Booking</NavLink>
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
        </Container >
    )
}

export default NavigationBar;