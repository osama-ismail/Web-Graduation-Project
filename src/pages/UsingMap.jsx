import React from 'react';
import styled from 'styled-components';
import MainMap from '../components/Global Components/map/MainMap';
import LeftSide from '../components/Map Page/left-side/LeftSide';
import { MediumScreen } from '../components/responsive/Responsive';

const Container = styled.div`
    position: relative;
    display: flex;
    height: ${() => window.innerHeight}px;
    background-color: #0f0f0f;
    padding: 5px;

    ${MediumScreen({ flexDirection: "column-reverse" })}
`

const Right = styled.section`
    flex: 2;
    margin-left: 3px;
`

const Map = () => {
    return (
        <Container>
            <LeftSide />
            <Right>
                <MainMap height="100%" width="100%" borderRadius="4px" />
            </Right>
        </Container>
    );
};

export default Map;