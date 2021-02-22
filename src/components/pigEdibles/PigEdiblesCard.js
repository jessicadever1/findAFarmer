import React, { useContext, useEffect, useState } from "react"
import { FarmEdiblesContext } from "../farmEdibles/FarmEdiblesProvider"
import "./PigEdibles.css"

export const PigEdiblesCard = ({ pigEdible, handleCheckBox }) => {
    
    return (
        <>
            <div className="checklistDiv">
                <fieldset className="checkListFieldset" >
                    <label htmlFor="checkboxLabel" className="checkboxLabel"> {pigEdible.name}</label>
                    <input value={pigEdible.id} type="checkbox" name="checkboxLabel" id="checkboxLabel" className="checkbox" onChange={handleCheckBox}/>
                </fieldset>
            </div>    
        </>
    )
}