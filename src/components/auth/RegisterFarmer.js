import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const RegisterFarmer = (props) => {
    const id = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const streetAddress = useRef()
    const city = useRef()
    const zip = useRef()
    const farmName = useRef()
    const website = useRef()
    const instructions = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const [imageURL, setImageURL] = useState("")

    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "FindAFarmer")
        setLoading(true)
        const response = await fetch(
            "https://api.cloudinary.com/v1_1/jessicadever1/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await response.json()
        setImageURL(file.secure_url)
        setLoading(false)
    }

/* -------------------- To check if user already exists -------------------- */

    const existingUserCheck = () => {
        return fetch(`http://localhost:8014/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

/* -------------------- If user does not exist, then register the user and direct them to logged in page -------------------- */

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8014/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            imageURL: imageURL,
                            username: username.current.value,
                            zip: zip.current.value
                        })
                    })
                    .then(
                        fetch("http://localhost:8014/farms", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                streetAddress: streetAddress.current.value,
                                city: city.current.value,
                                state: "TN",
                                zip: zip.current.value,
                                farmName: farmName.current.value,
                                website: website.current.value,
                                instructions: instructions.current.value,
                                imageURL: imageURL
                            })
                        })
                    )
                    .then(res => res.json())
                    .then(createdUser => {
                        if (createdUser.hasOwnProperty("id")) {
                            localStorage.setItem("find-a-farm_user", createdUser.id)
                            history.push("/farmerRegistrationStepTwo")
                        }
                    })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

/* -------------------- The contents of the register user box -------------------- */

    return (
        <section className="container--registerFarmer" style={{ textAlign: "center" }}>

        <div className="leftSidePadding"></div>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--nonFarmerLogin" onSubmit={handleRegister}>
                
                <h2 className="h3 mb-3 font-weight-normal">Get Started</h2>
                    <section className="form--regNonFarmer">
                            <section className="firstNameLastNameFarmer">
                                <fieldset className="nameFieldSetFarmer">
                                    <label htmlFor="firstName" className="firstNameLabelFarmer"> First Name </label>
                                    <input ref={firstName} id="firstNameLabelFarmer" type="text" name="firstName" className="firstNameFarmerInput" placeholder="First name" required autoFocus />
                                </fieldset>
                                <fieldset className="nameFieldSetFarmer">
                                    <label htmlFor="lastName" className="lastNameLabelFarmer"> Last Name </label>
                                    <input ref={lastName} id="lastNameLabel" type="text" name="lastName" className="lastNameFarmerInput" placeholder="Last name" required />
                                </fieldset>
                            </section>
                    </section>
                    <section className="userinfoImageFarmerColumns">
                        <div className="imageInstructionsFarmer">
                            <div className="imageFarmer">
                                <div className="uploadImgFarmer">Upload Image</div>
                                    <input className="chooseFileBtn" type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                                    {loading ? (
                                        <h3>Loading...</h3>
                                    ) : (
                                            <img src={imageURL} style={{ width: "100px" }} />
                                        )}
                            </div>
                            <div className="whiteSpace">
                                <fieldset className="regInfoStackFarmer">
                                        <label htmlFor="instructions" className="instructions">Instructions</label>
                                        <textarea white-space="pre-wrap" wrap="hard" ref={instructions} type="textarea" name="instructions" id="instructionsLabel" className="form-control instructionsLabel" placeholder="With as much clarity as possible, tell your visitors where and how to drop their slop at your farm." required  autoFocus/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="loginLeftFarmer">
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="username" className="userNameLabel"> Username </label>
                                <input ref={username} type="text" name="username" id="userNameLabel" className="userNameInput" placeholder="Username" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="inputEmail" className="emailAddressLabel"> Email address </label>
                                <input ref={email} type="email" name="email" id="emailAddressInput" className="emailAddressInput" placeholder="Email address" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="inputFarmName" className="farmNameLabel"> Farm name </label>
                                <input ref={farmName} type="text" name="farmName" id="farmNameInput" className="farmNameInput" placeholder="Farm name" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="inputStreetAddress" className="streetAddressLabel"> Street address </label>
                                <input ref={streetAddress} type="text" name="streetAddress" id="streetAddressInput" className="streetAddressInput" placeholder="Street address" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="inputCity" className="cityLabel"> City </label>
                                <input ref={city} type="text" name="city" id="cityInput" className="cityInput" placeholder="City" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="zip" className="zipCodeLabel">Zip Code</label>
                                <input ref={zip} type="text" name="zip" id="zipCodeInput" className="zipCodeInput" placeholder="Zip Code" required />
                            </fieldset>
                            <fieldset className="regInfoStackFarmer">
                                <label htmlFor="website" className="websiteLabel">Website URL</label>
                                <input ref={website} type="text" name="website" id="websiteInput" className="websiteInput" placeholder="Website URL" required />
                            </fieldset>
                        </div>
                </section>
                        
                            <fieldset className="loginBtnFieldsetFarmer">
                                <button className="loginBtn" type="submit"> Register </button>
                            </fieldset>
                
            </form>
            <div className="rightSidePadding"></div>
        </section>
    )
}