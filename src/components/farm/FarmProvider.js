import React, { useState, createContext } from "react"

export const FarmContext = createContext()

/* -------------------- To have access to farms, and specific farms based on their properties -------------------- */

export const FarmProvider = (props) => {
    const [farms, setFarms] = useState([])

    const getFarms = () => {
        return fetch("http://localhost:8014/farms?_embed=review&_embed=user")
        .then(res => res.json())
        .then(setFarms)
    }

    const getFarmById = (id) => {
        return fetch(`http://localhost:8014/farms/${id}?_embed=review&_embed=user`)
        .then(res => res.json())
    }

    const getFarmByZip = (zip) => {
        return fetch(`http://localhost:8014/farms?_embed=review&_embed=user&zip=${zip}`)
        .then(res => res.json())
        .then(setFarms)
    }

/* -------------------- To make the farms, and their farm varieties available to other components -------------------- */

    return (
        <FarmContext.Provider value={{
            farms, getFarms, getFarmById, getFarmByZip
        }}>
            {props.children}
        </FarmContext.Provider>
    )
}