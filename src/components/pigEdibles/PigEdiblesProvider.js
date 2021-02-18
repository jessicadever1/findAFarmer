import React, {useState, createContext } from "react"

export const PigEdiblesContext = createContext()

export const PigEdiblesProvider = (props) => {

    const [pigEdibles, setPigEdibles] = useState([])

    const getPigEdibles = () => {
        return fetch("http://localhost:8014/pigEdibles?_embed=farm")
        .then(res => res.json())
        .then(setPigEdibles)
    }

    const addPigEdibles = (pigEdiblesObj) => {
        return fetch ("http://localhost:8014/pigEdibles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pigEdiblesObj)
        })
        .then(getPigEdibles)
    }

    return (
        <PigEdiblesContext.Provider value={{
            pigEdibles, getPigEdibles, addPigEdibles
        }}>
            {props.children}
        </PigEdiblesContext.Provider>
    )

}