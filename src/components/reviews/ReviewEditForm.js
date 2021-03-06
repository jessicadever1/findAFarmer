import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "../reviews/ReviewProvider"
import { FarmContext } from "../farm/FarmProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Review.css"


export const ReviewEditForm = () => {

/* -------------------- To have access to farms and reviews -------------------- */

    const { getReviewById, editReview } = useContext(ReviewContext)
    const { farms, getFarms } = useContext(FarmContext)

/* -------------------- To access userId, and set userId to each review -------------------- */

    const currentUser = localStorage.getItem("find-a-farm_user")

    const [review, setReview] = useState({
        "id": 0,
        "userId": currentUser,
        "farmId": 0,
        "date": "",
        "name": "",
        "reviewText": "",
        "farm": ""
    })

/* -------------------- To have access individual farm that has been selected -------------------- */

    const [farm, setFarm] = useState(
        {}
    )

/* -------------------- Use the URL to set the farmId and reviewId -------------------- */

    const { reviewId } = useParams()
    const history = useHistory()

/* -------------------- To use the farms and get the individual farms by the reviewId, and then to get specific farm -------------------- */

    useEffect(() => {
        getFarms().then(() => {
            if (reviewId){
            
                getReviewById(parseInt(reviewId))
                .then(review => {
                    console.log("review", review)
                    setReview(review)
                })
            } else {
                console.log("yup it's broken")
            }
        })
    }, [])

/* -------------------- To capture and render the inputs to the form -------------------- */

    const handleControlledInputChange = (event) => {
        const newReview = { ...review }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newReview[event.target.id] = selectedVal
        setReview(newReview)
    }

/* -------------------- To save all of the reviews and then send the user back to the farm they reviewed -------------------- */

    const handleClickSaveReview = () => {

        if (reviewId) {
            editReview(
                {
                    userId: parseInt(review.userId),
                    username: review.userId.username,
                    farmId: parseInt(review.farm.id),
                    date: review.date,
                    name: review.name,
                    reviewText:review.reviewText,
                    farm: farm.name,
                    id: review.id
                }
            ).then(() => history.push(`/farms/detail/${review.farmId}`))
        } }
    
/* -------------------- The contents of the form -------------------- */

    return (
        <section className="centerReviewForm">
        <div className="reviewFormEmptySpace"></div>
        <div className="formCenterDiv">
            <form className="reviewForm" id={farms.id}>
                <h2 className="reviewForm__title">{farm.name} Review</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Review name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Review name" value={review.name}/>
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
                        <textarea white-space="pre-wrap" wrap="hard" type="textarea" id="reviewText" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Tell us all about it!" value={review.reviewText}/>
                    </div>
                </fieldset>
                <div className="centerReviewSubmitBtn">
                    <button id={review.farm.id} className="btn btn-primary"
                        onClick={ event => {
                            event.preventDefault()
                            handleClickSaveReview()
                        }}>
                        {"Save Review"}
                    </button>
                </div>
            </form> 
        </div>
        <div className="reviewFormEmptySpace"></div>
        </section>
    )
}