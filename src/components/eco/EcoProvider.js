import React, { useState, createContext } from "react"

export const EcoContext = createContext()

export const EcoProvider = (props) => {

/* -------------------- To retrieve the ecoTips and the option to set them on the page with useState -------------------- */

    const [ecoTips, setEcoTips] = useState([])

    const getEcoTips = () => {
        return fetch("http://localhost:8014/ecoTips")
        .then(res => res.json())
        .then(setEcoTips)
    }

/* -------------------- To make the ecoTips available to other components -------------------- */

    return (
        <EcoContext.Provider value={{
            ecoTips, getEcoTips
        }}>
            {props.children}
        </EcoContext.Provider>
    )

}