import background from "../../../assets/images/slider/slider-img-1.jpg";
import styled from "styled-components";
import { Link } from "react-scroll";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    minHeight: "46.875rem",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    borderBottomRadius: "50%",
}

const TextWrapper = styled.div`
    margin: 10em 7em;
`

const Title1 = styled.h1`
    color: white;
    font-weight: 900;
    font-size: 4rem;
    animation-name: title1-animation;
    animation-duration: 12s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0;

    @keyframes title1-animation {
        0% {
            transform: translateY(-0.5em);
            opacity: 0;
        } 10% {
            transform: translateY(0);
            opacity: 1;
        } 100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const Title2 = styled.h1`
    color: white;
    font-weight: 900;
    font-size: 2.8rem;

    animation-name: title2-animation;
    animation-duration: 12s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0;

    @keyframes title2-animation {
        10% {
            transform: translateY(60%);
            opacity: 0;
        } 30% {
            transform: translateY(0);
            opacity: 0.8;
        } 60% {
            opacity: 1;
        } 100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const Paragraph = styled.p`
    margin-top: 2rem;
    color: white;
    font-size: 1.2rem;
    opacity: 0;

    animation-name: paragraph-animation;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;

    @keyframes paragraph-animation {
        0% {
            opacity: 1;
            transform: translateX(-300%);
            font-style: italic;
        } 60% {
            transform: translateX(0);
            opacity: 0.8;
        } 100% {
            opacity: 1;
            transform: translateX(0);
            font-style: default;
        }
    }
`

const GetStarted = styled.button`
    margin-top: 2em;
    font-size: 1.8em;
    border: none;
    cursor: pointer;
    padding: 0.4em 0.7em;
    border-radius: 40px;
    background-color: white;
    color: rgb(230, 18, 47);
    font-weight: bold;
    transition: 150ms;
    opacity: 0;

    &:hover {
        color: white;
        background-color: rgb(230, 18, 47);
    }

    animation-name: button-animation;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;

    @keyframes button-animation {
        0% {
            opacity: 0;
            transform: translateX(-1000%) rotate(-500deg);
        } 30% {
            opacity: 0.1;
        } 70% {
            opacity: 0.9;
            transform: translateX(0%) rotate(0);
        } 100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
`

const Background = () => {
    return (
        <div style={backgroundStyle}>
            <TextWrapper>
                <Title1>Car Repair</Title1>
                <Title2>And Maintenance Service</Title2>
                <Paragraph>
                    Stay in touch with car experts, make your driving easier
                </Paragraph>
                <Link
                    to="FormBackgroundElement"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <GetStarted>Get Started</GetStarted>
                </Link>
            </TextWrapper>
        </div>
    )
}

export default Background
