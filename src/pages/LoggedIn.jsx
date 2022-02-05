import React from 'react';
import Navbar from '../components/navbar/Navbar';
import NotificationList from '../components/notification-list/NotificationList';
import UserList from "../components/user-list/UserList";

const LoggedIn = () => {
    const [showUserList, setShowUserList] = React.useState(false)
    const [showNotificationList, setShowNotificationList] = React.useState(false)

    const handleUserClick = () => {
        setShowUserList(!showUserList)
    }

    const hanleNotificationClick = () => {
        setShowNotificationList(!showNotificationList)
    }

    return (
        <div>
            {
                showUserList ?
                    <UserList
                        name={"Yazan Habash"}
                        bio={"Computer Engineer and Musician"}
                    /> : null
            }
            {
                showNotificationList ?
                    <NotificationList /> : null
            }
            <Navbar
                handleUserBox={handleUserClick}
                handleNotificationBox={hanleNotificationClick}
            />
        </div >
    );
};

export default LoggedIn;