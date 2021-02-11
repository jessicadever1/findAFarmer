import React from "react"
import "./Eco.css"

export const EcoCard = ({ecoTip}) => {
    return (
        <>
            
                <section className="EcoTipsCard">
                    <h3 className="ecoTitle">{ecoTip.title}</h3>
                    <article className="ecoText">{ecoTip.text}</article>
                </section>
        
        </>
    )
}