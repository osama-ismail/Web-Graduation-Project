import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MediumScreen } from '../../responsive/Responsive'

const Container = styled.div`
    color: #dfe6e9;
    border: 2px solid #d63031;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem 2rem;
    margin: 0 10rem;
    transform: translateY(-10%);
    background-color: #0a0a0a;

    ${MediumScreen({
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
    color: #dcdde1;
`

const Input = styled.input`
    background-color: black;
    border: 2px solid black;
    padding: 0.6rem 1rem;
    color: #f5f6fa;
    font-size: 120%;
    margin-top: 6px;
    outline: none;
    border-radius: 7px;

    &:focus {
        border: 2px solid #d63031;
    }
`

const Buttons = styled.section`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin: 0.4rem 1rem;
    border: 1px solid #f5f6fa;
    background-color: black;
    color: white;
    padding: 0.4rem 1rem;
    font-size: 120%;
    cursor: pointer;
    background-color: #d63031;
`

const SelectList = styled.select`
    background-color: #0a0a0a;
    padding: 0.5rem 0;
    margin: 1rem 0;
    color: white;
    cursor: pointer;
    background-color: black;
    border-radius: 5px;
`

const Option = styled.option`
    font-size: 120%;
`

const ProfileForm = () => {

    const [expertName, setExpertName] = React.useState('')
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
        if (localStorage.getItem('isAdmin') === 'true') {
            axios.post(
                `http://localhost:8080/users/${localStorage.getItem('loggedIn')}/profile/editUserNameAndPassword`,
                JSON.stringify([expertName, password, phone]),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => {
                setShowResult(true)
            })
        } else {
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
    }

    return (
        <Container>
            {localStorage.getItem('isAdmin') === 'true' ? (
                <Section>
                    <Label htmlFor="expert-name">User Name</Label>
                    <Input
                        type="text"
                        id="expert-name"
                        placeholder='User Name'
                        value={garageName}
                        onChange={(e) => setExpertName(e.target.value)}
                    />
                </Section>
            ) : (
                <div>
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
                            placeholder='Start Time - hh:mm:ss'
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </Section>
                    <Section>
                        <Label htmlFor="end-time">End Time:</Label>
                        <Input
                            type="text"
                            id="end-time"
                            placeholder='End Time - hh:mm:ss'
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
                        <Label htmlFor="car-type">Supported Car Type</Label>
                        <SelectList onChange={e => setCarType(e.target.value)}>
                            <Option value="BMW">BMW</Option>
                            <Option value="Toyotta">Toyotta</Option>
                            <Option value="Audi">Audi</Option>
                        </SelectList>
                    </Section>
                </div>
            )}
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
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />
            </Section>
            {showResult ? (
                <Section>
                    <Label style={{ color: '#d63031' }}>Profile Updated Successfully</Label>
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