import React from 'react';
import styled from "styled-components";
import { Tablet } from '../../responsive/Responsive';

const Contaier = styled.div`
    margin-top: 1rem;
`

const ContactsInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${Tablet({ flexDirection: "column", alignItems: "flex-start" })}
`

const Info = styled.div`
    color: white;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 1;
`

const Logo = styled.span`
    background-color: rgb(190, 18, 47);
    padding: 20px;
    font-size: 24px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 0;
    transition: 300ms;

    &:hover {
        background-color: black;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`

const Type = styled.h2`
    font-family: 'Righteous',cursive;
    font-size: 28px;
    font-weight: 500;
`

const Details = styled.p`
    color: #666;
    white-space: pre-line;
`

const Contacts = ({ garage }) => {

    const homePage = `/main-login`

    return (
        <Contaier>
            <ContactsInfo>
                <Info>
                    <Logo>
                        <i className="fa fa-building" aria-hidden="true"></i>
                    </Logo>
                    <Box>
                        <Type>Status</Type>
                        <Details>{garage.availability ? "Open" : "Closed"}</Details>
                    </Box>
                </Info>
                <Info>
                    <Logo>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </Logo>
                    <Box>
                        <Type>Phone</Type>
                        <Details>{garage.garagePhoneNumber}</Details>
                    </Box>
                </Info>
                <Info>
                    <Logo>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </Logo>
                    <Box>
                        <Type>Work Time</Type>
                        <Details>
                            {garage.garageStartTime}
                            <br />
                            {garage.garageEndTime}
                        </Details>
                    </Box>
                </Info>
            </ContactsInfo>
        </Contaier>
    )
}

export default Contacts