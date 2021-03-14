import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"


export const RegisterNonFarmer = (props) => {

/* -------------------- To use the entered information, to build a new user -------------------- */

    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const zip = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

/* -------------------- To be able to use Cloudinary to store and display images -------------------- */
    
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
                    .then(res => res.json())
                    .then(createdUser => {
                        if (createdUser.hasOwnProperty("id")) {
                            localStorage.setItem("find-a-farm_user", createdUser.id)
                            history.push(`/farms/${createdUser.id}`)
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
        <>
        <section className="container--registerNonFarmer" style={{ textAlign: "center" }}>
        <div className="leftSidePaddingNonFarmer"></div>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--nonFarmerLogin" onSubmit={handleRegister}>
                
                <h2 className="h3 mb-3 font-weight-normal">Get Started</h2>
                    <section className="form--regNonFarmer">
                            <section className="firstNameLastNameNonFarmer">
                                <fieldset className="regInfoStackNonFarmer nameFieldSetNonFarmer">
                                    <label htmlFor="firstName" className="firstNameNonFarmer"> First Name </label>
                                    <input ref={firstName} id="firstNameLabelNonFarmer" type="text" name="firstName" className=" form-name firstNameLabel" placeholder="First name" required autoFocus />
                                </fieldset>
                                <fieldset className="regInfoStackNonFarmer nameFieldSetNonFarmer">
                                    <label htmlFor="lastName" className="lastNameNonFarmer"> Last Name </label>
                                    <input ref={lastName} id="lastNameLabelNonFarmer" type="text" name="lastName" className=" form-name lastNameLabelNonFarmer" placeholder="Last name" required />
                                </fieldset>
                            </section>
                    </section>
                    <section className="usernameImageNonFarmer">
                        <div className="imageNonFarmer">
                            <div className="uploadImgNonFarmer">Upload Image</div>
                                <input className="chooseFileBtn" type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <img src={imageURL} style={{ width: "100px" }} />
                                    )}
                        </div>
                        <div className="loginLeftNonFarmer">
                            <fieldset className="regInfoStackNonFarmer">
                                <label htmlFor="usernameNonFarmer" className="userNameNonFarmer"> Username </label>
                                <input ref={username} type="text" name="usernameNonFarmer" id="userNameLabelNonFarmer" className=" form-username userNameLabelNonFarmer" placeholder="Username" required />
                            </fieldset>
                            <fieldset className="regInfoStackNonFarmer">
                                <label htmlFor="zip" className="zipCodeNonFarmer">Zip Code</label>
                                <input ref={zip} type="text" name="zip" id="zipCodeLabel" className=" zipCodeLabelNonFarmer" placeholder="Zip Code" required />
                            </fieldset>
                            <fieldset className="regInfoStackNonFarmer">
                                <label htmlFor="inputEmail" className="emailAddressNonFarmer"> Email address </label>
                                <input ref={email} type="email" name="email" id="emailAddressLabel" className=" emailAddressLabelNonFarmer" placeholder="Email address" required />
                            </fieldset>
                        </div>
                </section>
                            <fieldset className="loginBtnFieldsetNonFarmer">
                                <button className="loginBtnNonFarmer" type="submit"> Register </button>
                            </fieldset>
                
            </form>
        <div className="rightSidePaddingNonFarmer"></div>
        </section>
    </>
    )
}