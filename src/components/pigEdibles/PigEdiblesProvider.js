import React, {useState, createContext } from "react"

export const PigEdiblesContext = createContext()

export const PigEdiblesProvider = (props) => {

    const [pigEdibles, setPigEdibles] = useState([])
    const [farmEdibles, setFarmEdibles] = useState([])

    const getPigEdibles = () => {
        return fetch("http://localhost:8014/pigEdibles")
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

    const getFarmEdibles = () => {
        return fetch("http://localhost:8014/farmEdibles")
        .then(res => res.json())
        .then(setFarmEdibles)
    }

    return (
        <PigEdiblesContext.Provider value={{
            pigEdibles, getPigEdibles, addPigEdibles, farmEdibles, getFarmEdibles
        }}>
            {props.children}
        </PigEdiblesContext.Provider>
    )

}