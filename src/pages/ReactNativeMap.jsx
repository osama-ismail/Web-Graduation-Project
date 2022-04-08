import React from 'react';
import ServiceMap from '../components/Global Components/map/ServiceMap';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

const Map = () => {
    return (
        <Container>
            <ServiceMap height="100%" width="100%" borderRadius="0" />
        </Container>
    );
};

export default Map;