import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"
import { FarmDetail } from "./farm/FarmDetails"
import { HeaderCard } from "./header/HeaderCard"
import { ReviewProvider } from "./reviews/ReviewProvider"
import { ReviewForm } from "./reviews/ReviewForm"
import { UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
    
    

    return (
        <>

        <UserProvider>
            <ReviewProvider>
                <FarmProvider>
                    <Route exact path="/farms">
                        <FarmList />
                    </Route>
                    <Route exact path="/farms/detail/:farmId(\d+)">
                        <FarmDetail />
                    </Route>
                    <Route exact path="/reviews/create">
                        <ReviewForm />
                    </Route>
                </FarmProvider>
            </ReviewProvider>
        </UserProvider>
        </>
    )
}