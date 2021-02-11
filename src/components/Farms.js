import React from "react";
import { Route, Redirect } from "react-router-dom";
import { WelcomePage } from "./WelcomePage";
import { ApplicationViews } from "./ApplicationViews";
import { HeaderCard } from "./header/HeaderCard";
import "./Farms.css";
import { EcoList } from "./eco/EcoList";
import { EcoProvider } from "./eco/EcoProvider";
import { RegisterFarmer } from "./auth/RegisterFarmer"
import { RegisterNonFarmer } from "./auth/RegisterNonFarmer"

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
            return <Redirect to="/welcome" />;
            }
        }}
    />
    <EcoProvider>
        <Route path="/welcome">
            <HeaderCard />
            <section className="landingPageLeftAndRight">
                <EcoList />
                <WelcomePage /> 
            </section>
        </Route>  
    </EcoProvider>
    <Route exact path="/registerFarmer">
        <HeaderCard />
        <RegisterFarmer />
    </Route>
    <Route exact path="/registerNonFarmer">
        <HeaderCard />
        <RegisterNonFarmer />
    </Route>
    </>
)