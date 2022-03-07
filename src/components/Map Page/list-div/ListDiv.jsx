import React from 'react';
import styled from 'styled-components';
import { lookingFor } from '../../Global Components/map/MainMap';

const Container = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`

const LookFor = styled.span`
    color: white;
    font-size: 120%;
    margin-right: 0.4rem;
`

const DropList = styled.select`
    padding: 3px;
    font-size: 110%;
    background-color: black;
    color: white;
    outline: none;
`

const Radius = styled.input`
    border: none;
    outline: none;
    padding: 5px 0;
    background: none;
    color: white;
    font-size: 16px;
    transition: 400ms;
    background-color: black;
    margin: 0 0.5rem;
    border: 1px solid rgb(210, 210, 210, 0.5);
`

const ListDiv = () => {

    const [radius, setRadius] = React.useState(0);

    return (
        <Container>
            <LookFor>Look for </LookFor>
            <DropList onChange={(e) => lookingFor(e.target.value, radius)}>
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
        </Container>
    )
}

export default ListDiv