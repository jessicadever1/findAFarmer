import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FarmCard } from "./FarmCard"
import { FarmContext } from "./FarmProvider"
import "./Farm.css"
import { ReviewContext } from "../reviews/ReviewProvider"
import { FarmFilter } from "./FarmFilter"
import { AllFarmsBtn } from "./AllFarmsBtn"

export const FarmList = () => {

/* -------------------- To have access to farms and reviews -------------------- */

    const {farms, getFarms} = useContext(FarmContext)
    const {reviews, getReviews } = useContext(ReviewContext)

    useEffect(() => {   
        getReviews()
        .then(getFarms)
    }, [])
    
/* -------------------- To have access to the filter, see all farms btn & all of the farms -------------------- */    

    return (
        <>
        <div className="farmFilter">
            <FarmFilter />
            <AllFarmsBtn />
        </div>
        <div className="farms">
            {console.log("FarmList: Render", farms)}
            {
                farms.map(farm => {
                    const reviews = farms.map(f => f.id === farm.reviewId)
                    return <FarmCard key={farm.id} farm={farm} review={reviews} />
            })
            }
        </div>
        </>
    )
}