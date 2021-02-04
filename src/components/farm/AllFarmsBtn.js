import React from "react"
import "./Farm.css"
import { Link } from "react-router-dom"


export const AllFarmsBtn = () => {

    

    return (
        <div className="allFarmsBtnDiv">
            <Link to={'/farms'}><button className="allFarmsBtn">See All Farms</button></Link>
        </div>
    )
}