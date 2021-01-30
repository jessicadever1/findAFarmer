import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FarmCard } from "./FarmCard"
import { FarmContext } from "./FarmProvider"
import "./Farm.css"

export const FarmList = () => {
    const {farms, getFarms} = useContext(FarmContext)
    const history = useHistory()

    useEffect(() => {   
        getFarms()
    }, [])

    return (
        <div className="farms">
            {console.log("FarmList: Render", farms)}
            {
                farms.map(farm => {
                    return <FarmCard key={farm.id} farm={farm} />
            })
            }
        </div>
    )
}