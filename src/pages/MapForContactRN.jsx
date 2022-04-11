import React from 'react';
import MapContactRN from '../components/Global Components/map/MapContactsRN';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

const Map = () => {
    return (
        <Container>
            <MapContactRN height="100%" width="100%" borderRadius="0" />
        </Container>
    );
};

export default Map;