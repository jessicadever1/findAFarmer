import React, {useContext, useEffect, useState } from "react"
import { PigEdiblesContext } from "./PigEdiblesProvider"
import { PigEdiblesCard } from "./PigEdiblesCard"
import { FarmEdiblesContext } from "../farmEdibles/FarmEdiblesProvider"
import { Link, useParams } from "react-router-dom"
import "./PigEdibles.css"

export const PigEdiblesList = () => {
    const { pigEdibles, getPigEdibles } = useContext(PigEdiblesContext)

    useEffect(()=> {
        getPigEdibles()
    }, [])

    const currentUser = localStorage.getItem("find-a-farm_user")
    const { farmId } = useParams()

    const { addFarmEdible } = useContext(FarmEdiblesContext)

    const [farmEdibles, setFarmEdibles] = useState([])

    const handleCheckBox = (event) => {
        if (event.target.checked === true){
        const newFarmEdibles = [ ...farmEdibles ]
        let selectedVal = parseInt(event.target.value)
        const newFarmEdible =   {
            "farmId": parseInt(farmId),
            "pigEdibleId": selectedVal
            } 
        newFarmEdibles.push(newFarmEdible)
        setFarmEdibles(newFarmEdibles)
        } else {
            const newFarmEdibles = [ ...farmEdibles ]
            let selectedVal = parseInt(event.target.value)
            const uncheckedNewFarmEdibles = newFarmEdibles.find(farmEdible => farmEdible.id === selectedVal)
            //do a find on newFarmEdibles to find the object pigEdibleId === selectedVal
            uncheckedNewFarmEdibles.findIndex()
            //(dear google, how do you find the index and remove the object)
        
            setFarmEdibles(newFarmEdibles)
        }
    }

    const handleClickSaveRegBtn = () => {
        console.log("farmEdibles", farmEdibles)
        //use forEach to save every object of farmEdible, and invoke addFarmEdible inside it, and then push()
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
                                    const farmEdible = farmEdibles.find(f => f.id === farmEdibles.farmId)
                                    return <PigEdiblesCard key={pigEdible.id} pigEdible={pigEdible} handleCheckBox={handleCheckBox}/>
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