import React from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/ProductItem';
import { products } from '../../../iterated_variables/products';
import { Tablet } from '../../responsive/Responsive';

const Container = styled.div`
    color: white;
    display: flex;
    padding: 3rem;

    ${Tablet({ flexDirection: "column" })}
`

const Margin = styled.div`
    border: 2px solid yellow;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Tablet({ marginBottom: "1.5rem" })}
`

const Categories = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid green;
    margin-bottom: 1rem;
`

const Calculate = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid green;
    margin-bottom: 1rem;
`

const Filter = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid green;
`

const Contents = styled.div`
    flex: 2;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
`

const Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Tablet({ flexDirection: "column", alignItems: "flex-start" })}
`

const Result = styled.h2`
    color: white;
    ${Tablet({ marginBottom: "1rem" })}
`

const Search = styled.div``

const Display = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Sort = styled.select`
    font-size: 16px;
    margin: 0 1rem;
    ${Tablet({ margin: "1rem 0 0 0" })}
    background-color: black;
    color: #aaa;
    padding: 2px 8rem 2px 5px;
    border: 1px solid rgb(210, 210, 210, 0.2);
    outline: none;
`

const Option = styled.option``

const List = styled.div`
    font-size: 24px;
    color: rgb(190, 18, 47);

    ${Tablet({ display: "none" })}
`

const Horizontal = styled.span`
    margin: 0 1rem;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        color: white;
    }
`

const Grid = styled.span`
    margin-right: 0.3rem;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        color: white;
    }
`

const Products = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1rem 0.5rem;
`

const Shop = () => {
    return (
        <Container>
            <Margin>
                <Categories>Categories</Categories>
                <Calculate>Calculate</Calculate>
                <Filter>Filter</Filter>
            </Margin>
            <Contents>
                <Control>
                    <Result>Result</Result>
                    <Search>Search</Search>
                    <Display>
                        <Sort>
                            <Option value="price">Price</Option>
                            <Option value="Date">Data</Option>
                        </Sort>
                        <List>
                            <Horizontal>
                                <i class="fa fa-list" aria-hidden="true"></i>
                            </Horizontal>
                            <Grid>
                                <i class="fa fa-th" aria-hidden="true"></i>
                            </Grid>
                        </List>
                    </Display>
                </Control>
                <Products>
                    {
                        products.map(product => {
                            return (
                                <ProductItem
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                />
                            );
                        })
                    }
                </Products>
            </Contents>
        </Container>
    )
}

export default Shop;