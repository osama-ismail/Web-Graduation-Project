import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 200px;
    border: 2px solid green;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`

const Header = styled.h3`
    text-transform: uppercase;
    margin-bottom: 10px;
`

const Form = styled.section``

const Part = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
`

const Text = styled.span``

const Cover = styled.div`
    display: flex;
    align-items: center;
`

const Label = styled.label`
    cursor: pointer;
    color: #aaa;
`

const Input = styled.input`
    margin-right: 10px;
    cursor: pointer;
`

const Price = styled.span`
    padding: 4px 0 4px 10px;
    background-color: black;
    border: 1px solid rgb(210, 210, 210, 0.2);
    color: #aaa;
`

const Total = styled.span`
    font-size: 110%;
    color: rgb(190, 18, 47);
`

const HoverEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    transform: translateY(100%);
    top: 0;
    left: 0;
    background-color: #555;
    transition: 300ms;
`

const SubmitBtn = styled.button`
    color: white;
    background-color: rgb(190, 18, 47);
    padding: 10px 25px;
    width: 100%;
    border: none;
    cursor: pointer;
    transtion: 150ms;
    position: relative;
    overflow: hidden;

    &:hover ${HoverEffect} {
        transform: translateY(0);
    }
`

const BtnText = styled.span`
    font-size: 120%;
`

const Calculator = () => {
    return (
        <Container>
            <Header>Online Calculator</Header>
            <Form>
                <Part>
                    <Label htmlFor="price">Price</Label>
                    <Price>$50</Price>
                </Part>
                <Part>
                    <Text>Use Delivery</Text>
                    <Cover>
                        <Input id="delivery" type="checkbox" />
                        <Label htmlFor="delivery">Delivery</Label>
                    </Cover>
                </Part>
                <Part>
                    <Label htmlFor="">Total Price</Label>
                    <Total>$50</Total>
                </Part>
                <SubmitBtn>
                    <BtnText>Make Order</BtnText>
                    <HoverEffect />
                </SubmitBtn>
            </Form>
        </Container>
    )
}

export default Calculator;