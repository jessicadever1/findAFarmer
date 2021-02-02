import React, { useContext, useEffect } from "react"
import { UserContext } from "./CustomerProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserList = () => {
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