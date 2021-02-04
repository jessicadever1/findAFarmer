import React from "react"
import "./User.css"
import userPicDefault from "../images/user.png"

export const UserCard = ( { user }) => {

    return (
        <section className="userCard">
            <h3 className="userName">{user.username}</h3>
        </section>
    )
}

/*
Saving for stretch:
if (user.userPic === "") {
        let defaultUserPic = userPicDefault
        user.userPic = defaultUserPic
    }
<img src={user.userPic} alt="user profile picture"></img>
*/