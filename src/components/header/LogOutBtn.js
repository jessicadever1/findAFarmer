import React from "react"
import { useHistory } from "react-router-dom"
import "./Header.css"

export const LogOutBtn = () => {

    const history = useHistory()

    const handleLogOutBtn = () => {
        history.push(`/welcome`)
        localStorage.clear()
    }

    return (
        <>
            <button onClick={handleLogOutBtn} className="logOutBtn">Log Out</button>
        </>
    )
}