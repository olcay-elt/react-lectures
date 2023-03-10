import React, { createContext } from 'react'

//? Creating Context
export const UserContext = createContext()

const UserContextProvider = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
}

const UserContextProvider = () => {
    return (
        <div>UserContextProvider</div>
    )
}

export default UserContextProvider