import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { MediumScreen } from '../../responsive/Responsive'

const Container = styled.div`
    color: white;
    border: 2px solid rgb(190, 18, 48);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem 2rem;
    margin: 0 10rem;
    transform: translateY(-25%);
    background-color: #0a0a0a;

    ${MediumScreen({
    transform: "translateY(-20%)",
    margin: "1rem 1.5rem",
    transform: "translateY(0)"
})}

    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    ${MediumScreen({ marginBottom: "1rem", alignItems: "stretch" })}
`

const Label = styled.label`
    color: rgb(220, 220, 220);
`

const Input = styled.input`
    background-color: black;
    border: 2px solid black;
    padding: 0.6rem 1rem;
    color: white;
    font-size: 120%;
    margin-top: 6px;
    outline: none;
    border-radius: 7px;

    &:focus {
        border: 2px solid rgb(190, 18, 48);
    }
`

const Buttons = styled.section`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin: 0 1rem;
    border: 1px solid rgb(210, 210, 210, 0.5);
    background-color: black;
    color: white;
    padding: 0.4rem 1rem;
    font-size: 120%;
    cursor: pointer;

    &:last-child {
        background-color: rgb(190, 18, 48);
    }
`

const ProfileForm = ({ name }) => {

    const [password, setPassword] = React.useState('')
    const [confirmPass, setConfirmPass] = React.useState('')
    const [deleteStatus, setDeleteStatus] = React.useState(false)

    const handleDelete = () => {
        let accountType = localStorage.getItem('accountType')
        let id = localStorage.getItem('loggedIn')
        let gottenPass = undefined
        axios.get(`http://localhost:8080/${accountType === "Garage" ? 'garages' : 'users'}/${id}`).then(response => {
            console.log(response.data)
            if (accountType === 'Garage')
                gottenPass = response.data.garage_password;
            else
                gottenPass = response.data.user_password;
            alert(gottenPass)
            // if (password !== '') {
            //     if (password === confirmPass) {
            //         axios.get(`http://localhost:8080/${accountType === "Garage" ? 'garages' : 'users'}/${id}/${accountType === "Garage" ? 'deleteGarageAccount' : 'deleteAccount'}`)
            //         localStorage.removeItem('loggedIn')
            //         localStorage.removeItem('accountType')
            //         localStorage.removeItem('userName')
            //         window.location.replace(`http://localhost:3000`)
            //     }
            // } else {
            //     setDeleteStatus(true)
            // }
        })
    }

    return (
        <Container>
            <Section>
                <Label htmlFor="user-name">User Name</Label>
                <Input type="text" id="user-name" placeholder='User Name' value={name} />
            </Section>
            <Section>
                <Label htmlFor="password">New Password</Label>
                <Input type="password" id="password" placeholder='New Password'
                    onChange={(e) => setPassword(e.target.value)} />
            </Section>
            <Section>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input type="password" id="confirm-password" placeholder='Confirm Password'
                    onChange={(e) => setConfirmPass(e.target.value)} />
            </Section>
            {
                password === confirmPass ? null : <Section>
                    <Label style={{ color: "rgb(190, 18, 48)" }}>The password does not match</Label>
                </Section>
            }
            {
                deleteStatus ? <Section>
                    <Label style={{ color: "rgb(190, 18, 48)" }}>Type your password to continue</Label>
                </Section> : null
            }
            <Buttons>
                <Button onClick={handleDelete}>Delete Accout</Button>
                <Button>Save Changes</Button>
            </Buttons>
        </Container>
    )
}

export default ProfileForm