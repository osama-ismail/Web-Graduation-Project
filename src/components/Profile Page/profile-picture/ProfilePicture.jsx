import React from 'react';
import styled from 'styled-components';
import user from '../../../assets/images/profile.png';
import { MediumScreen } from '../../responsive/Responsive';
import { useParams } from 'react-router-dom';
import axios from "axios";


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

const Input = styled.input`
    color: white;
    font-size: 130%;
    margin-left: 10px;
`

const ProfilePicture = () => {
    const { id } = useParams();

    const updateImage = (e) => {
        e.preventDefault()
        const url = `http://localhost:8080//users/${id}/profile/uploadProfileImage/`;
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
            })
    }

    const getNewImage = () => {

    }
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
                <Input
                    onChange={(e) => {
                        updateImage(e)
                        getNewImage()
                    }}
                    type="file"
                />
            </EditProfileImg>
        </Container>
    )
}

export default ProfilePicture;