import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../Global Components/search-bar/SearchBar';
import {
    clearMarkers,
    calculateRoute,
    lookingFor
} from '../../Global Components/map/MainMap';
import ListDiv from '../list-div/ListDiv';
import Directions from '../directions/Directions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1.5;
    border: 1px solid #aaa;
    padding: 7px;
    overflow-y: scroll;
`

const Buttons = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
`

const Button = styled.button`
    background-color: black;
    border: 1px solid rgb(210, 210, 210, 0.5);
    color: white;
    font-size: 110%;
    padding: 0.4rem 0.7rem;
    cursor: pointer;
    transition: 200ms;
    margin-right: 0.5rem;

    &:hover {
        background-color: rgb(190, 18, 48);
    }
`

const LeftSide = () => {

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
            <ListDiv />
            <Directions directionsState={directionsState} />
        </Container>
    )
}

export default LeftSide