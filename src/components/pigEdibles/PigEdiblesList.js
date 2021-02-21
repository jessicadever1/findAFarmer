import React, {useContext, useEffect } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import { PigEdiblesCard } from "./PigEdiblesCard"
import { Link, useParams } from "react-router-dom"
import "./PigEdibles.css"

export const PigEdiblesList = () => {
    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)

    useEffect(()=> {
        getPigEdibles()
    }, [])

    const currentUser = localStorage.getItem("find-a-farm_user")
    const { userId } = useParams()

    const handleClickSaveRegBtn = () => {
        console.log("currentUser", currentUser)
        console.log("userId", userId)
        if (currentUser === userId) {
            console.log("id", currentUser)
        }
    }

    return (
        <>
            <div className="checkListDisplay">
                <div className="leftSidePadding"></div>
                    <section className="">
                        <div className="pigEdiblesDiv">
                                            <h2>Which foods would you like to accept?</h2>
                                            <p>Please check the box for any item that you would like to encourage visitors to feed your pigs. The list of items that are checked will become your farm's "Include" list. All items with unchecked boxes, will automatically become your "Exclude" list.</p>
                                        </div>
                        <div className="pigEdiblesList">
                            {
                                pigEdibles.map(pigEdible => {
                                    return <PigEdiblesCard key={pigEdible.id} pigEdible={pigEdible} />
                                })
                            }
                        </div>
                        <div className="completeRegBtnDiv">
                            <Link to="/farms">
                                <button className="completeRegBtn" onClick={handleClickSaveRegBtn}>Save</button>
                            </Link>
                        </div>
                    </section>
                <div className="rightSidePadding"></div>
            </div>
        </>
    )
}