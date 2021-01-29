import React, { useState, createContext } from "react"

export const FarmContext = createContext()

export const FarmProvider = (props) => {
    const [farms, setFarms] = useState([])

    const getFarms = () => {
        return fetch("http://localhost:8014/farms")
        .then(res => res.json())
        .then(setFarms)
    }

    return (
        <FarmContext.Provider value={{
            farms, getFarms
        }}>
            {props.children}
        </FarmContext.Provider>
    )
}