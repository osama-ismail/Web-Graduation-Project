import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/images/iDrive.jpg";
import "./styles.css";
import NotificationBox from "../../Global Components/notification-box/NotificationBox";
import UserBox from "../../Global Components/user-box/UserBox";
import { MediumScreen } from '../../responsive/Responsive';
import SearchBar from '../../Global Components/search-bar/SearchBar';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 1em 2rem;
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

const Left = styled.div``

const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

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

const NavigationBar = ({ handleUserBox, handleNotificationBox, handleCatalog, counter }) => {
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
                <i className="fa fa-bars" aria-hidden="true"></i>
            </Menu>
            <Right>
                <NotificationBox handleNotificationBox={handleNotificationBox} counter={counter} />
                <UserBox handleUserBox={handleUserBox} />
            </Right>
        </Container >
    )
}

export default NavigationBar;