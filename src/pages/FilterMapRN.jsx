import React from 'react';
import styled from 'styled-components';
import MapFiltered from '../components/Global Components/map/MapFiltered';
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

const FilterMapRN = () => {
    return (
        <Container>
            <MapFiltered height="100%" width="100%" borderRadius="4px" />
        </Container>
    );
};

export default FilterMapRN;