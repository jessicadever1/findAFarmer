import React, { useContext, useEffect, useState } from "react"
import "./Review.css"
import userPicture from "../images/user.png"
import trashIcon from "../images/trash.png"
import editIcon from "../images/editIcon.png"
import { ReviewContext } from "./ReviewProvider"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"

export const ReviewCard = ({ review, user, farm }) => {

/* -------------------- Provide reviews for each farm, and delete them upon click -------------------- */

    const { deleteReview } = useContext(ReviewContext)

    const userPic = userPicture
    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))
    const history = useHistory()

    const handleClickDeleteReview = () => {
        
        if (currentUser === review.userId) {
            deleteReview(review.id)
            .then(() => {
                history.push(`/farms/detail/${farm.id}`)
            })
        }
    }

    const handleClickEditReview = () => {
        if (currentUser === review.userId) {
            history.push(`/reviews/edit/${review.id}`)
        }
    }

/* -------------------- Contents of individual reviews -------------------- */

    return (
        <article className="review">
            <img className="reviewerProfilePic" src={userPic} alt="user default pic"></img>
            
            <section className="review__userInfo">
                <div className="reviewBy">
                    <h3 className="reviewUsername">{review.user.username}: </h3>
                    <h3 className="review__name">{review.name}</h3>
                </div>
                <div className="review__date">{review.date}</div>
                <p className="review__reviewText">{review.reviewText}</p>
            </section>
            <section className="reviewBtns">
                <button onClick={handleClickDeleteReview} className="trashBtn"><img className="trashIcon" src={trashIcon} width="25" height="25" alt="delete icon"></img></button>
                <button onClick={handleClickEditReview} className="editBtn"><img className="editIcon" src={editIcon} width="25" height="25" alt="edit icon"></img></button>
            </section>
        </article>
    )
}