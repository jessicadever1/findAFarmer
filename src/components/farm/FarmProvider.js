import React, { useState, createContext } from "react"

export const FarmContext = createContext()

export const FarmProvider = (props) => {
    const [farms, setFarms] = useState([])

    const getFarms = () => {
        return fetch("http://localhost:8014/farms")
        .then(res => res.json())
        .then(setFarms)
    }

    const getFarmById = (id) => {
        return fetch(`http://localhost:8014/farms/${id}`)
        .then(res => res.json())
    }

    return (
        <FarmContext.Provider value={{
            farms, getFarms, getFarmById
        }}>
            {props.children}
        </FarmContext.Provider>
    )
}