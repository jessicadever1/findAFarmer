import React, { useContext } from "react"
import "./Review.css"
import userPicture from "../images/user.png"
import trashIcon from "../images/trash.png"
import { ReviewContext } from "./ReviewProvider"
import { useHistory } from "react-router-dom"

export const ReviewCard = ({ review, user, farm }) => {

    const { deleteReview } = useContext(ReviewContext)

    const userPic = userPicture

    const currentUser = localStorage.getItem("find-a-farm_user")
    const history = useHistory()

    const handleClickDeleteReview = () => {
        console.log("what is review id?", review.id)
        console.log("what is currentUser?", currentUser)
        console.log("what is review.userId?", review.userId)
        if (currentUser === review.userId) {
            deleteReview(review.id)
            .then(() => {
                history.push("/farms/detail/${farm.id}")
            })
        }
    }

    return (
        <article className="review">
            <img className="reviewerProfilePic" src={userPic} alt="user default pic"></img>
            
            <section className="review__userInfo">
                <h3 className="review__name">{review.name}</h3>
                <div className="review__username">{user?.username}</div>
                <div className="review__date">{review.date}</div>
                <p className="review__reviewText">{review.reviewText}</p>
            </section>
            <button onClick={handleClickDeleteReview} className="trashBtn"><img className="trashIcon" src={trashIcon} width="25" height="25" alt="delete icon"></img></button>
        </article>
    )
}