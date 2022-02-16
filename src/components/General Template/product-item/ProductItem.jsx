import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    background-color: black;
    margin: 0.5rem 0;
`

const Buttons = styled.div`
    color: white;
    opacity: 0;
    display: none;
    transition: 0.5s;
    transform: translateY(500%);
`

const Image = styled.div`
    background-image: ${props => `url(${require("../../../assets/images/products/" + props.image)})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 200px;
    width: 200px;
    transition: 300ms;
    display: flex;
    align-items: flex-end;

    &:hover {
        background-size: 101% 101%;
        transform: translateY(-1%) translateX(-1%);
    }

    &:hover ${Buttons} {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transform: translateY(0%);
    }
`

const Button = styled.div`
    background-color: #0a0a0a;
    margin: 0 3px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s;
    font-size: 20px;

    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Details = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`

const Name = styled.a`
    font-weight: bold;
    font-size: 150%;
    margin-bottom: 5px;
`

const Rating = styled.div`
    display: flex;
    margin-bottom: 5px;
`

const Star = styled.div`
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-color: white;
    width: 20px;
    height: 20px;

    &:first-child {
        background-color: rgb(190, 18, 47);
    }

    &:nth-child(2) {
        background-color: rgb(190, 18, 47);
    }
`

const Price = styled.span`
    font-size: 130%;
    color: #aaa;
`

const ProductItem = ({ image, name, price }) => {
    return (
        <Container>
            <Image image={image} href="#">
                <Buttons>
                    <Button>
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </Button>
                    <Button>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Button>
                    <Button>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </Button>
                </Buttons>
            </Image>
            <Details>
                <Name>
                    {name}
                </Name>
                <Rating>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Rating>
                <Price>
                    {price}
                </Price>
            </Details>
        </Container>
    )
}

export default ProductItem;