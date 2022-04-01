import axios from "axios";

export const handleLogin = (e, { email, password }) => {
    if (!email.includes("@")) {
        console.log("enter an email")
        return
    }
    e.preventDefault()
    const user = [email, password]
    let id = undefined
    // console.log(user)
    axios.post(
        "http://localhost:8080//users/login",

        JSON.stringify(user),
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json"
            }
        }
    ).then((response) => {
        console.log(response.data)
        id = response.data
        if (id != -1) {
            window.location.replace(`http://localhost:3000/user-profile/edit-profile/${id}`)
            localStorage.setItem('loggedIn', id)
            localStorage.setItem('accountType', 'User')
        }
        if (id === -1) {
            axios.post(
                "http://localhost:8080//garages/login",

                JSON.stringify(user),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then((response) => {
                console.log(response.data)
                id = response.data
                if (id != -1) {
                    window.location.replace(`http://localhost:3000/user-profile/edit-profile/${id}`)
                    localStorage.setItem('loggedIn', id)
                    localStorage.setItem('accountType', 'Garage')
                }
            })
        }
    })
}