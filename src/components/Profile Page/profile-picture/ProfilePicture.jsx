import React from 'react';
import styled from 'styled-components';
import { MediumScreen } from '../../responsive/Responsive';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Navigate } from "react-router-dom";

const EditProfileImg = styled.button`
    background-color: rgb(190, 18, 47);
    border: none;
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
    background-repeat: no-repeat;
    background-size: cover;
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

const ParentDiv = styled.div`
    display: inline-block;
    position: relative;
    overflow: hidden;
`

const ButtonUpload = styled.button`
    font-size: 120%;
    color: white;
    background-color: rgb(190, 18, 48);
    border: none;
    cursor: pointer;
    padding: 0.5rem;
`

const FileInput = styled.input`
    left: 0;
    top: 0;
    font-size: 130%;
    margin-left: 10px;
    position: absolute;
    opacity: 0;
`

const ProfilePicture = () => {
    const { id } = useParams()

    const [counter, setCounter] = React.useState(0)
    const [profileImg, setProfileImg] = React.useState(`http://localhost:8080/${localStorage.getItem('accountType') === 'Garage' ? 'garages' : 'users'}/${id}/profileImage/-1`)

    const updateImage = (e) => {
        e.preventDefault()
        const url = `http://localhost:8080//${localStorage.getItem('accountType') === 'Garage' ? 'garages' : 'users'}/${id}/profile/uploadProfileImage/`;
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data)
                setProfileImg(`http://localhost:8080/${localStorage.getItem('accountType') === 'Garage' ? 'garages' : 'users'}/${id}/profileImage/${counter}`)
                setCounter(counter + 1)
            })
    }

    return (
        <Container img={profileImg} style={{ backgroundImage: `url(${profileImg})` }}>
            {
                localStorage.getItem('loggedIn') === null ? <Navigate replace to="/" /> : null
            }
            <EditProfileImg>
                <ParentDiv>
                    <ButtonUpload>Choose Image</ButtonUpload>
                    <FileInput onChange={(e) => { updateImage(e) }} type="file" />
                </ParentDiv>
            </EditProfileImg>
        </Container>
    )
}

export default ProfilePicture;