import React from 'react';
import styled from 'styled-components';
import wheelImg from '../../../assets/images/wheel.jpg';
import { NavLink } from 'react-router-dom';
import { catalogItems } from '../../../iterated_variables/catalogItems';
import { Tablet } from '../../responsive/Responsive';

const Container = styled.div`
    position: absolute;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: #040404;

    ${Tablet({ flexDirection: "column", alignItems: "stretch" })}
`

const Left = styled.section``

const Parts = styled.ul``

const PartName = styled.a`
    transition: 300ms;
    margin: 0 1rem;
`

const Part = styled.li`
    list-style-type: none;
    border: 1px solid rgb(210, 210, 210, 0.1);
    padding: 1rem 2rem;
    transition: 300ms;
    cursor: pointer;
    margin: 1px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        background-color: #333;
    }

    &:hover ${PartName} {
        color: rgb(190, 18, 47);
    }
`

const Logo = styled.img`
    height: 20px;
    width: 20px;
`

const Center = styled.section``

const Right = styled.section`
    position: relative;
    background-image: url(${wheelImg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 200px;
    height: 300px;

    ${Tablet({ alignSelf: "center" })}
`

const Catalog = () => {
    return (
        <Container>
            <Left>
                <Parts>
                    {
                        catalogItems.map(item => {
                            return (
                                <Part>
                                    <Logo src={
                                        require("../../../assets/images/catalog/" + item.logo)
                                    } />
                                    <PartName>{item.name}</PartName>
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </Part>
                            );
                        })
                    }
                </Parts>
            </Left>
            <Center>Center</Center>
            <Right>
                <NavLink to="/store" style={{
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid rgb(190, 18, 47)",
                    padding: "0.5em 1em",
                    textDecoration: "none"
                }}>Online Shop</NavLink>
            </Right>
        </Container>
    )
}

export default Catalog;