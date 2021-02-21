import React, { useContext, useEffect, useState } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import "./PigEdibles.css"

export const PigEdiblesCard = ({ pigEdible }) => {

    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)

    // const [pigEdible, setPigEdible] = useState({
    //     "id": 0,
    //     "name": "",
    //     "checked": false
    // })

    useEffect(()=> {
        getPigEdibles()
    }, [])

    const handleCheckBox = (event) => {
        // const newPigEdible = {...pigEdible}
        // let selectedVal = event.target.checked
        // newPigEdible[event.target.checked] =selectedVal
        // setPigEdible(newPigEdible)
        console.log("nothing works.")
    }
    
    return (
        <>
            <div className="checklistDiv">
                <fieldset className="checkListFieldset" >
                    <label htmlFor="checkboxLabel" className="checkboxLabel"> {pigEdible.name}</label>
                    <input value={pigEdible.checked} type="checkbox" name="checkboxLabel" id="checkboxLabel" className="checkbox" onChange={handleCheckBox}/>
                </fieldset>
            </div>    
        </>
    )
}