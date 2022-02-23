import React from 'react';
import styled from 'styled-components';
import cover from '../assets/images/slider/slider-img-3.jpg';
import user from '../assets/images/profile.png';

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

const EditProfileImg = styled.button`
    background-color: rgb(190, 18, 47);
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 300ms;
    display: none;

    &:hover {
        box-shadow: 0 0 10px rgb(190, 18, 47);
    }
`

const ProfileImg = styled.div`
    width: 15rem;
    height: 15rem;
    background-image: url(${user});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4rem;
    border-radius: 50%;
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${EditProfileImg} {
        display: flex;
    }
`

const Span = styled.span`
    color: white;
    font-size: 130%;
    margin-left: 10px;
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
                <ProfileImg>
                    <EditProfileImg>
                        <i
                            class="fa fa-file-image-o"
                            aria-hidden="true"
                            style={{
                                color: "white"
                            }}
                        ></i>
                        <Span>Upload Image</Span>
                    </EditProfileImg>
                </ProfileImg>
                <ProfileName>Select name from DB depending on id from url</ProfileName>
            </Box>
        </Container>
    )
}

export default Profile;