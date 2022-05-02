import React from 'react';
import styled from 'styled-components';
import MapFiltered from '../components/Global Components/map/MapFiltered';
import LeftSideRN from '../components/Map Page/left-side/LeftSideRN';
import { MediumScreen, Mobile } from '../components/responsive/Responsive';

const Container = styled.div`
    position: relative;
    display: flex;
    height: ${() => window.innerHeight}px;
    background-color: #0f0f0f;
    padding: 5px;

    ${MediumScreen({ flexDirection: "column-reverse", height: '110vh' })}
    ${Mobile({ flexDirection: "column-reverse", height: '130vh' })}
`

const Right = styled.section`
    flex: 2;
    margin-left: 3px;
    
    ${MediumScreen({ height: '100vh' })}
`

const FilterMapRN = () => {
    return (
        <Container>
            <LeftSideRN />
            <Right>
                <MapFiltered height="100%" width="100%" borderRadius="4px" />
            </Right>
        </Container>
    );
};

export default FilterMapRN;