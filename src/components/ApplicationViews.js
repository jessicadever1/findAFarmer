import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"
import { FarmDetail } from "./farm/FarmDetails"
import { HeaderCard } from "./header/HeaderCard"
import { ReviewProvider } from "./reviews/ReviewProvider"
import { ReviewForm } from "./reviews/ReviewForm"
import { UserProvider } from "./users/UserProvider"
import { UserCard } from "./users/UserCard"

export const ApplicationViews = () => {
    
/* -------------------- To display the FarmList, Details and Forms on their individual URLs -------------------- */    

    return (
        <>

        <UserProvider>
            <ReviewProvider>
                <FarmProvider>

                    <Route exact path="/farms/:userId(\d+)">
                        <FarmList />
                    </Route>

                    <Route exact path="/farms/detail/:farmId(\d+)">
                        <FarmDetail />
                    </Route>

                    <Route exact path="/reviews/create/:farmId(\d+)">
                        <ReviewForm />
                    </Route>

                </FarmProvider>
            </ReviewProvider>
        </UserProvider>
        </>
    )
}