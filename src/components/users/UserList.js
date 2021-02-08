import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserList = () => {

/* -------------------- to have access to users, and display them on the page -------------------- */    

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="user">
            {console.log("Current User", users)}
            {
                users.map(user => {
                    return <UserCard key={user.id} user={user}/>
                })
            }
        </div>
    )
}