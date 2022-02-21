import React from 'react';
import styled from 'styled-components';
import { categories } from '../../../iterated_variables/categories';

const Container = styled.div`
    width: 200px;
    border: 2px solid green;
    margin-bottom: 1rem;
    font-family: 'Righteous', cursive;
    font-size: 20px;
`

const Title = styled.h4`
    text-transform: uppercase;
    padding: 0 4px;
`

const Items = styled.ul`
    padding: 0 4px;
`

const Item = styled.li`
    margin-bottom: 2px;
    list-style-type: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
`

const SubItem = styled.li`
    color: white;
    font-weight: normal;
    font-size: 80%;

    transition: 300ms;
    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Name = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 85%;
    transition: 300ms;
    &:hover {
        color: rgb(190, 18, 47);
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 0.4rem;
`

const Span = styled.span``

const Categories = () => {
    const [showBox, setShowBox] = React.useState(false);
    const [id, setId] = React.useState("");

    const handleClick = (e) => {
        setShowBox(!showBox);
        setId(e.target.id);
    }

    return (
        <Container>
            <Title>Categories</Title>
            <Items>
                {categories.map(category => {
                    return (
                        <Item>
                            <Name>
                                <Span>{category.name}</Span>
                                <i
                                    id={category.name} onClick={handleClick}
                                    class="fa fa-plus" aria-hidden="true"
                                ></i>
                            </Name>
                            {showBox && id === category.name ?
                                <Box>
                                    {category.subItems.map(subItem => {
                                        return (
                                            <SubItem>{subItem}</SubItem>
                                        );
                                    })}
                                </Box> : null
                            }
                        </Item>
                    );
                })}
            </Items>
        </Container>
    )
}

export default Categories;