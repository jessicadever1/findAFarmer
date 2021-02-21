import React, { useState, createContext } from "react"

export const FarmEdiblesContext = createContext()

/* -------------------- To have access to farm/pigEdibles that have a many to many relationship -------------------- */

export const FarmEdiblesProvider = (props) => {
    const [farmEdibles, setFarmEdibles] = useState([])

    const getFarmEdibles = () => {
        return fetch("http://localhost:8014/farmEdibles")
        .then(res => res.json())
        .then(setFarmEdibles)
    }

/* -------------------- To make the farmEdibles available to other components -------------------- */

    return (
        <FarmEdiblesContext.Provider value={{
            farmEdibles, getFarmEdibles
        }}>
            {props.children}
        </FarmEdiblesContext.Provider>
    )
}