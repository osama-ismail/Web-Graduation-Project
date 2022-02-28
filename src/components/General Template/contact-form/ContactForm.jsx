import React from 'react';
import styled from 'styled-components';
import { MediumScreen, Tablet } from '../../responsive/Responsive';
import Map from '../../Global Components/map/Map';

const Container = styled.div`
    margin: 1rem 0 3rem 0;
    display: flex;
    justify-content: space-around;

    ${MediumScreen({ flexDirection: "column", alignItems: "center" })}
`

const Form = styled.form`
    height: 350px;
    width: 40%;
    display: flex;
    flex-direction: column;

    ${MediumScreen({ margin: "2rem 0", width: "80%" })}
`

const Box = styled.div`
    display: flex;
    justify-content: space-between;

    ${Tablet({ flexDirection: "column" })}
`

const Input = styled.input`
    background-color: black;
    padding: 12px 5px 12px 15px;
    color: white;
    font-size: 15px;
    border: none;
    outline: none;
    border: 1px solid rgb(210, 210, 210, 0.5);
    margin-bottom: 2rem;

    &.input1 {
        flex: 1;
        margin-right: 10px;
        ${Tablet({ marginRight: "0" })}
    }
    &.input2 {
        flex: 1;
        margin-left: 10px;
        ${Tablet({ marginLeft: "0" })}
    }
`

const TextArea = styled.textarea`
    margin-bottom: 2rem;
    background-color: black;
    padding: 12px 5px 12px 15px;
    color: white;
    font-size: 15px;
    border: none;
    outline: none;
    min-height: 60px;
    border: 1px solid rgb(210, 210, 210, 0.5);

    ${Tablet({ height: "4rem" })}
`

const ContactFom = () => {
    return (
        <Container>
            <Map width="600px" height="350px" />
            <Form>
                <Box>
                    <Input className='input1' type="text" placeholder='Name *' />
                    <Input className='input2' type="text" placeholder='Phone' />
                </Box>
                <Input type="email" placeholder='Email' />
                <TextArea placeholder='Message *' rows={4} />
                <Input style={{
                    backgroundColor: "rgb(230, 18, 47)",
                    cursor: "pointer",
                    borderRadius: "5px"
                }} type="submit" value="Send Message" />
            </Form>
        </Container>
    )
}

export default ContactFom;