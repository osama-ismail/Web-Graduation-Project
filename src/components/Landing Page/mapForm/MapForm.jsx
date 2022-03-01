import React from 'react';
import styled from 'styled-components';
import MapForForm from '../../Global Components/map/MapForForm';
import { submitLocation } from '../../../backend/handleRegister';

const Container = styled.div`
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: fixed;
    background-color: #2e2e2e;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 9px;
    box-shadow: 0 0 9px #2e2e2e;
`

const ExitBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 200ms;
    color: #eee;
    align-self: flex-end;

    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Header = styled.h1`
    fontSize: 120%;
    color: #eee;
    text-align: center;
    margin-bottom: 1rem;
`

const SubmitBtn = styled.button`
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    font-size: 20px;
    border: none;
    background-color: rgb(190, 18, 47);
    color: white;
    cursor: pointer;
    transition: 300ms;
    border-radius: 4px;

    &:hover {
        background-color: #aaa;
        color: #222;
    }
`

let location = undefined;
export const setLocation = (obj) => {
    location = obj;
}

const MapForm = ({ closeMapForm }) => {

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
            <Header>Choose your location</Header>
            <MapForForm width="70%" height="70%" borderRadius="9px" />
            <SubmitBtn onClick={(e) => submitLocation(e, location)}>Submit</SubmitBtn>
        </Container>
    );
}

export default MapForm;