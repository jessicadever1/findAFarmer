import React, {useContext} from "react"
import "./Review.css"
import trashIcon from "../images/trash.png"
import editIcon from "../images/editIcon.png"
import { useHistory } from "react-router-dom"
import { ReviewContext } from "./ReviewProvider"

export const ReviewBtns = ({review, farm}) => {

    const { deleteReview } = useContext(ReviewContext)
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

    return (
        <section className="reviewBtns">
                <button onClick={handleClickDeleteReview} className="trashBtn"><img className="trashIcon" src={trashIcon} width="25" height="25" alt="delete icon"></img></button>
                <button onClick={handleClickEditReview} className="editBtn"><img className="editIcon" src={editIcon} width="25" height="25" alt="edit icon"></img></button>
        </section>
    )
}