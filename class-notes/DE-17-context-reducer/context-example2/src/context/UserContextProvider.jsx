import React, { createContext, useEffect, useState } from "react";

//? Creating Context
export const UserContext = createContext();

//? 3-Consume function (Custom Hook)
// export const useUserContext = () => {
//   return useContext(UserContext)
// }

//? Provider Component
const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const changeWidth = (id, width) => {
        const newUsers = users.map((user) =>
            user.id === id ? { ...user, width: width } : user
        );
        setUsers(newUsers);
    };
    const values = { users, changeWidth };
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
