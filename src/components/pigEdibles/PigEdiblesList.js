import React, {useContext, useEffect, useState } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import { PigEdiblesCard } from "./PigEdiblesCard"
import "./PigEdibles.css"

export const PigEdiblesList = () => {
    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)

    useEffect(()=> {
        getPigEdibles()
    }, [])

    const includeList = () => {
        
    }
    const excludeList = () => {}

    return (
        <div className="pigEdiblesList">
            {
                pigEdibles.map(pigEdible => {
                    return <PigEdiblesCard key={pigEdible.id} pigEdible={pigEdible} />
                })
            }
        </div>
    )
}