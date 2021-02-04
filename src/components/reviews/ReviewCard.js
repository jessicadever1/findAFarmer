import React from "react"
import "./Review.css"
import userPicture from "../images/user.png"
import trashIcon from "../images/trash.png"

export const ReviewCard = ({ review, user, farm }) => {

    const userPic = userPicture
    console.log("review", review)
    console.log("farmID", farm.id)
    return (
        <article className="review">
            <img className="reviewerProfilePic" src={userPic} alt="user default pic"></img>
            
            <section className="review__userInfo">
                <h3 className="review__name">{review.name}</h3>
                <div className="review__username">{user?.username}</div>
                <div className="review__date">{review.date}</div>
                <p className="review__reviewText">{review.reviewText}</p>
            </section>
            <img className="" src="" alt="delete icon"></img>
        </article>
    )
}