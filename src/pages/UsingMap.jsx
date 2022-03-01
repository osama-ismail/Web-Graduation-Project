import React from 'react';
import styled from 'styled-components';
import MainMap from '../components/Global Components/map/MainMap';
import { searchPlace } from '../components/Global Components/map/MainMap';
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

const Map = () => {

    const [searchValue, setSearchValue] = React.useState('');

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
            </Left>
            <Right>
                <MainMap height="100%" width="100%" borderRadius="4px" />
            </Right>
        </Container>
    );
};

export default Map;