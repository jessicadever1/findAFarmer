import React from "react"
import "./Review.css"
import userPicture from "../images/user.png"
import { ReviewBtns } from "./ReviewBtns"

export const ReviewCard = ({ review, user, farm }) => {

/* -------------------- Provide reviews for each farm, and delete them upon click -------------------- */

    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))


    const hideButtons = () => {
        if (currentUser === review.userId) {
            return (
                <>
                    <ReviewBtns key={review.id} review={review} user={user} farm={farm} />
                </>
            )
        }
    } 

    if (review.user.imageURL === "") {
        let defaultUserPic = userPicture
        review.user.imageURL = defaultUserPic
    }

/* -------------------- Contents of individual reviews -------------------- */

    return (
        <article className="review">
            <img className="reviewerProfilePic" src={review.user.imageURL} alt="user default pic"></img>
            
            <section className="review__userInfo">
                <div className="reviewBy">
                    <h3 className="reviewUsername">{review.user.username}: </h3>
                    <h3 className="review__name">{review.name}</h3>
                </div>
                <div className="review__date">{review.date}</div>
                <p className="review__reviewText">{review.reviewText}</p>
            </section>
            <div className="reviewBtnsDiv">
                {hideButtons()}
            </div>
        </article>
    )
}