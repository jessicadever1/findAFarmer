import React, { useContext, useEffect } from "react"
import { FarmCard } from "./FarmCard"
import { FarmContext } from "./FarmProvider"
import "./Farm.css"
import { FarmFilter } from "./FarmFilter"
import { AllFarmsBtn } from "./AllFarmsBtn"

export const FarmList = () => {

/* -------------------- To have access to farms and reviews -------------------- */

    const {farms, getFarms} = useContext(FarmContext)

    useEffect(() => {   
        getFarms()
    }, [])
    
/* -------------------- To have access to the filter, see all farms btn & all of the farms -------------------- */    

    return (
        <>
        <div className="farmFilter">
            <FarmFilter />
            <AllFarmsBtn />
        </div>
        <div className="farms">
            
            {
                farms.map(farm => {
                    return <FarmCard key={farm.id} farm={farm} />
            })
            }
        </div>
        </>
    )
}