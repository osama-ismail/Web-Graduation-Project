import React from 'react';
import styled from 'styled-components';
import cover from '../assets/images/slider/slider-img-3.jpg';
import ProfilePicture from '../components/Profile Page/profile-picture/ProfilePicture';

const Container = styled.div`
    background-color: #0f0f0f;
`

const CoverImg = styled.div`
    background-image: url(${cover});
    background-size: 100% 170%;
    background-repeat: no-repeat;
    height: 23em;
`

const Box = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    transform: translateY(-50%);
`

const ProfileName = styled.h2`
    color: white;
    font-size: 130%;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
`

const Profile = () => {
    return (
        <Container>
            <CoverImg />
            <Box>
                <ProfilePicture />
                <ProfileName>Select name from DB depending on id from url</ProfileName>
            </Box>
        </Container>
    )
}

export default Profile;