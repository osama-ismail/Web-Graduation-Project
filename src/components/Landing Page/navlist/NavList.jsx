import React from 'react';
import { Link } from "react-scroll";
import styled from "styled-components";
import "./NavList.css";

const List = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    background-color: rgb(38, 38, 38);
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 100;
    padding: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    
    animation-name: navlist-animation;
    animation-function-time: ease-in-out;
    animation-duration: 600ms;

    @keyframes navlist-animation {
        from {
            transform: translateX(100%);
        } to {
            transform: translateX(0);
        }
    }
`

const NavList = () => {
    return (
        <List>
            <Link
                to="AboutElement"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="list-headers"
            >
                About (App name)
            </Link>
            <hr />
            <Link
                to="ServicesElement"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="list-headers"
            >
                Services supported
            </Link>
            <hr />
            <Link
                to="FAQElement"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="list-headers"
            >
                Frequently asked questions
            </Link>
            <hr />
            <Link
                to="FooterElement"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="list-headers"
            >
                Contact
            </Link>
        </List>
    );
};

export default NavList;