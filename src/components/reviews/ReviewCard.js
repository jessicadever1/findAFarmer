import React from "react"
import "./Review.css"
import user from "../images/user.png"

export const ReviewCard = ({ review }) => {

    const userPic = user

    return (
        <article className="review">
            <h3 className="review__name">{review.name}</h3>
            <section className="review__userInfo">
                <img src={userPic} alt="user default pic"></img>
                <div className="review__username">{review.user.username}</div>
                <div className="review__date">{review.date}</div>
            </section>
            <p className="review__reviewText">{review.reviewText}</p>
        </article>
    )
}