import React from "react"
import { Route } from "react-router-dom"
import { FarmProvider } from "./farm/FarmProvider"
import { FarmList } from "./farm/FarmList"
import { FarmDetail } from "./farm/FarmDetails"
import { ReviewProvider } from "./reviews/ReviewProvider"
import { ReviewForm } from "./reviews/ReviewForm"
import { UserProvider } from "./users/UserProvider"
import { ReviewEditForm } from "./reviews/ReviewEditForm"
import { PigEdiblesProvider } from "./pigEdibles/PigEdiblesProvider"
import { PigEdiblesList } from "./pigEdibles/PigEdiblesList"
import { FarmEdiblesProvider } from "./farmEdibles/FarmEdiblesProvider"

export const ApplicationViews = () => {
    
/* -------------------- To display the FarmList, Details and Forms on their individual URLs -------------------- */    

    return (
        <>

        <UserProvider>
            <ReviewProvider>
                <FarmProvider>

                    <Route exact path="/farms/">
                        <FarmList />
                    </Route>

                    <Route exact path="/farms/detail/:farmId(\d+)">
                        <FarmDetail />
                    </Route>

                    <Route exact path="/reviews/create/:farmId(\d+)">
                        <ReviewForm />
                    </Route>

                    <Route exact path="/reviews/edit/:reviewId(\d+)">
                        <ReviewEditForm />
                    </Route>

                </FarmProvider>
            </ReviewProvider>
        </UserProvider>

        <UserProvider>
            <FarmProvider>
                <PigEdiblesProvider>
                    <FarmEdiblesProvider>

                        <Route exact path="/farmerRegistrationStepTwo/:farmId(\d+)">
                            <PigEdiblesList />
                        </Route>

                    </FarmEdiblesProvider>
                </PigEdiblesProvider>
            </FarmProvider>
        </UserProvider>
        </>
    )
}