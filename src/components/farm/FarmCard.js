import React from "react"
import "./Farm.css"


export const FarmCard = ( { farm } ) =>  {
    if (farm.farmPic === "") {
        const defaultFarmPic = "../images/Pig.png"
        farm.farmPic = defaultFarmPic
    }
    
    return (
        <section className="farm">
            <img src={farm.farmPic} width="100" height="100" alt="{farm.name} default pic" className="farmPic"></img>
            <div className="farmCardRight">   
                <section className="farm__info">
                    <h2 className="farm__name">{farm.name}</h2>
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
