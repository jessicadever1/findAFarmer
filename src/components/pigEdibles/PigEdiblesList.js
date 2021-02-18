import React, {useContext, useEffect } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import { FarmContext } from "../farm/FarmProvider"
import { PigEdiblesCard } from "./PigEdiblesCard"
import "./PigEdibles.css"

export const PigEdiblesList = () => {
    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)
    const { farm, getFarmById } = useContext(FarmContext)
    
    useEffect(()=> {
        getPigEdibles()
        .then(getFarmById)
    }, [])

    return (
        <div className="pigEdiblesList">
            {console.log("Pig Edibles List", pigEdibles)}
            {
                pigEdibles.map(pigEdible => {
                    return <PigEdiblesCard key={pigEdibles.id} pigEdible={pigEdible} farmId={farm.id} />
                })
            }
        </div>
    )
}