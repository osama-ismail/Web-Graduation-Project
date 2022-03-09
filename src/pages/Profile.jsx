import React from 'react';
import styled from 'styled-components';
import cover from '../assets/images/slider/slider-img-3.jpg';
import Bar from '../components/Profile Page/bar/Bar';
import ProfileForm from '../components/Profile Page/profile-form/ProfileForm';
import ProfilePicture from '../components/Profile Page/profile-picture/ProfilePicture';
import Footer from '../components/Global Components/footer/Footer';
import { MediumScreen, Tablet } from '../components/responsive/Responsive';
import CartTable from '../components/Profile Page/cart-table/CartTable';

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
    color: white;
    font-size: 130%;
`

const Email = styled.span`
    color: rgb(210, 210, 210, 0.7);
    margin-top: 0.4rem;
`

const Profile = (props) => {

    const [id, setId] = React.useState(props.default)

    return (
        <Container>
            <CoverImg />
            <Box>
                <ProfilePicture />
                <Section>
                    <ProfileName>
                        Profile Name
                    </ProfileName>
                    <Email>myemail@yahoo.com</Email>
                    <Bar id={id} setId={setId} />
                </Section>
            </Box>
            {id === "edit" ? <ProfileForm /> : null}
            {id === "cart" ? <CartTable /> : null}
            <Footer />
        </Container>
    )
}

export default Profile;