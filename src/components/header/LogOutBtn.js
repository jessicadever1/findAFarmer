import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import "./Header.css"


export const LogOutBtn = () => {

    const history = useHistory()

/* -------------------- To display user name in the header -------------------- */

    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    const loggedInUser = users.find(u => u.id === currentUser)

/* -------------------- When user is logged out, return them to the Welcome page and clear their user information from Local Storage -------------------- */

    const handleLogOutBtn = () => {
        history.push(`/welcome`)
        localStorage.clear()

    }
    
/* -------------------- Provides a fun surprise sound on Logging Out -------------------- */

    const notePlayer = () => {
        const audio = new Audio('/pigGrunt.mp3')
        audio.play();
    }



    return (
        
        <>
            <div className="welcomeGoodByeDiv">
                <div className="welcomeDiv">
                    <div className="welcomeMsg">
                        <h6 className="welcomeH6">Great to see you, </h6>
                        <h6 className="welcomeH6">{loggedInUser?.username}</h6>
                    </div>
                </div>

                <button onClick={()=> {
                notePlayer()    
                handleLogOutBtn()
                }}className="logOutBtn">
                    Log Out</button>
            </div>
        </>
    )
}