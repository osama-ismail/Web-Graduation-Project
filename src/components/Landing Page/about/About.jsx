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
                    About <span style={{ color: "rgb(230, 18, 47)", fontStyle: "italic" }}>Tinker</span>
                </SectionName>
                <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi repellat, laudantium similique
                    quibusdam aliquid error numquam deleniti quidem
                    ullam obcaecati eos, quos fuga perspiciatis esse excepturi est sapiente
                    veritatis dolor?<br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi repellat, laudantium similique
                    quibusdam aliquid error numquam deleniti quidem
                    ullam obcaecati eos, quos fuga perspiciatis esse excepturi est sapiente
                    veritatis dolor?<br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi repellat, laudantium similique
                    quibusdam aliquid error numquam deleniti quidem
                    ullam obcaecati eos, quos fuga perspiciatis esse excepturi est sapiente
                    veritatis dolor?<br />
                </Paragraph>
            </Article>
        </Container>
    )
}

export default About