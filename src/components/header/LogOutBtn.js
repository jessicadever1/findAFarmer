import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import "./Header.css"


export const LogOutBtn = () => {

    const history = useHistory()
    const currentUser = parseInt(localStorage.getItem("find-a-farm_user"))
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    const loggedInUser = users.find(u => u.id === currentUser)
    console.log(loggedInUser)

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