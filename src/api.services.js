const USERS_URL = 'http://localhost:5000/users'

const login = (userInfo) => {
    // should be something like {username: "Frog", email: "froggo@fogspot.com", age: 19}
    // alter it for the db to match the model tables...antd wont let me use name='name' so it still says username for the key when it gets here
    userInfo.name = userInfo['username']
    delete userInfo["username"]

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