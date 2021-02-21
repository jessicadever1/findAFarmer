import React, { useContext, useEffect, useState } from "react"
import { FarmContext } from "./FarmProvider"
import "./Farm.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Pig from "../images/Pig.png"
import { ReviewContext } from "../reviews/ReviewProvider"
import { ReviewCard } from "../reviews/ReviewCard"


export const FarmDetail = () => {

/* -------------------- To have access to farms, reviews and the userId -------------------- */

    const { getFarmById } = useContext(FarmContext)
    const [ farm, setFarm ] = useState({})
    const { reviews, getReviews } = useContext(ReviewContext)
    const { farmId } = useParams()

/* -------------------- To be able to see only the reviews associated with current farm -------------------- */

    const currentFarmReviews = reviews.filter((currentReview) => {
        return currentReview.farmId === parseInt(farmId)
    } )

/* -------------------- To get the current farm selected, and the reviews associated with it -------------------- */

    useEffect(() => {
        getFarmById(farmId)
        .then((response) => {
            setFarm(response)
        })
    }, [])

    useEffect(() => {
        getReviews()
    }, [])

/* -------------------- To make sure every farm detail has a default profile pic, if no profile pic exists -------------------- */

    if (farm.imageURL === "") {
        let defaultFarmPic = Pig
        farm.imageURL = defaultFarmPic
    }

/* -------------------- The contents of all of the farm details for selected farm -------------------- */

    return (
        <>
        <section className="farmDetailsPageWrap">
        <div className="leftSidePaddingFarmList"></div>
        <section className="farm farmPageContent">
            <div className="farm__upperBox">
                <img src={farm.imageURL} alt="{farm.name} default pic" className="farmPic"></img>
                <div className="farmCardRight">   
                    <section className="farm__info">
                        <h2 className="farm__name">{farm.farmName}</h2> 
                        
                            <div className="farm__street">{farm.streetAddress}</div>
                            <div className="farm__address">{farm.city} {farm.state} {farm.zip}</div>

                        <button className="farmWebsite"><a href={farm.website}>Website</a></button>
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
                        <h3 className="centerInstructionsTitle">Instructions </h3>
                        <div className="farm__instructions whiteSpace">{farm.instructions}</div>
                    </article>
                    <section className="includeExcludeDivs">
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
                </section>
                <article className="farm__reviews">
                    <h2 className="farm__reviewHeader">Reviews</h2>
                    <div className="reviews">
                        {
                            currentFarmReviews.map(review => {
                                
                                return <ReviewCard key={review.id} farm={farm} review={review}/>
                        })
                        }
                    </div>
                </article>
            </div>
        </section>
        <div className="rightSidePaddingFarmList"></div>
        </section>
        </>
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