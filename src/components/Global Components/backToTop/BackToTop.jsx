import React from 'react';
import styled from "styled-components";

const Container = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: rgb(190, 25, 30);
    right: 30px;
    bottom: 30px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    animation-name: button-fade-in;
    animation-duration: 400ms;
    animation-timing-function: ease-in-out;

    @keyframes button-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`

const returnToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const BackToTop = () => {
    const [showButton, setShowButton] = React.useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 40) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    })
    if (showButton) {
        return (
            <Container onClick={returnToTop}>
                <i
                    className="fa fa-arrow-up"
                    aria-hidden="true"
                    style={{ color: "white", fontSize: "35px" }}
                >
                </i>
            </Container>
        );
    } else {
        return null
    }
};

export default BackToTop;
