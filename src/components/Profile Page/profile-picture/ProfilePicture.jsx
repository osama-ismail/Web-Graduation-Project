import React from 'react';
import styled from 'styled-components';
import user from '../../../assets/images/profile.png';
import { MediumScreen } from '../../responsive/Responsive';

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

const Container = styled.div`
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
    transition: 200ms;

    ${MediumScreen({ marginLeft: "0" })}

    &:hover ${EditProfileImg} {
        display: flex;
    }

    &:hover {
        border: 3px solid rgb(190, 18, 48);
    }
`

const Span = styled.span`
    color: white;
    font-size: 130%;
    margin-left: 10px;
`

const ProfilePicture = () => {
    return (
        <Container>
            <EditProfileImg>
                <i
                    className="fa fa-file-image-o"
                    aria-hidden="true"
                    style={{
                        color: "white"
                    }}
                ></i>
                <Span>Upload Image</Span>
            </EditProfileImg>
        </Container>
    )
}

export default ProfilePicture;