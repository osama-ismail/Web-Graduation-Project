import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import workingImg from '../../../assets/images/working.jpg';
import { team } from '../../../iterated_variables/team';
import { Tablet } from '../../responsive/Responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Regions = styled.div`
    display: flex;
    flex-direction: row;

    ${Tablet({ flexDirection: "column" })}
`

const Region = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const TeamMembers = styled.div`
    margin: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slider = styled.div`
    margin-top: 1rem;
    width: 320px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`

const Member = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 4rem 0;
    min-width: 320px;
    transition: 300ms;
    transform: ${props => `translate(${-props.sliderIndex * 100}%)`};
`

const MemberImg = styled.div`
    background-image: ${props => `url(${require("../../../assets/images/garage-team/" + props.img)})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    height: 160px;
    width: 160px;
    transition: 400ms;

    &:hover {
        background-size: 110% 110%;
    }
`

const NameSign = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;
`

const MemberName = styled.span`
    color: white;
    font-weight: bold;
`

const MemberSign = styled.div`
    background-image: ${props => `url(${require("../../../assets/images/garage-team/" + props.sign)})`};
    height: 80px;
    width: 80px;
`

const Arrows = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HoverEffect = styled.div`
    background-color: #222;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    transition: 400ms;
    opacity: 0.4;
`

const Left = styled.div`
    padding: 2rem;
    margin: 0 10px;
    background-color: rgb(207, 37, 63);
    cursor: pointer;
    transition: 400ms;
    position: relative;
    color: white;
    overflow: hidden;
    z-index: 100;
    font-size: 30px;

    &:hover ${HoverEffect} {
        top: 0;
    }

    &:hover {
        color: 
    }
`

const Right = Left;

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 30px;
    font-weight: 500;
    color: white;
`

const Img = styled.div`
    background-image: url(${workingImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;

    ${Tablet({ height: "100vh" })}
`

const Team = () => {
    const [sliderIndex, setSliderIndex] = useState(0)

    const incrementSlider = () => {
        setSliderIndex((sliderIndex + 1) % 3)
    }

    const decrementSlider = () => {
        if (sliderIndex !== 0)
            setSliderIndex((sliderIndex - 1) % 3)
        else
            setSliderIndex(2)
    }

    return (
        <Container>
            <Regions>
                <Region>
                    <TeamMembers>
                        <Title>Our Team</Title>
                        <Slider>
                            {
                                team.map(member => {
                                    return (
                                        <Member sliderIndex={sliderIndex}>
                                            <MemberImg img={member.img} />
                                            <NameSign>
                                                <MemberName>{member.name}</MemberName>
                                                <MemberSign sign={member.signature} />
                                            </NameSign>
                                        </Member>
                                    )
                                })
                            }
                        </Slider>
                        <Arrows>
                            <Left onClick={decrementSlider}>
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                                <HoverEffect />
                            </Left>
                            <Right onClick={incrementSlider}>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                <HoverEffect />
                            </Right>
                        </Arrows>
                    </TeamMembers>
                </Region>
                <Region>
                    <Img />
                </Region>
            </Regions>
        </Container>
    )
}

export default Team