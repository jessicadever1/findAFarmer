import React, { useContext, useEffect } from "react"
import { ReviewCard } from "./ReviewCard"
import { ReviewContext } from "./ReviewProvider"
import "./Review.css"
import { FarmContext } from "../farm/FarmProvider"
import { UserContext } from "../users/UserProvider"

export const ReviewList = () => {

/* -------------------- To have access to farms, reviews and user info -------------------- */

    const { reviews, getReviews } = useContext(ReviewContext)
    const { farms, getFarms } = useContext(FarmContext)
    const { users, getUsers } = useContext(UserContext)


    useEffect(() => {
        getUsers()
        .then(getFarms)
        .then(getReviews)
    }, [])

/* -------------------- To list the review cards that are associated with the farm selected -------------------- */

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