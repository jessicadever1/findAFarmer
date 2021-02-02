import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "../reviews/ReviewProvider"
import { FarmContext } from "../farm/FarmProvider"
import { UserContext } from "../users/UserProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Review.css"


export const ReviewForm = () => {
    const { addReview, getReviewById } = useContext(ReviewContext)
    const { farms, getFarms } = useContext(FarmContext)
    const { users, getUsers } = useContext(UserContext)

    const [review, setReview] = useState({
        "id": 0,
        "userId": 0,
        "farmId": 0,
        "date": "",
        "name": "",
        "reviewText": ""
    })

    const { reviewId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getFarms().then(getUsers).then(() => {
            if (reviewId){
                getReviewById(reviewId)
                .then(review => {
                    setReview(review)
                })
            }
        })
    }, [])

    const handleControlledInputChange = (event) => {
        const newReview = { ...review }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newReview[event.target.id] = selectedVal
        setReview(newReview)
    }

    const handleClickSaveReview = (event) => {
        event.preventDefault()

            addReview({
                userId: parseInt(review.userId),
                username: review.userId.username,
                farmId: parseInt(review.farmId),
                date: review.date,
                name: review.name,
                reviewText:review.reviewText,
            })
            .then(() => history.push("/farms"))
        }
    

    return (
        <div className="formCenterDiv">
            <form className="reviewForm">
                <h2 className="reviewForm__title">Review</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Review name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Review name" defaultValue={review.name}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date Visited:</label>
                        <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="" value={review.date}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group reviewTextArea">
                        <div className="">
                            <label htmlFor="reviewText">Share your experience:</label>
                        </div>
                        <input type="textarea" id="reviewText" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Tell us all about it!" value={review.reviewText}/>
                    </div>
                </fieldset>
                <div className="centerReviewSubmitBtn">
                    <button id="submitReviewBtn" className="btn btn-primary"
                        onClick={handleClickSaveReview}>
                        Submit Review
                    </button>
                </div>
            </form> 
        </div>
    )
}