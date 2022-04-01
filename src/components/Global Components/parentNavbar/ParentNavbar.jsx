import React, { useState } from 'react'
import NotificationList from '../notification-list/NotificationList';
import UserList from "../user-list/UserList";
import NavigationBar from '../../GarageHome Page/navigation_bar/NavigationBar';
import Catalog from '../catalog/Catalog';
import styled from 'styled-components';

const Container = styled.nav``

const ParentNavbar = () => {
    const [showUserList, setShowUserList] = useState(false)
    const [showNotificationList, setShowNotificationList] = useState(false)
    const [showCatalog, setShowCatalog] = useState(false)
    const handleUserClick = () => {
        setShowUserList(!showUserList)
    }

    const hanleNotificationClick = () => {
        setShowNotificationList(!showNotificationList)
    }

    const handleCatalog = () => {
        setShowCatalog(!showCatalog)
    }
    return (
        <Container>
            {
                showUserList ?
                    <UserList /> : null
            }
            {
                showNotificationList ?
                    <NotificationList /> : null
            }
            <NavigationBar
                handleUserBox={handleUserClick}
                handleNotificationBox={hanleNotificationClick}
                handleCatalog={handleCatalog}
            />
            {showCatalog ? <Catalog /> : null}
        </Container>
    )
}

export default ParentNavbar