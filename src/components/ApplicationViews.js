import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"

export const ApplicationViews = () => {
    
    

    return (
        <>

        <FarmProvider>
            <Route exact path="/farms">
                <FarmList />
            </Route>
        </FarmProvider>

        </>
    )
}