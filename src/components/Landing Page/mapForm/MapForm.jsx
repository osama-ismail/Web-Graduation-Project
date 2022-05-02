import React from 'react';
import styled from 'styled-components';
import MapForForm from '../../Global Components/map/MapForForm';
import { submitLocation } from '../../../backend/handleRegister';

const Container = styled.div`
    width: 100%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: fixed;
    background-color: #1a1a1a;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 9px;
    box-shadow: 0 0 9px #1a1a1a;
`

const ExitBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 200ms;
    color: #dcdde1;
    align-self: flex-end;

    &:hover {
        color: rgb(230, 40, 47);
    }
`

const Header = styled.h1`
    fontSize: 120%;
    color: #dcdde1;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

const SubmitBtn = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    font-size: 20px;
    border: none;
    background-color: rgb(230, 40, 47);
    color: #dcdde1;
    cursor: pointer;
    transition: 300ms;
    border-radius: 4px;

    &:hover {
        background-color: #b2bec3;
        color: #2d3436;
    }
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    background-color: black;
    padding: 6px 5px 6px 10px;
    color: #dcdde1;
    font-size: 17px;
    border: none;
    outline: none;
    border: 1px solid rgb(210, 210, 210, 0.5);
    border-radius: 3px;
    transition: 300ms;
    margin: 5px 0;

    &:focus {
        border: 1px solid #d63031;
    }
`

const SelectList = styled.select`
    background-color: #0a0a0a;
    padding: 0.5rem 0;
    color: white;
    cursor: pointer;
    background-color: black;
    width: 100%;
`

const Option = styled.option``

let location = undefined;
export const setLocation = (obj) => {
    location = obj;
}

const MapForm = ({ closeMapForm }) => {

    const [startTime, setStartTime] = React.useState('')
    const [endTime, setEndTime] = React.useState('')
    const [carType, setCarType] = React.useState('')

    return (
        <Container>
            <ExitBtn onClick={closeMapForm}>
                <i
                    className="fa fa-times"
                    aria-hidden="true"
                    style={{
                        fontSize: "150%",
                        color: "inherit",
                        cursor: "pointer",
                    }}
                ></i>
            </ExitBtn>
            <Header>Choose your location, start time, end time and car type</Header>
            <MapForForm width="90%" height="70%" borderRadius="9px" />
            <Inputs>
                <Input
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                    type="text"
                    required
                    placeholder="Start Time - hh:mm:ss"
                />
                <Input
                    value={endTime}
                    onChange={e => setEndTime(e.target.value)}
                    type="text"
                    required
                    placeholder="End Time - hh:mm:ss"
                />
                <SelectList onChange={e => setCarType(e.target.value)}>
                    <Option value="BMW">BMW</Option>
                    <Option value="Toyotta">Toyotta</Option>
                    <Option value="Audi">Audi</Option>
                </SelectList>
            </Inputs>
            <SubmitBtn onClick={e => submitLocation(e, location, startTime, endTime, carType)}>Submit</SubmitBtn>
        </Container>
    );
}

export default MapForm;