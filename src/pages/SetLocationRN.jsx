import React from 'react';
import MapForForm from '../components/Global Components/map/MapForForm';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;
`

const SetLocationRN = () => {
    return (
        <Container>
            <MapForForm height="100%" width="100%" borderRadius="10px" />
        </Container>
    );
};

export default SetLocationRN;