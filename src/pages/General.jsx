import React from 'react';
import styled from 'styled-components';
import ContactFom from '../components/General Template/contact-form/ContactFom';
import Contacts from '../components/General Template/contacts/Contacts';
import Header from '../components/General Template/header/Header';
import BackToTop from '../components/Global Components/backToTop/BackToTop';
import Footer from "../components/Global Components/footer/Footer";

const Container = styled.div`
    background-color: #0f0f0f;
`

const General = () => {
    return (
        <Container>
            <BackToTop />
            <Header />
            <Contacts />
            <ContactFom />
            <Footer />
        </Container>
    )
}

export default General;