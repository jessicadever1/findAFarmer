import React from "react"
import { useHistory } from "react-router-dom"
import "./Header.css"


export const LogOutBtn = () => {

    const history = useHistory()

    const handleLogOutBtn = () => {
        history.push(`/welcome`)
        localStorage.clear()

    }
    
    const notePlayer = () => {
        const audio = new Audio('/pigGrunt.mp3')
        audio.play();
    }

    return (
        <>
                <button onClick={()=> {
                notePlayer()    
                handleLogOutBtn()
                }}className="logOutBtn">
                    Log Out</button>
        
        </>
    )
}