import "./Farm.css"
import { FarmContext } from "./FarmProvider"
import React, { useContext, useEffect, useState } from "react"

export const AllFarmsBtn = () => {

/* -------------------- To be able to work with all of the farm data -------------------- */

    const { getFarms } = useContext(FarmContext)
    const [farms, setFarms] = useState([])
    
/* -------------------- To render all of the farms, if user has filtered farms -------------------- */

    const handleSeeAllFarmsClick = () => {
            getFarms()
            .then(setFarms)
    }

/* -------------------- The farm button -------------------- */

    return (
        <div className="allFarmsBtnDiv">
            <button onClick={handleSeeAllFarmsClick} className="allFarmsBtn">See All Farms</button>
        </div>
    )
}