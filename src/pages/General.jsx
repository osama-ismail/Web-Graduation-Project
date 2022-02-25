import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContactFom from '../components/General Template/contact-form/ContactForm';
import Contacts from '../components/General Template/contacts/Contacts';
import Header from '../components/General Template/header/Header';
import Shop from '../components/General Template/shop/Shop';
import BackToTop from '../components/Global Components/backToTop/BackToTop';
import Footer from "../components/Global Components/footer/Footer";

const Container = styled.div`
    background-color: #0f0f0f;
`

const General = () => {
    const { name } = useParams();
    return (
        <Container>
            <BackToTop />
            <Header title={name} />
            {name === 'contacts' ? <Contacts /> : null}
            {name === 'contacts' ? <ContactFom /> : null}
            {name === 'shop' ? <Shop /> : null}
            <Footer />
        </Container>
    )
}

export default General;