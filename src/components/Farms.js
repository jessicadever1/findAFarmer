import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { WelcomePage } from "./WelcomePage"
import { ApplicationViews } from "./ApplicationViews"
import { HeaderCard } from "./header/HeaderCard"
import "./Farms.css"

export const Farms = () => (

    <>
        <HeaderCard />
        <ApplicationViews />    
    </>

)

/*
<Route 
            render={() => {
                if (localStorage.getItem("find-a-farmer_user")) {
                    return (
                        <>
                            <ApplicationViews />
                        </>
                    );
            } else {
            return (<Redirect to="/welcome" />);
            }
        }}
        />
        <Route path="/welcome">
            <WelcomePage /> 
        </Route>

*/