import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
    color: white;
    margin-top: 0.3em;
    display: flex;
    justify-content: space-around;
`

const Header = styled.li`
    list-style-type: none;
    padding: 8px 6px 12px 6px;
    cursor: pointer;
    transition: 170ms;
    border-radius: 4px;
    margin-right: 0.3rem;
    font-size: 120%;

    &:hover {
        color: rgb(190, 18, 48);
    }
`

const Bar = ({ id, setId }) => {
    return (
        <Container>
            <Header
                id="edit"
                style={id === "edit" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Edit Profile</Header>
            <Header
                id="cart"
                style={id === "cart" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Cart</Header>
            <Header
                id="services"
                style={id === "services" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Services</Header>
        </Container>
    )
}

export default Bar