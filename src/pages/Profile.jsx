import React from 'react';
import styled from 'styled-components';
import cover from '../assets/images/slider/slider-img-3.jpg';
import Bar from '../components/Profile Page/bar/Bar';
import ProfileForm from '../components/Profile Page/profile-form/ProfileForm';
import ProfilePicture from '../components/Profile Page/profile-picture/ProfilePicture';
import Footer from '../components/Global Components/footer/Footer';
import { MediumScreen, Tablet } from '../components/responsive/Responsive';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import ParentNavbar from '../components/Global Components/parentNavbar/ParentNavbar';
import GarageServices from '../components/Profile Page/services/GarageServices';
import ExpertSystem from '../components/Profile Page/expert-system/ExpertSystem';

const Container = styled.div`
    background-color: #0f0f0f;
`

const CoverImg = styled.div`
    background-image: url(${cover});
    background-size: 100% 170%;
    background-repeat: no-repeat;
    height: 23em;

    ${MediumScreen({ backgroundSize: "cover" })}
    ${Tablet({ backgroundSize: "100% 100%", height: "18rem" })}
`

const Box = styled.section`
    border-bottom: 1px solid #a0a0a0;
    padding-bottom: 0.9rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    transform: translateY(-50%);

    ${MediumScreen({
    flexDirection: "column",
    alignItems: "center",
    transform: "translateY(0)",
    padding: "1rem 0"
})}
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2.2rem;

    ${MediumScreen({ margin: "1rem 0 0 0", alignItems: "center" })}
`

const ProfileName = styled.h2`
    color: #d63031;
    font-size: 200%;
`

const Email = styled.span`
    color: rgb(210, 210, 210, 0.7);
    margin-top: 0.4rem;
    font-size: 120%;
`

const Profile = (props) => {

    const { id } = useParams()

    const [Id, setId] = React.useState(props.default)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')

    const getData = async () => {
        if (localStorage.getItem('accountType') === 'User') {
            const { data } = await axios.get(`http://localhost:8080/users/${id}`)
            localStorage.setItem('userName', data.username)
            setEmail(data.email)
            setName(data.username)
        } else if (localStorage.getItem('accountType') === 'Garage') {
            const { data } = await axios.get(`http://localhost:8080/garages/${id}`)
            localStorage.setItem('userName', data.garageName)
            setEmail(data.garageEmail)
            setName(data.garageName)
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    const homePage = `/main-login`

    return (
        <Container>
            <ParentNavbar />
            {
                id === localStorage.getItem('loggedIn') ? null : <Navigate replace to={homePage} />
            }
            <CoverImg />
            <Box>
                <ProfilePicture />
                <Section>
                    <ProfileName>{name}</ProfileName>
                    <Email>{email}</Email>
                    <Bar id={Id} setId={setId} />
                </Section>
            </Box>
            {Id === "edit" ? <ProfileForm /> : null}
            {Id === "services" ? <GarageServices /> : null}
            {Id === "expert-system" ? <ExpertSystem /> : null}
            <Footer />
        </Container>
    )
}

export default Profile;