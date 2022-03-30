import React from 'react'
import styled from 'styled-components'
import image from "../../../assets/images/products/va3.png"
import { MediumScreen, Tablet } from '../../responsive/Responsive'

const Container = styled.div`
    display: flex;
    border-bottom: 2px solid rgb(210, 210, 210, 0.6);
    width: 100%;
    margin-bottom: 0.4rem;

    ${MediumScreen({ flexDirection: "column" })}
`

const Section = styled.section``

const DetailsSection = styled.section`
    width: 40vw;
    border-left: 1px solid rgb(210, 210, 210, 0.5);

    ${Tablet({ borderLeft: "none" })}
`

const ProductImg = styled.div`
    background-image: url(${image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 220px;
    width: 180px;
`

const Details = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 220px;
`

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 96%;
    margin: 0.4rem;
    padding: 0.6rem 0;
`

const Name = styled.h3``

const Price = styled.span``

const Quantity = styled.section`
    border: 2px solid rgb(210, 210, 210, 0.8);
    border-radius: 40px;
    display: flex;
    align-items: center;
`

const Dec = styled.button`
    padding: 3px 15px;
    font-size: 130%;
    background: none;
    border: none;
    border-right: 2px solid rgb(210, 210, 210, 0.8);
    color: white;
    cursor: pointer;
    height: 100%;
`

const Count = styled.span`
    margin: 0 1rem;
`

const Inc = styled.button`
    padding: 3px 15px;
    font-size: 130%;
    background: none;
    border: none;
    border-left: 2px solid rgb(210, 210, 210, 0.8);
    color: white;
    cursor: pointer;
    height: 100%;
    border-top-right-radius: 10px;
`

const CartProduct = () => {

    const [count, setCount] = React.useState(1)

    const decCounter = () => {
        if (count <= 1)
            count = 1
        setCount(count - 1)
    }

    return (
        <Container>
            <Section>
                <ProductImg />
            </Section>
            <DetailsSection>
                <Details>
                    <Line style={{ top: "0" }}>
                        <Name>Product Name</Name>
                    </Line>
                    <Line style={{ bottom: "0" }}>
                        <Price>Product Price</Price>
                        <Quantity>
                            <Dec onClick={decCounter}>-</Dec>
                            <Count>{count}</Count>
                            <Inc onClick={() => setCount(count + 1)}>+</Inc>
                        </Quantity>
                    </Line>
                </Details>
            </DetailsSection>
        </Container>
    )
}

export default CartProduct