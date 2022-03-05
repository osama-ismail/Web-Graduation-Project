import React from 'react';
import styled from 'styled-components';
import MainMap from '../components/Global Components/map/MainMap';
import {
    searchPlace,
    clearMarkers,
    calculateRoute,
    lookingFor
} from '../components/Global Components/map/MainMap';
import { MediumScreen } from '../components/responsive/Responsive';

const Container = styled.div`
    position: relative;
    display: flex;
    height: ${() => window.innerHeight}px;
    background-color: #0f0f0f;
    padding: 5px;

    ${MediumScreen({ flexDirection: "column-reverse" })}
`

const Left = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1.5;
    border: 1px solid #aaa;
    padding: 7px;
    // overflow: scroll;
`

const Right = styled.section`
    flex: 2;
    margin-left: 3px;
`

const Input = styled.input`
    border: none;
    outline: none;
    padding: 7px 0;
    background: none;
    color: white;
    font-size: 16px;
    transition: 400ms;
    width: 0;
`

const SearchWrapper = styled.div`
    background-color: #636e72;
    padding: 3px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover > .search-txt {
        width: 18em;
        padding: 0 7px;
    }
`

const SearchButton = styled.button`
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #2d3436;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
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

const ListDiv = styled.div`
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
    background-color: rgb(190, 18, 47);
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

const Map = () => {

    const [searchValue, setSearchValue] = React.useState('');
    const [radius, setRadius] = React.useState(0);

    let directions = '';

    return (
        <Container>
            <Left>
                <SearchWrapper>
                    <Input
                        className="search-txt"
                        type="text"
                        placeholder="Search a location"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchButton onClick={() => searchPlace(searchValue)}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </SearchButton>
                </SearchWrapper>
                <Buttons>
                    <Button onClick={() => clearMarkers()}>Delete all markers</Button>
                    <Button onClick={() => calculateRoute()}>Create Route</Button>
                </Buttons>
                <ListDiv>
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
                </ListDiv>
            </Left>
            <Right>
                <MainMap height="100%" width="100%" borderRadius="4px" />
            </Right>
        </Container>
    );
};

export default Map;