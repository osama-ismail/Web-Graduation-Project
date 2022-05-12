import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../Global Components/search-bar/SearchBar';
import {
    clearMarkers,
    calculateRoute
} from '../../Global Components/map/MainMapRNgarage';
import ListDivRNgarage from '../list-div/ListDivRNgarage';
import DirectionsRNgarage from '../directions/DirectionsRNgarage';
import { MediumScreen } from '../../responsive/Responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    flex: 1;
    border: 1px solid #aaa;
    padding: 7px;
    border-radius: 5px;

    ${MediumScreen({ marginTop: '0.6rem' })}
`

const Buttons = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const Button = styled.button`
    background-color: black;
    border: 1px solid rgb(210, 210, 210, 0.5);
    color: white;
    font-size: 110%;
    padding: 0.4rem 0.7rem;
    cursor: pointer;
    transition: 200ms;
    margin-bottom: 1rem;
    width: 100%;

    &:hover {
        background-color: rgb(190, 18, 48);
    }
`

const LeftSideRNgarage = () => {

    const [searchValue, setSearchValue] = React.useState('')
    const [directionsState, setState] = React.useState(false)

    return (
        <Container>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <Buttons>
                <Button onClick={() => clearMarkers()}>Delete all markers</Button>
                <Button onClick={() => {
                    calculateRoute()
                    setState(!directionsState)
                }
                }>Create Route</Button>
            </Buttons>
            <ListDivRNgarage />
            <DirectionsRNgarage directionsState={directionsState} />
        </Container>
    )
}

export default LeftSideRNgarage