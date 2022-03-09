import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './bar.css'

const Container = styled.ul`
    color: white;
    margin-top: 0.3em;
    display: flex;
    justify-content: space-around;
`

const Bar = ({ id, setId }) => {
    return (
        <Container>
            <NavLink to="/user-profile/edit-profile/:id"
                className='bar-item'
                id="edit"
                style={id === "edit" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Edit Profile</NavLink>
            <NavLink to="/user-profile/cart/:id"
                className='bar-item'
                id="cart"
                style={id === "cart" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Cart</NavLink>
            <NavLink to="/user-profile/services/:id"
                className='bar-item'
                id="services"
                style={id === "services" ? {
                    borderBottom: "4px solid rgb(190, 18, 48)",
                    padding: "8px 6px"
                } : null}
                onClick={(e) => setId(e.target.id)}>Services</NavLink>
        </Container>
    )
}

export default Bar