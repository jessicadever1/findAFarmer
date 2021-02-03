import React from "react"
import "./User.css"
import userPicDefault from "../images/user.png"

export const UserCard = ( { user }) => {

    if (user.userPic === "") {
        let defaultUserPic = userPicDefault
        user.userPic = defaultUserPic
    }

    return (
        <section className="userCard">
            <img src={user.userPic} alt="user profile picture"></img>
            <h3 className="userName">{user.username}</h3>
        </section>
    )
}