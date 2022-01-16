import React from "react";
import styled from "styled-components";
import RedCar from "../../assets/images/RedCar.png";


const Container = styled.div`
    padding: 2em;
    display: flex;
    flex-flow: row wrap;
`

const Img = styled.img`
    flex: 1;
`

const Article = styled.article`
    padding: 2rem 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SectionName = styled.h1`
    font-weight: 800;
    font-size: 45px;
`

const Paragraph = styled.p`
    font-size: 20px;
    margin-top: 2em;
`


const About = () => {
    return (
        <Container>
            <Img src={RedCar} />
            <Article>
                <SectionName>About App</SectionName>
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