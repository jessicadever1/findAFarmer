import React from "react"
import "./Farm.css"
import { Link } from "react-router-dom"
import {useHistory } from "react-router-dom"

import Pig from '../images/Pig.png'
import { ReviewContext } from "../reviews/ReviewProvider"

export const FarmCard = ( { farm, review } ) =>  {
    if (farm.farmPic === "") {
        let defaultFarmPic = Pig
        farm.farmPic = defaultFarmPic
    }

    const history = useHistory()
    
    return (
        <section className="farm">
            <div className="farm__upperBox">
                <img src={farm.farmPic} width="100" height="100" alt="{farm.name} default pic" className="farmPic"></img>
                <div className="farmCardRight">   
                    <section className="farm__info">
                        <h2 className="farm__name">{farm.name}</h2>
                        <div className="farm__street">{farm.streetAddress}</div>
                        <div className="farm__address">{farm.city} {farm.state} {farm.zip}</div>
                    </section>
                </div>
            </div>
            <section className="farm__buttons">
                <button className="farmDetailsBtn"><Link to={`/farms/detail/${farm.id}`}>See Details</Link></button>
                <Link to={`/reviews/create/${farm.id}`}><button className="addRevBtn">
                    Add Review
                </button></Link>
            </section>
        </section>
    )

}
