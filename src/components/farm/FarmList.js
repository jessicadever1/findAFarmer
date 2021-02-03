import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FarmCard } from "./FarmCard"
import { FarmContext } from "./FarmProvider"
import "./Farm.css"
import { ReviewContext } from "../reviews/ReviewProvider"
import { FarmFilter } from "./FarmFilter"

export const FarmList = () => {
    const {farms, getFarms} = useContext(FarmContext)
    const {reviews, getReviews } = useContext(ReviewContext)
    
    const history = useHistory()

    useEffect(() => {   
        getReviews()
        .then(getFarms)
    }, [])
    
    let filteredFarms = []

    filteredFarms = (event) => {
        if (event.target.value === "37174") {
            filteredFarms.push()
        } 
    }

    return (
        <>
        <div className="farmFilter">
            <FarmFilter />
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