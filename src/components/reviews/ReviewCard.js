import React from "react"
import "./Review.css"
import userPicture from "../images/user.png"

export const ReviewCard = ({ review, user, farm }) => {

    const userPic = userPicture
    console.log("review", review)
    return (
        <article className="review">
            <h3 className="review__name">{review.name}</h3>
            <section className="review__userInfo">
                <img className="reviewerProfilePic" src={userPic} alt="user default pic"></img>
                <div className="review__username">{user?.username}</div>
                <div className="review__date">{review.date}</div>
            </section>
            <p className="review__reviewText">{review.reviewText}</p>
        </article>
    )
}