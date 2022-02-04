import React from 'react';
import Navbar from '../components/navbar/Navbar';
import UserList from "../components/user-list/UserList";

const LoggedIn = () => {
    const [showList, setShowList] = React.useState(false)

    const handleClick = () => {
        setShowList(!showList)
    }

    return (
        <div>
            {
                showList ?
                    <UserList
                        name={"Yazan Habash"}
                        bio={"Computer Engineer and Musician"}
                    /> : null
            }
            <Navbar handleUserBox={handleClick} />
        </div >
    );
};

export default LoggedIn;