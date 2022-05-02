import React from 'react';
import styled from "styled-components";
import "../../Global-CSS/fade-in.css";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #2d3436;
    padding: 2em;
    transition: 0.3s;
    margin: 2em 2em 2em 2em;
    width: 15em;
    border: 12px solid #d63031;

    &:hover {
        background-color: #d63031;
    }
`

const MaskTop = styled.div`
    position: absolute;
    top: -13px;
    left: 0;
    width: 50%;
    height: 13px;
    background-color: #2d3436;
`

const MaskLeft = styled.div`
    position: absolute;
    top: -13px;
    left: -13px;
    width: 13px;
    height: 50%;
    background-color: #2d3436;
`

const MaskRight = styled.div`
    position: absolute;
    bottom: 0;
    right: -13px;
    width: 13px;
    height: 50%;
    background-color: #2d3436;
`

const MaskBottom = styled.div`
    position: absolute;
    bottom: -13px;
    right: -13px;
    width: 50%;
    height: 13px;
    background-color: #2d3436;
`

const LogoBox = styled.div`
    width: 60px;
    height: 60px;
`

const Header = styled.h2`
    color: #dcdde1;
    margin: 1em 0;
`

const Description = styled.p`
    font-size: 20px;
    color: #dcdde1;
`

const Card = (props) => {
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
        >
            {props.children}
            <Container>
                <MaskTop />
                <MaskLeft />
                <MaskRight />
                <MaskBottom />
                <LogoBox>
                    <i
                        className={props.services.className}
                        aria-hidden="true"
                        style={{
                            fontSize: "40px",
                            color: '#dcdde1',
                        }}
                    >
                    </i>
                </LogoBox>
                <Header>{props.services.title}</Header>
                <Description>{props.services.description}</Description>
            </Container>
        </div>
    )
}

export default Card
