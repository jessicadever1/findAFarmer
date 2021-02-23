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

    const getFarmEdibleById = (id) => {
        return fetch(`http://localhost:8014/farmEdibles/${id}`)
        .then(res => res.json())
    }

    const addFarmEdible = farmEdibleObj => {
        return fetch(`http://localhost:8014/farmEdibles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(farmEdibleObj)
        })
        .then(response => response.json())
        .then(getFarmEdibles)
    }

/* -------------------- To make the farmEdibles available to other components -------------------- */

    return (
        <FarmEdiblesContext.Provider value={{
            farmEdibles, getFarmEdibles, getFarmEdibleById, addFarmEdible
        }}>
            {props.children}
        </FarmEdiblesContext.Provider>
    )
}