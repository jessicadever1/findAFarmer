import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import "./WelcomePage.css"

/* -------------------- To render the login and register info on the same page -------------------- */    

export const WelcomePage = () => {
    return (
        <section className="welcome">
            <>

                <Route path="/welcome">
                    <Register />
                    <Login />
                </Route>

            </>
        </section>
    )
}