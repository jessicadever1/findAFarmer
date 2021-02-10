import React, { useState, createContext } from "react"

export const ReviewContext = createContext()

/* -------------------- To have reviews, to add new reviews and delete others, to target reviews by Id -------------------- */

export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch(`http://localhost:8014/reviews?_expand=farm&_expand=user`)
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
            method: ""
        })
        .then(getReviews)
    }

    const editReview = review => {
        return fetch(`http://localhost:8014/reviews/${review.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(getReviews)
    }

/* -------------------- To give access to these reviews to all other components -------------------- */

    return (
        <ReviewContext.Provider value={{
            reviews, getReviews, addReview, deleteReview, getReviewById, editReview
        }}>
            {props.children}
        </ReviewContext.Provider>

    )

}