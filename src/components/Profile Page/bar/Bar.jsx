import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './bar.css'

const Container = styled.ul`
    color: #dcdde1;
    margin-top: 0.3em;
    display: flex;
    justify-content: space-around;
`

const Bar = ({ id, setId }) => {
    return (
        <Container>
            {
                localStorage.getItem('isAdmin') === 'false' ? (
                    <NavLink to={`/user-profile/edit-profile/${localStorage.getItem('loggedIn')}`}
                        className='bar-item'
                        id="edit"
                        style={id === "edit" ? {
                            borderBottom: "4px solid #d63031",
                            padding: "8px 6px"
                        } : null}
                        onClick={(e) => setId(e.target.id)}>
                        Edit Profile
                    </NavLink>
                ) : null
            }
            {
                localStorage.getItem('isAdmin') === 'false' ? (
                    <NavLink to={`/user-profile/services/${localStorage.getItem('loggedIn')}`}
                        className='bar-item'
                        id="services"
                        style={id === "services" ? {
                            borderBottom: "4px solid #d63031",
                            padding: "8px 6px"
                        } : null}
                        onClick={(e) => setId(e.target.id)}>
                        Services
                    </NavLink>
                ) : null
            }
            {localStorage.getItem('isAdmin') === 'true' ? (
                <NavLink to={`/user-profile/expert-system/${localStorage.getItem('loggedIn')}`}
                    className='bar-item'
                    id="expert-system"
                    style={id === "expert-system" ? {
                        borderBottom: "4px solid #d63031",
                        padding: "8px 6px"
                    } : null}
                    onClick={(e) => setId(e.target.id)}>
                    Problem Diagnosis System
                </NavLink>
            ) : null}
        </Container>
    )
}

export default Bar