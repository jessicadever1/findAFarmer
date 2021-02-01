import React from "react"
import { Route, Redirect } from "react-router-dom"
import { WelcomePage } from "./WelcomePage"
import { ApplicationViews } from "./ApplicationViews"
import { HeaderCard } from "./header/HeaderCard"
import "./Farms.css"

export const Farms = () => (

    <>
        <Route 
            render={() => {
                if (localStorage.getItem("find-a-farm_user")) {
                    return (
                        <>
                            <HeaderCard />
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
    </>

)