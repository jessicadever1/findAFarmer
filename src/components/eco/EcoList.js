import React, { useContext, useEffect } from "react"
import { EcoCard } from "./EcoCard"
import { EcoContext } from "./EcoProvider"
import "./Eco.css"

export const EcoList = () => {

/* -------------------- To use the built-in Eco Tips and dipsplay them on the welcome page -------------------- */

    const { ecoTips, getEcoTips } = useContext(EcoContext)

    useEffect(() => {  
        getEcoTips()
    }, [])

    return (
        <>
            <section className="ecoContainer">
                <h2 className="ecoHeader">Eco Tips</h2>
                <div className="ecoTips"> 
                    {
                        ecoTips.map(ecoTip => {
                            return <EcoCard key={ecoTip.id} ecoTip={ecoTip} />
                        })
                    }
                </div>
            </section>
        </>
    )

}

