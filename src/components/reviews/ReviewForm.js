import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "../reviews/ReviewProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Review.css"

export const ReviewForm = () => {
    const { addReview, getReviewById, updateReview } = useContext(ReviewContext)

    const [review, setReview] = useState({
        "id": 0,
        "userId": 0,
        "farmId": 0,
        "date": "",
        "reviewText": ""
    })

    const [isLoading, setIsLoading] = useState(true)
    const {reviewId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newReview = { ...review }
        newReview[event.target.id] = event.target.value
        setReview(newReview)
    }

    const handleSaveReview = () => {
        if (parseInt(review.name) === 0 ) {
            window.alert("Please give your review a name")
        } else {
            setIsLoading(true)
            if (reviewId) {
                updateReview({
                    id: review.id,
                    name: review.name,
                    userId: parseInt(review.userId),
                    farmId: parseInt(review.farmId),
                    reviewText: review.reviewText
                })
                .then(() => history.push(`/farms/detail/${review.id}`))
            } else {
                addReview({
                    id: review.id,
                    name: review.name,
                    userId: parseInt(review.userId),
                    farmId: parseInt(review.farmId),
                    reviewText: review.reviewText
                })
                .then(() => history.push("/farms"))
            }
        }
    }

    useEffect(() => {
        getReviews().then
    })
}