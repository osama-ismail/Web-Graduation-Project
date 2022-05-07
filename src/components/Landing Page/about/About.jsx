import React from "react";
import styled from "styled-components";
import RedCar from "../../../assets/images/manWithCar.jpg";


const Container = styled.div`
    padding: 2em;
    display: flex;
    flex-flow: row wrap;
`

const ImageWrapper = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    margin-right: 3em;
`

const Img = styled.img`
    width: 100%;
`

const Article = styled.article`
    padding: 2rem 1rem;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SectionName = styled.h1`
    font-weight: 800;
    font-size: 45px;
    color: white;
`

const Paragraph = styled.p`
    font-size: 20px;
    margin-top: 2em;
    color: white;
`


const About = () => {
    return (
        <Container id="AboutElement">
            <ImageWrapper>
                <Img src={RedCar} />
            </ImageWrapper>
            <Article>
                <SectionName>
                    About <span style={{ color: "rgb(230, 40, 47)", fontStyle: "italic" }}>iDrive</span>
                </SectionName>
                <Paragraph>
                    A website/mobile application which groups all garages and facilitates contacting with nearest and appropriate car experts to solve your problem
                </Paragraph>
            </Article>
        </Container>
    )
}

export default About