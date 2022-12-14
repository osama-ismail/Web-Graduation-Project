import React, { useState } from 'react';
import styled from "styled-components";
import GarageService from '../components/GarageHome Page/garage-service/GarageService';
import Footer from '../components/Global Components/footer/Footer';
import { slider } from "../iterated_variables/slider";
import { garageServices } from "../iterated_variables/garageServices";
import { advantages } from "../iterated_variables/advantages";
import { Mobile, Tablet } from '../components/responsive/Responsive';
import Team from '../components/GarageHome Page/team/Team';
import BackToTop from '../components/Global Components/backToTop/BackToTop';
import ParentNavbar from '../components/Global Components/parentNavbar/ParentNavbar';

const Container = styled.div`
    background-color: #0f0f0f;
    position: relative;
`

const BackgroundImg = styled.div`
    background-image: ${props => `url(${require("../assets/images/slider/" + slider[props.imgIndex])})`};
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 14rem 30px;
    transition: 300ms;

    ${Mobile({ background: "none" })}
`

const BackgroundText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const GarageName = styled.h1`
    font-size: 60px;
    color: white;
    margin: 0 0 30px 0;
`

const AboutGarage = styled.a`
    color: white;
    text-decoration: none;
    background-color: rgb(207, 37, 63);
    padding: 1em 3em;
    transition: 300ms;

    &:hover {
        background-color: rgb(190, 18, 47);
    }
`

const Arrows = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    ${Mobile({ display: "none" })}
`

const Left = styled.button`
    font-size: 30px;
    margin: 0 4px;
    padding: 1.5rem;
    cursor: pointer;
    background-color: rgb(207, 37, 63);
    border: none;
    transition: 400ms;
    color: white;

    &:hover {
        background-color: rgb(190, 18, 47);
    }
`

const Right = Left;

const Services = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
    padding: 3rem 1rem;
    align-items: stretch;
    background-color: #0f0f0f;
`

const AdvantagesContainer = styled.div`
    background-color: black;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 3rem 0;
`

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 35px;
    font-weight: 500;
    color: white;
`

const Advantages = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;

    ${Tablet({ flexDirection: "column" })}
`

const Advantage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 0 2rem;

    ${Tablet({ marginTop: "2rem" })}
`

const AdvantageLogo = styled.img`
    width: 80px;
    height: 80px;
`

const AdvantageName = styled.h3`
    font-family: 'Righteous', cursive;
    font-size: 25px;
    font-weight: 500;
    color: white;
    margin: 1rem 0;
`

const AdvantageDetail = styled.p`
    font-size: 16px;
    font-weight: 100;
    color: white;
    text-align: center;
`

const LoggedIn = () => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const incrementSliderIndex = () => {
        setSliderIndex((sliderIndex + 1) % 3)
    }

    const decrementSliderIndex = () => {
        if (sliderIndex !== 0)
            setSliderIndex((sliderIndex - 1) % 3)
        else
            setSliderIndex(2)
    }

    return (
        <Container>
            <ParentNavbar />
            <BackToTop />
            <BackgroundImg imgIndex={sliderIndex}>
                <BackgroundText>
                    <GarageName>Name of Garage <br /> from DataBase</GarageName>
                    <AboutGarage href="#">ABOUT US</AboutGarage>
                    <Arrows>
                        <Left onClick={decrementSliderIndex}>
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </Left>
                        <Right onClick={incrementSliderIndex}>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </Right>
                    </Arrows>
                </BackgroundText>
            </BackgroundImg>
            <Services>
                {
                    garageServices.map(service => {
                        return <GarageService
                            img={service.backgroundImg}
                            serviceName={service.label}
                        />
                    })
                }
            </Services>
            <AdvantagesContainer>
                <Title>Advantages</Title>
                <Advantages>
                    {
                        advantages.map(advantage => {
                            return (
                                <Advantage>
                                    <AdvantageLogo src={
                                        require("../assets/images/garage-advantages/" + advantage.logo)
                                    }
                                    />
                                    <AdvantageName>{advantage.name}</AdvantageName>
                                    <AdvantageDetail>{advantage.explain}</AdvantageDetail>
                                </Advantage>
                            )
                        })
                    }
                </Advantages>
            </AdvantagesContainer>
            <Team />
            <Footer />
        </Container>
    );
};

export default LoggedIn;