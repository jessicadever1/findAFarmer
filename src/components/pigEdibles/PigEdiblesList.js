import React, {useContext, useEffect } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import { PigEdiblesCard } from "./PigEdiblesCard"
import "./PigEdibles.css"

export const PigEdiblesList = () => {
    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)

    useEffect(()=> {
        getPigEdibles()
    }, [])

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