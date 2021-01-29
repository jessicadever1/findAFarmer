import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import "./WelcomePage.css"

export const WelcomePage = () => {
    return (
        <>

            <Route path="/welcome">
                <Register />
                <Login />
            </Route>

        </>
    )
}