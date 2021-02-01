import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ReviewCard } from "./ReviewCard"
import { ReviewContext } from "./ReviewProvider"
import "./Review.css"

export const ReviewList = () => {
    const { reviews, getReviews } = useContext(ReviewContext)

    const history = useHistory()

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {reviews.map(review => {
                return <ReviewCard key={review.id} review={review}/>
                })
            }
        </div>
    )
}