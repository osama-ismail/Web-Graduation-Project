import axios from "axios";

export const submitLocation = (e, obj) => {
    e.preventDefault();
    let garageId = localStorage.getItem('loggedIn');
    axios.post(
        `http://localhost:8080/garages/${garageId}/setLocation`,
        JSON.stringify({ "longitude": obj.lng, "latitude": obj.lat }),
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json"
            }
        }
    ).then(resp => {
        window.location.replace(`http://localhost:3000/user-profile/edit-profile/${garageId}`)
    })
}

export const handleRegister = (e, { name, email, password, phoneNumber, accountType }) => {
    if (!email.includes("@")) {
        console.log("enter an email")
        return
    }

    e.preventDefault()
    const user = [name, email, phoneNumber, password]
    if (accountType === 'User Account')
        axios.post(
            `http://localhost:8080/users/signup`,
            JSON.stringify(user),
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Accept": "application/json"
                }
            }
        ).then((response) => {
            console.log('rrr' + response.data)
            localStorage.setItem('accountType', 'User')
            // window.location.replace(`http://localhost:3000/user-profile/edit-profile/${response.data}`)
        })
    else
        axios.post(
            `http://localhost:8080/garages/signup`,
            JSON.stringify(user),
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Accept": "application/json"
                }
            }
        ).then((response) => {
            console.log(response.data)
            let garageId = response.data
            if (garageId != -1) {
                localStorage.setItem('loggedIn', garageId)
                localStorage.setItem('accountType', 'Garage')
            }
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