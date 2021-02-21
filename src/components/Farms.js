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
import { PigEdiblesProvider } from "./pigEdibles/PigEdiblesProvider";
import { FarmProvider } from "./farm/FarmProvider";
import { Footer } from "./footer/Footer"

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
                <div className="emptySpaceWelcomeDiv">
                    <div className="emptySpaceWelcomeContent"></div>
                    <section className="landingPageLeftAndRight">
                        <EcoList />
                        <WelcomePage /> 
                    </section>
                    <div className="emptySpaceWelcomeContent"></div>
                </div>
            </Route>  
        </EcoProvider>
        <FarmProvider>
            <PigEdiblesProvider>
                <Route exact path="/registerFarmer">
                    <HeaderCard />
                    <RegisterFarmer />
                </Route>
            </PigEdiblesProvider>
        </FarmProvider>
        <Route exact path="/registerNonFarmer">
            <HeaderCard />
            <RegisterNonFarmer />
        </Route>
    
    <Footer />

    </>
)