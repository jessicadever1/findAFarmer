import React from "react"
import "./Farm.css"

export const FarmCard = ( { farm } ) => {
    return (
        <section className="farm">
            
            <div className="farmCardRight">   
                <section className="farm__info">
                    <h2>{farm.name}</h2>
                    <div className="farm__street">{farm.streetAddress}</div>
                    <div className="farm__address">{farm.city} {farm.state} {farm.zip}</div>
                </section>
                <section className="farm__buttons">
                    <button className="farmDetailsBtn">See Details</button>
                    <button className="addReviewBtn">Add Review</button>
                </section>
            </div> 
        </section>
    )
}

//<img src={farm.farmPic} alt="{farm.name} default pic" className="farmPic"></img>