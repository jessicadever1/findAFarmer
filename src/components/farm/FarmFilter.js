import React, { useContext } from "react"
import "./Farm.css"
import { FarmContext } from "./FarmProvider"

/* -------------------- Allows user to see farms in preferred County -------------------- */

export const FarmFilter = () => {

/* -------------------- Makes the getFarmByZip code available for use -------------------- */

    const { getFarmByZip } = useContext(FarmContext)

/* -------------------- When user selects a county, it will render the farms within that county -------------------- */

    const handleFilterSelection = (event) => {
        console.log(event.target.value)
        getFarmByZip(event.target.value)
    }

/* -------------------- Contents of the Filter button -------------------- */

    return (
    
        <>
            <select onChange={handleFilterSelection} className="farmFilterSelect">
                <option value="0">  Find A Farm By County</option>
                <option value="37174">Maury</option>
                <option value="37015">Cheatham</option>
                <option value="37055">Dickson</option>
                <option value="37043">Montgomery</option>
                <option value="37087">Wilson</option>
                <option value="37031">Sumner</option>
                <option value="37184">Rutherford</option>
                <option value="37091">Marshall</option>
            </select>
        </>
    )
}