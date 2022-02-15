import React from 'react';
import styled from "styled-components";
import { contacts } from '../../../iterated_variables/contacts';
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

const Contacts = () => {
    return (
        <Contaier>
            <ContactsInfo>
                {
                    contacts.map(contact => {
                        return (
                            <Info>
                                <Logo>
                                    <i className={contact.logo} aria-hidden="true"></i>
                                </Logo>
                                <Box>
                                    <Type>{contact.type}</Type>
                                    <Details>{contact.details}</Details>
                                </Box>
                            </Info>
                        );
                    })
                }
            </ContactsInfo>
        </Contaier>
    )
}

export default Contacts