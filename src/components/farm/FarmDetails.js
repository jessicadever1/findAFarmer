import React, { useContext, useEffect, useState } from "react"
import { FarmContext, getFarmById } from "./FarmProvider"
import "./Farm.css"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import Pig from "../images/Pig.png"
import user from "../images/user.png"
import { ReviewContext, ReviewProvider } from "../reviews/ReviewProvider"
import { ReviewCard } from "../reviews/ReviewCard"


export const FarmDetail = () => {
    const { getFarmById } = useContext(FarmContext)
    const [ farm, setFarm ] = useState({})
    const { reviews, getReviews } = useContext(ReviewContext)
    const { farms, getFarms } = useContext(FarmContext)
    const { farmId } = useParams()
    const history = useHistory()


    const currentFarmReviews = reviews.filter((currentReview) => {
        return currentReview.farmId === parseInt(farmId)
    } )

    useEffect(() => {
        console.log("useEffect", farmId)
        getFarmById(farmId)
        .then((response) => {
            setFarm(response)
        })
    }, [])

    useEffect(() => {
        getReviews().then(getFarms)
    }, [])

    if (farm.farmPic === "") {
        let defaultFarmPic = Pig
        farm.farmPic = defaultFarmPic
    }

    const userPic = user

    return (
        <section className="farm">
            <div className="farm__upperBox">
                <img src={farm.farmPic} alt="{farm.name} default pic" className="farmPic"></img>
                <div className="farmCardRight">   
                    <section className="farm__info">
                        <h2 className="farm__name">{farm.name}</h2>
                        <div className="farm__street">{farm.streetAddress}</div>
                        <div className="farm__address">{farm.city} {farm.state} {farm.zip}</div>
                    </section>
                </div>
            </div>
                <section className="farm__buttons">
                    <button className="farmDetailsBtn"><Link className="a" to={`/farms`}>Back to All Farms</Link></button>
                    <button className="addReviewBtn"><Link className="a" to={`/reviews/create/${farm.id}`}>Add Review</Link></button>
                </section>
                        
            <div>
                <section className="farm__instructionAndLists">
                    <article className="farm__instructionsSection">
                        <h3>Instructions: </h3>
                        <div className="farm__instructions">{farm.instructions}</div>
                    </article>
                    <div className="farm__includeList">
                        <h3 className="farm__include">Include</h3>
                        <ul>
                            <li>Vegetables*</li>
                            <li>Fruit*</li>
                            <li>Grains</li>
                            <li>Nuts & Seeds</li>
                            <li>Prepared Food</li>
                            <li>Vegetables*</li>
                            <li>Fruit*</li>
                            <li>Grains</li>
                            <li>Nuts & Seeds</li>
                            <li>Prepared Food</li>
                            <li>Vegetables*</li>
                            <li>Fruit*</li>
                            <li>Grains</li>
                            <li>Nuts & Seeds</li>
                            <li>Prepared Food</li>
                        </ul>
                        <p>*See exclusions</p>
                    </div>
                    <div className="farm__excludeList">
                        <h3 className="farm__exclude">Exclude</h3>
                        <ul>
                            <li>Raw Meat</li>
                            <li>Human Remains</li>
                            <li>Food Stickers</li>
                            <li>Plastic</li>
                            <li>Canned Beans</li>
                            <li>Avocado (all parts)</li>
                            <li>Cherries</li>
                            <li>Chocolate</li>
                            <li>Kale</li>
                            <li>Raw Meat</li>
                            <li>Human Remains</li>
                            <li>Food Stickers</li>
                            <li>Plastic</li>
                            <li>Canned Beans</li>
                            <li>Avocado (all parts)</li>
                            <li>Cherries</li>
                            <li>Chocolate</li>
                            <li>Kale</li>
                        </ul>
                    </div>
                </section>
                <article className="farm__reviews">
                    <h2 className="farm__reviewHeader">Reviews</h2>
                    <div>
                        {
                            currentFarmReviews.map(review => {
                                
                                return <ReviewCard key={review.id} farm={farm} review={review}/>
                        })
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

/*
Saving for farm__reviews, just in case:

                    <div className="farm__reviewCard">
                        <img className="userDefaultPic" src={userPic} alt="user default pic"></img>
                        <section className="farm__reviewInfo">
                            <h3 className="review__name">{farm.review?.name}</h3>
                            <div className="review__date">{farm.review?.date}</div>
                            <p className="review__reviewText">{farm.review?.reviewText}</p>
                        </section>
                    </div>

*/