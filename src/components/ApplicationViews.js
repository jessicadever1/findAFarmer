import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"
import { FarmDetail } from "./farm/FarmDetails"
import { HeaderCard } from "./header/HeaderCard"

export const ApplicationViews = () => {
    
    

    return (
        <>

        <FarmProvider>
            <Route exact path="/farms">
                <FarmList />
            </Route>
            <Route exact path="/farms/detail/:farmId(\d+)">
                <FarmDetail />
            </Route>
        </FarmProvider>

        </>
    )
}