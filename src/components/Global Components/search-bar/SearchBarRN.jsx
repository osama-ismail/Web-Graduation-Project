import React from 'react';
import styled from 'styled-components';
import { searchPlace } from '../map/MainMapRN';

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

const SearchBarRN = ({ searchValue, setSearchValue }) => {
    return (
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
    )
}

export default SearchBarRN