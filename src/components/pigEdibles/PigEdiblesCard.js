import React, { useContext, useEffect } from "react"
import { FarmContext } from "../farm/FarmProvider"
import "./PigEdibles.css"

export const PigEdiblesCard = ({ pigEdible }) => {

    let user = parseInt(localStorage.getItem("find-a-farm_user"))
    const {farms, getFarms} = useContext(FarmContext)

    useEffect(() => {
        getFarms()
    }, [])

    const currentFarm = farms.filter((currentFarm) => {
        return currentFarm.userId === user
    } )



    const handleCheckBox = (event) => {
        if (event.target.checked === true) {
            currentFarm.pigEdibles.include.push(pigEdible)
        } else if (event.target.checked === false) {
            currentFarm.pigEdibles.exclude.push(pigEdible)
        }
    }

    return (
        <>
            <div className="checklistDiv">
                <fieldset className="checkListFieldset" >
                    <label htmlFor="checkboxLabel" className="checkboxLabel"> {pigEdible.name}</label>
                    <input value="on" type="checkbox" name="checkbox" id="checkbox" className="checkbox" onChange={handleCheckBox}/>
                </fieldset>
            </div>    
        </>
    )
}
