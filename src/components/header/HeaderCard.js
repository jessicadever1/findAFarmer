import React from "react"
import "./Header.css"
import Pig from '../images/Pig.png'

import { LogOutBtn } from "./LogOutBtn"


/* -------------------- To give all pages a uniform header -------------------- */

export const HeaderCard = () => {

    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))
    
/* -------------------- To be able to offer the Login Button ONLY when a user is logged in -------------------- */

    const hideButtons = () => {
        if (currentUser) {
            return (
                <>
                    <LogOutBtn />
                </>
            )
        }
    } 

/* -------------------- The contents of the header -------------------- */

    return (
        <>
        <header>
        <div className="welcomeGoodByeDiv">
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