const USERS_URL = 'http://localhost:5000/users'

const login = (userInfo) => {
    // userInfo should be something like {username: "Frog", email: "froggo@fogspot.com"}

    // fetch to the DB to save the instance
    return fetch(`${USERS_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(userInfo)
    })
}

const signup = (userInfo) => {
    // deal w this later
}

export { signup, login }