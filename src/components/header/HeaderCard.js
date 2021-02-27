import React, {useEffect, useContext} from "react"
import "./Header.css"
import Pig from '../images/Pig.png'
import UserPic from "../images/user.png"
import { LogOutBtn } from "./LogOutBtn"
import { UserContext } from "../users/UserProvider"

/* -------------------- To give all pages a uniform header -------------------- */

export const HeaderCard = () => {

    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))
    const { users, getUsers } = useContext(UserContext)
    const user = users.find(u => u.id === currentUser)

    useEffect(() => {
        getUsers()
    }, [])

    const hideButtons = () => {
        if (currentUser) {
            return (
                <>
                    <LogOutBtn />
                </>
            )
        }
    } 

    return (
        <>
        <header>
        <div className="welcomeGoodByeDiv">
                <div className="welcomeDiv">
                    <img className="welcomeUserProfilePic" src={UserPic} alt="user profile picture"></img>
                    <div className="welcomeMsg">
                        <h6 className="welcomeH6">Great to see you, </h6>
                        <h6 className="welcomeH6">USERNAME PLACEHOLDER!</h6>
                    </div>
                </div>
            <div className="logOut">
                {hideButtons()}
            </div>
        </div>
            <h1 className="header">Find A Farmer</h1>
            <h2 className="h2">Where will you plop your slop?</h2>
            <div className="centerDefaultImg">
                <div className="emptySpace"></div>
                <img className="profileDefault" src={Pig} alt="default"></img>
                <div className="emptySpace"></div>
            </div>
        </header>
        </>
    )
}