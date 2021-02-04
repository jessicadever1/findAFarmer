import "./Farm.css"
import { Link } from "react-router-dom"
import { FarmContext } from "./FarmProvider"
import React, { useContext, useEffect, useState } from "react"

export const AllFarmsBtn = () => {

    const { getFarms } = useContext(FarmContext)
    const [farms, setFarms] = useState([])
    
    const handleSeeAllFarmsClick = () => {
            getFarms()
            .then(setFarms)
    }

    return (
        <div className="allFarmsBtnDiv">
            <button onClick={handleSeeAllFarmsClick} className="allFarmsBtn">See All Farms</button>
        </div>
    )
}