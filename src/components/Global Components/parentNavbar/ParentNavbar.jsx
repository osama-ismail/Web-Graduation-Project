import React, { useState } from 'react'
import NotificationList from '../notification-list/NotificationList';
import UserList from "../user-list/UserList";
import NavigationBar from '../../GarageHome Page/navigation_bar/NavigationBar';
import Catalog from '../catalog/Catalog';
import styled from 'styled-components';
import { io } from "socket.io-client";
import axios from "axios";
import { springPort } from '../map/ipAndPort';

const Container = styled.nav``

const ParentNavbar = () => {
    const [showUserList, setShowUserList] = useState(false)
    const [showNotificationList, setShowNotificationList] = useState(false)
    const [showCatalog, setShowCatalog] = useState(false)
    const [socket, setSocket] = useState(null)
    // Notification body
    const [counter, setCounter] = useState(0)
    const [msg, setMsg] = useState([])

    React.useEffect(() => {
        let notificationTexts = []
        axios.get(`http://localhost:8080/garage/${localStorage.getItem('loggedIn')}/notifications`)
            .then(response => {
                for (let i = 0; i < response.data.length; i += 1) {
                    notificationTexts.push(response.data[i].notificationText)
                }
                setCounter(response.data.length)
                setMsg(notificationTexts)
            })
    }, [])

    React.useEffect(() => {
        const socketCopy = io.connect("http://localhost:5000")
        setSocket(socketCopy)
        // Send my info to server
        socketCopy.emit("enter", localStorage.getItem('loggedIn'), localStorage.getItem('userName'))
        if (localStorage.getItem('garage-register') === 'true') {
            const garageName = localStorage.getItem('userName')
            const id = localStorage.getItem('loggedIn')
            socketCopy.emit("garage-register", { garageName: garageName })
            axios.post(
                `http://localhost:${springPort}/sendNotificationForAllUsers/fromGarage/${id}`,
                `New garage "${garageName}" has joined the app!`,
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            )
            localStorage.removeItem('garage-register')
        }
    }, [])

    React.useEffect(() => {
        // Show me a notification when booking
        socket?.on("booking", message => {
            setCounter(prev => prev + 1)
            setMsg(prev => [...prev, message])
        })

        socket?.on("unbooking", message => {
            setCounter(prev => prev + 1)
            setMsg(prev => [...prev, message])
        })

        socket?.on("new-garage", message => {
            setCounter(prev => prev + 1)
            setMsg(prev => [...prev, message])
        })

        socket?.on("ordering", message => {
            setCounter(prev => prev + 1)
            setMsg(prev => [...prev, message])
        })

        socket?.on("unordering", message => {
            setCounter(prev => prev + 1)
            setMsg(prev => [...prev, message])
        })
    }, [socket])


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
                    <NotificationList msg={msg} counter={counter} /> : null
            }
            <NavigationBar
                handleUserBox={handleUserClick}
                handleNotificationBox={hanleNotificationClick}
                handleCatalog={handleCatalog}
                counter={counter}
            />
            {showCatalog ? <Catalog /> : null}
        </Container>
    )
}

export default ParentNavbar