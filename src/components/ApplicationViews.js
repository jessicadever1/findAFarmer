import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"
import { FarmDetail } from "./farm/FarmDetails"
import { HeaderCard } from "./header/HeaderCard"
import { ReviewProvider } from "./reviews/ReviewProvider"

export const ApplicationViews = () => {
    
    

    return (
        <>

        <ReviewProvider>
            <FarmProvider>
                <Route exact path="/farms">
                    <FarmList />
                </Route>
                <Route exact path="/farms/detail/:farmId(\d+)">
                    <FarmDetail />
                </Route>
            </FarmProvider>
        </ReviewProvider>
        </>
    )
}