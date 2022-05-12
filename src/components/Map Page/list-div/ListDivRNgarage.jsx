import React from 'react';
import styled from 'styled-components';
import { lookingFor } from '../../Global Components/map/MainMapRNgarage';

const Container = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
`

const LookFor = styled.span`
    color: white;
    font-size: 120%;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    `

const DropList = styled.select`
    padding: 3px;
    font-size: 110%;
    background-color: black;
    color: white;
    outline: none;
    margin-bottom: 0.4rem;
    border-radius: 5px;

    &:focus {
        border: 1px solid rgb(190, 18, 38);
    }
`

const Radius = styled.input`
    border: none;
    outline: none;
    padding: 0.4rem;
    background: none;
    color: white;
    font-size: 16px;
    transition: 400ms;
    background-color: black;
    border: 1px solid rgb(210, 210, 210, 0.5);
    border-radius: 5px;

    &:focus {
        border: 1px solid rgb(190, 18, 38);
    }
`

const Submit = styled.button`
    background-color: black;
    border: 1px solid rgb(210, 210, 210, 0.8);
    border-radius: 5px;
    margin-top: 0.4rem;
    color: white;
    padding: 0.4rem;
    cursor: pointer;
    font-size: 110%;

    transition: 300ms;

    &:hover {
        background-color: rgb(190, 18, 38);
    }
`

const ListDiv = () => {

    const [radius, setRadius] = React.useState(0);
    const [value, setValue] = React.useState('');

    return (
        <Container>
            <LookFor>Search for:</LookFor>
            <DropList onChange={(e) => setValue(e.target.value)}>
                <optgroup label="Gas station">
                    <option>Petrol</option>
                    <option>Deisel</option>
                </optgroup>
                <option>Resturants</option>
                <option>Hospitals</option>
                <option>Hotels</option>
            </DropList>
            <Radius
                type="number"
                placeholder="radius in meters"
                onChange={(e) => setRadius(e.target.value)}
            />
            <Submit onClick={() => lookingFor(value, radius)}>Submit</Submit>
        </Container>
    )
}

export default ListDiv