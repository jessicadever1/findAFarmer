import React from "react"
import "./Eco.css"
import leftArrow from "../images/leftArrow.png"
import rightArrow from "../images/rightArrow.png"

/* -------------------- To give even non-users tangible tips they can implement to contribute to planet health -------------------- */

export const EcoCard = ({ecoTip}) => {
    return (
        <>
            
                <img src={leftArrow} height="100" width="100" alt="left arrow" className="leftArrow"></img>
                <section className="EcoTipsCard">
                    <h3 className="ecoTitle">{ecoTip.title}</h3>
                    <article className="ecoText">{ecoTip.text}</article>
                </section>
                <img src={rightArrow} height="100" width="100" alt="left arrow" className="rightArrow"></img>
            
        </>
    )
}