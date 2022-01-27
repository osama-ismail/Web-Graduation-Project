import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
    background-color: #e92132;
    height: 5px;
    width: 0%;
    animation-name: line-expanding;
    animation-duration: 8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @keyframes line-expanding {
        from {
            width: 0%;
        } to {
            width: 100%;
        }
    }
`

const AnimatedLine = () => {
    return (
        <Line />
    );
};

export default AnimatedLine;
