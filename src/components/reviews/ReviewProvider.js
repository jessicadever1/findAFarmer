import React, { useState, createContext } from "react"

export const ReviewContext = createContext()

export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch(`http://localhost:8014/reviews?_expand=farm`)
        .then(res => res.json())
        .then(setReviews)
    }

    const addReview = reviewObj => {
        return fetch(`http://localhost:8014/reviews?_expand=farm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewObj)
        })
        .then(response => response.json())
    }

    const getReviewById = (id) => {
        return fetch (`http://localhost:8014/reviews/${id}?_expand=farm&_expand=user`)
        .then(res => res.json())
    }

    const deleteReview = reviewId => {
        return fetch(`http://localhost:8014/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(getReviews)
    }

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, addReview, deleteReview
        }}>
            {props.children}
        </ReviewContext.Provider>

    )

}