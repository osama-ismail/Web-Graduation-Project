import "./form.css";
import { useState } from "react";
import styled from "styled-components";
import SignUp from "./sign-up/SignUp.jsx";
import SignIn from "./sign-in/SignIn.jsx";


const FormSlide = styled.div`
    width: 100%;
    transition: all 1s ease;
    transform: translateY(${(props) => props.slideIndex * -28}rem);
`


const Form = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = () => setSlideIndex(slideIndex === 0 ? 1 : 0)

    return (
        <div className="form">
            <FormSlide slideIndex={slideIndex}>
                <div className="header">
                    <h1>Get started and explore <br /> our services</h1>
                </div>
                <SignUp handleClick={handleClick} />
            </FormSlide>
            <FormSlide slideIndex={slideIndex}>
                <div className="header">
                    <h1>Get started and explore <br /> our services</h1>
                </div>
                <SignIn handleClick={handleClick} />
            </FormSlide>
        </div>
    )
}

export default Form