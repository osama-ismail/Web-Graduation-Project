import React from 'react';
import styled from 'styled-components';
import MainMapRNgarage from '../components/Global Components/map/MainMapRNgarage';
import LeftSideRNgarage from '../components/Map Page/left-side/LeftSideRNgarage';
import { MediumScreen, Mobile } from '../components/responsive/Responsive';

const Container = styled.div`
    position: relative;
    display: flex;
    height: ${() => window.innerHeight}px;
    background-color: #0f0f0f;
    padding: 5px;

    ${MediumScreen({ flexDirection: "column-reverse", height: '110vh' })}
    ${Mobile({ flexDirection: "column-reverse", height: '160vh' })}
`

const Right = styled.section`
    flex: 2;
    margin-left: 3px;
    
    ${MediumScreen({ height: '100vh' })}
`

const UsingMapReactNative = () => {
    return (
        <Container>
            <LeftSideRNgarage />
            <Right>
                <MainMapRNgarage height="100%" width="100%" borderRadius="4px" />
            </Right>
        </Container>
    );
};

export default UsingMapReactNative;