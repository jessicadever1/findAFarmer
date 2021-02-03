import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ReviewCard } from "./ReviewCard"
import { ReviewContext } from "./ReviewProvider"
import "./Review.css"
import { FarmContext } from "../farm/FarmProvider"
import { UserContext } from "../users/UserProvider"

export const ReviewList = () => {
    const { reviews, getReviews } = useContext(ReviewContext)
    const { farms, getFarms } = useContext(FarmContext)
    const { users, getUsers } = useContext(UserContext)

    const history = useHistory()

    useEffect(() => {
        getUsers()
        .then(getFarms)
        .then(getReviews)
    }, [])

    const currentFarmReviews = reviews.find((currentReview) => {
        return (
            currentReview.farmId === parseInt(farmId)
            )
    } )

    return (
        <div className="reviews">
            
            {reviews.map(review => {
                const user = users.find(u => u.id === review.userId)
                const farm = farms.find(f => f.id === review.farmId)
                return <ReviewCard key={review.id} review={review} user={user} farm={farm}/>
                })
            }
        </div>
    )
}