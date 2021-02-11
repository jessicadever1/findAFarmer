import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"

export const RegisterBtns = () => {
    return (
        <>
        <section className="containter--initialRegister">
            <h2 className="h3 mb-3 font-weight-normal getStarted">Get Started</h2>
            <div className="initialLoginBtns">
                <Link to={`/registerNonFarmer`} className="center"><button className="notAFarmer" >I am looking for a farmer</button></Link>
                <Link to={`/registerFarmer`} className="center"><button className="iAmAFarmer" >I am a farmer</button></Link>
            </div>
        </section>
        </>
    )
}