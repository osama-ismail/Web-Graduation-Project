import React from 'react';
import styled from "styled-components";

const Container = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: rgb(200, 25, 30);
    right: 30px;
    bottom: 30px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`

const returnToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const BackToTop = () => {
    return (
        <Container onClick={returnToTop}>
            <i
                class="fa fa-arrow-up"
                aria-hidden="true"
                style={{ color: "white", fontSize: "35px" }}
            >
            </i>
        </Container>
    );
};

export default BackToTop;
