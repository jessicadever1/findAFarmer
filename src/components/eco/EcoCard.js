import React from "react"
import "./Eco.css"

export const EcoCard = ({ecoTip}) => {
    return (
        <>
        <section className="EcoTipsCard">
            <h2>{ecoTip.title}</h2>
            <article>{ecoTip.text}</article>
        </section>
        </>
    )
}