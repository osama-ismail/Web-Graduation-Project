import React from 'react';
import styled from 'styled-components';
import { MediumScreen } from '../../responsive/Responsive';
import MapContacts from '../../Global Components/map/MapContacts';

const Container = styled.div`
    margin: 1rem 0 3rem 0;
    display: flex;
    justify-content: center;

    ${MediumScreen({ flexDirection: "column", alignItems: "center" })}
`

const ContactForm = ({ userId }) => {
    return (
        <Container>
            <MapContacts userId={userId} width="600px" height="350px" />
        </Container>
    )
}

export default ContactForm;