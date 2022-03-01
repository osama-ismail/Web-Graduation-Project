import axios from "axios";

export const submitLocation = (e, obj) => {
    e.preventDefault();
    // Send the 'obj' to url using axios
}

export const handleRegister = (e, { name, email, password, phoneNumber, accountType }) => {
    if (!email.includes("@")) {
        console.log("enter an email")
        return
    }

    e.preventDefault()
    const user = [name, email, phoneNumber, password]
    console.log(user)
    axios.post(
        "http://localhost:8080//users/signup",

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

    // fetch("http://localhost:8080//users/signup", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(user)

    // }).then((res) => res.json())
    //     .then((data) => {
    //         console.log(data.results);
    //     }).catch((e) => {
    //         console.log("failed with us");
    //     });
}