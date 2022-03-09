import React from 'react'
import styled from 'styled-components'
import CartProduct from '../car-product/CartProduct'

const Container = styled.div`
    color: white;
    border: 8px solid rgb(210, 210, 210, 0.8);
    width: auto;
    transform: translateY(-5rem);
    margin: 0 25vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
`

const MaskTop = styled.div`
    position: absolute;
    top: -8px;
    left: 0;
    width: 50%;
    height: 8px;
    background-color: rgb(210, 18, 48);
`

const MaskLeft = styled.div`
    position: absolute;
    top: -8px;
    left: -8px;
    width: 8px;
    height: 50%;
    background-color: rgb(210, 18, 48);
`

const MaskRight = styled.div`
    position: absolute;
    bottom: 0;
    right: -8px;
    width: 8px;
    height: 50%;
    background-color: rgb(210, 18, 48);
`

const MaskBottom = styled.div`
    position: absolute;
    bottom: -8px;
    right: -8px;
    width: 50%;
    height: 8px;
    background-color: rgb(210, 18, 48);
`

const CartTable = () => {
    return (
        <Container>
            <MaskTop />
            <MaskLeft />
            <MaskRight />
            <MaskBottom />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </Container>
    )
}

export default CartTable