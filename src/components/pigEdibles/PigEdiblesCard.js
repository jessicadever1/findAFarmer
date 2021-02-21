import React, { useContext, useEffect, useState } from "react"
import { FarmEdiblesContext } from "../farmEdibles/FarmEdiblesProvider"
import "./PigEdibles.css"

export const PigEdiblesCard = ({ pigEdible }) => {

    // const { getFarmEdibles } = useContext(FarmEdiblesContext)

    // useEffect(() => {
    //     getFarmEdibles()
    //     .then((farmEdible) => {
    //         setFarmEdibles(farmEdible)
    //     })
    // }, [])

    const [farmEdible, setFarmEdibles] = useState({
        "id": 0,
        "farmId": 0,
        "pigEdibleId": 0
    })

    let farm = []

    const handleCheckBox = (event) => {
        if (event.target.checked === true) {
            farmEdible.push(
                
                `${pigEdible.id}`
            
            )
            console.log("name of thing checked", farmEdible)
        }
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