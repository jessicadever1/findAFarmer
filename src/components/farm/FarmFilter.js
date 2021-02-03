import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Farm.css"
import { FarmContext } from "./FarmProvider"

export const FarmFilter = () => {

    // const { farms, getFarms } = useContext(FarmContext)
    // const { farmZip } = useParams()
    // const [ farm, setFarm ] = useState({
    //     "id": 0,
    //     "userId": 0,
    //     "ownerName": "",
    //     "ownerEmail": "@gmail.com",
    //     "streetAddress": "",
    //     "city": "",
    //     "state": "",
    //     "zip": 0
    // })

    // const filterByZip = (event) => {
    //     const newFarm = { ...farm }
    //     let selectedVal = event.target.value
    //     if (event.target.value === "37174") {
    //         selectedVal = parseInt(selectedVal)
    //     }
    //     newFarm[event.target.value] = selectedVal
    //     setFarm(newFarm)

    // }
    
    return (
        <>
            <select className="farmFilterSelect">
                <option value="0">Find A Farm By County</option>
                <option value="37174">Maury</option>
                <option value="37015">Cheatham</option>
                <option value="37055">Dickson</option>
                <option value="37043">Montgomery</option>
                <option value="37087">Wilson</option>
                <option value="37031">Sumner</option>
                <option value="37184">Rutherford</option>
                <option value="37091">Marshall</option>
            </select>
        </>
    )
}