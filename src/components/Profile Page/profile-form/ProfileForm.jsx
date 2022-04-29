import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MediumScreen } from '../../responsive/Responsive'

const Container = styled.div`
    color: white;
    border: 2px solid rgb(190, 18, 48);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem 2rem;
    margin: 0 10rem;
    transform: translateY(-10%);
    background-color: #0a0a0a;

    ${MediumScreen({
    transform: "translateY(-10%)",
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

const SelectList = styled.select`
    background-color: #0a0a0a;
    padding: 0.5rem 0;
    margin: 1rem 0;
    color: white;
    cursor: pointer;
    background-color: black;
`

const Option = styled.option``

const ProfileForm = () => {

    const [password, setPassword] = React.useState('')
    const [garage, setGarage] = React.useState(null)
    const [garageName, setGarageName] = React.useState('')
    const [capacity, setCapacity] = React.useState(0)
    const [phone, setPhone] = React.useState('')
    const [startTime, setStartTime] = React.useState('')
    const [endTime, setEndTime] = React.useState('')
    const [carType, setCarType] = React.useState('BMW')
    const [showResult, setShowResult] = React.useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/garages/${localStorage.getItem('loggedIn')}`)
            .then(response => {
                let garage = response.data
                setGarage(response.data)
                setGarageName(garage.garageName)
                setCapacity(garage.capacity)
                setPhone(garage.garagePhoneNumber)
                setStartTime(garage.garageStartTime)
                setEndTime(garage.garageEndTime)
                setCarType(garage.carType)
            })
    }, [])

    const handleSubmit = () => {
        axios.post(
            `http://localhost:8080/garages/${garage.garageID}/profile/editGarageNameAndPasswordAndTimes`,
            JSON.stringify([garageName, password, startTime, endTime, capacity, phone, carType]),
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Accept": "application/json"
                }
            }
        ).then(response => {
            setShowResult(true)
        })
    }

    return (
        <Container>
            <Section>
                <Label htmlFor="garage-name">Garage Name</Label>
                <Input
                    type="text"
                    id="garage-name"
                    placeholder='Garage Name'
                    value={garageName}
                    onChange={(e) => setGarageName(e.target.value)}
                />
            </Section>
            <Section>
                <Label htmlFor='start-time'>Start Time</Label>
                <Input
                    type="text"
                    id="start-time"
                    placeholder='Start Time'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </Section>
            <Section>
                <Label htmlFor="end-time">End Time:</Label>
                <Input
                    type="text"
                    id="end-time"
                    placeholder='End Time'
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </Section>
            <Section>
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                    type="number"
                    id="capacity"
                    placeholder='Capacity'
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                />
            </Section>
            <Section>
                <Label htmlFor="phone">Phone</Label>
                <Input
                    type="number"
                    id="phone"
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Section>
            <Section>
                <Label htmlFor="car-type">Supported Car Type</Label>
                <SelectList onChange={e => setCarType(e.target.value)}>
                    <Option value="BMW">BMW</Option>
                    <Option value="Toyotta">Toyotta</Option>
                    <Option value="Audi">Audi</Option>
                </SelectList>
            </Section>
            <Section>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />
            </Section>
            {showResult ? (
                <Section>
                    <Label style={{ color: 'rgb(190, 18, 48)' }}>Profile Updated Successfully</Label>
                </Section>
            ) : null}
            <Buttons>
                <Button
                    onClick={handleSubmit}
                >Save Changes</Button>
            </Buttons>
        </Container>
    )
}

export default ProfileForm