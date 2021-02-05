import React from "react"
import "./Header.css"
import Pig from '../images/Pig.png'
import {Link} from 'react-router-dom'

/* -------------------- To give all pages a uniform header -------------------- */

export const HeaderCard = () => {
    return (
        <>
        <header>
        <Link to={`/welcome`}><button className="logOutBtn">Log Out</button></Link>
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