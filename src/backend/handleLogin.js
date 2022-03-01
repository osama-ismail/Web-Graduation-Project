import axios from "axios";

export const handleLogin = (e, { email, password }) => {
    if (!email.includes("@")) {
        console.log("enter an email")
        return
    }
    e.preventDefault()
    const user = [email, password]
    console.log(user)
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
    })
}