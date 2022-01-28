import React from "react";
import "./form.css";
import { useState } from "react";
import styled from "styled-components";
import SignUp from "./sign-up/SignUp.jsx";
import SignIn from "./sign-in/SignIn.jsx";
import "../Global-CSS/fade-in.css";


const FormSlide = styled.div`
    width: 100%;
    transition: all 1s ease;
    transform: translateY(${(props) => props.slideIndex * -28}rem);
`


const Form = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = () => setSlideIndex(slideIndex === 0 ? 1 : 0)

    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        const { current } = domRef;
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            style={{
                margin: "0 5%"
            }}
        >
            <section className="form">
                <FormSlide slideIndex={slideIndex}>
                    <div className="header">
                        <h1>Get started and explore <br /> our services</h1>
                    </div>
                    <SignUp handleClick={handleClick} />
                </FormSlide>
                <FormSlide slideIndex={slideIndex}>
                    <div className="header">
                        <h1>Welcome Back</h1>
                    </div>
                    <SignIn handleClick={handleClick} />
                </FormSlide>
            </section>
        </div>
    )
}

export default Form