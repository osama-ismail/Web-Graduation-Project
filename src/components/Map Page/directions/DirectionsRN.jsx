import React from 'react';
import styled from 'styled-components';
import { directionsRoutes } from '../../Global Components/map/MainMapRN';

const Container = styled.div`
    border: 2px solid rgb(210, 210, 210, 0.8);
    border-radius: 5px;
    background-color: black;
    color: white;
    margin-top: 2rem;
    padding: 0.5rem 5px;
    transition: 250ms;
    width: 97%;
    height: 10rem;
    overflow-y: scroll;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover {
        border: 2px solid rgb(190, 18, 48);
        background-color: #141414;
    }
`

const Header = styled.h3`
    color: white;
`

const Instructions = styled.ol`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
`

const Line = styled.li`
    color: white;
    transition: 200ms;
    cursor: default;

    &:hover {
        color: rgb(190, 18, 48);
    }
`

const Directions = ({ directionsState }) => {

    const [displayInst, setDisplayInst] = React.useState(true)

    return (
        <Container>
            <Header>Directions</Header>
            <Instructions>
                {
                    directionsRoutes.map(instruction => {
                        return (
                            <Line displayInst={displayInst}>{instruction}</Line>
                        )
                    })
                }
            </Instructions>
        </Container>
    )
}

export default Directions