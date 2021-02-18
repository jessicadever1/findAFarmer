import React from "react"
import "./PigEdibles.css"

export const PigEdiblesCard = ({ pigEdible }) => {

    return (
        <>
            <div className="checklistDiv">
                <fieldset className="checkListFieldset" >
                    <label htmlFor="checkboxLabel" className="checkboxLabel"> {pigEdible.name}</label>
                    <input type="checkbox" name="checkbox" id="checkbox" className="checkbox"  />
                </fieldset>
            </div>    
        </>
    )
}
