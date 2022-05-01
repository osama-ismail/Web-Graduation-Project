import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Contacts from '../components/General Template/contacts/Contacts';
import ContactForm from '../components/General Template/contact-form/ContactForm';
import Header from '../components/General Template/header/Header';
import BackToTop from '../components/Global Components/backToTop/BackToTop';
import Footer from "../components/Global Components/footer/Footer";
import ParentNavbar from "../components/Global Components/parentNavbar/ParentNavbar";

const Container = styled.div`
    background-color: #0f0f0f;
`

const General = () => {
    const { name } = useParams();
    const { id } = useParams();

    const [garage, setGarage] = React.useState({})

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8080/garages/${id}`)
        setGarage(data)
    };

    React.useEffect(() => {
        getData()
    }, []);

    return (
        <Container>
            <ParentNavbar />
            <BackToTop />
            <Header title={name} />
            {name === 'contacts' ? <Contacts garage={garage} /> : null}
            {name === 'contacts' ? <ContactForm userId={id} /> : null}
            <Footer />
        </Container>
    )
}

export default General;