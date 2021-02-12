import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const RegisterFarmer = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const streetAddress = useRef()
    const city = useRef()
    const zip = useRef()
    const farmName = useRef()
    const verifyPassword = useRef()
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
                                farmName: farmName.current.value,
                                
                            })
                        })
                    )
                    .then(res => res.json())
                    .then(createdUser => {
                        if (createdUser.hasOwnProperty("id")) {
                            localStorage.setItem("find-a-farm_user", createdUser.id)
                            history.push("/farms")
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
        <section className="container--register" style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--nonFarmerLogin" onSubmit={handleRegister}>
                
                <h2 className="h3 mb-3 font-weight-normal">Get Started</h2>
                    <section className="form--regNonFarmer">
                            <section className="firstNameLastName">
                                <fieldset className="regInfoStack">
                                    <label htmlFor="firstName" className="firstName"> First Name </label>
                                    <input ref={firstName} id="firstNameLabel" type="text" name="firstName" className="form-control form-name firstNameLabel" placeholder="First name" required autoFocus />
                                </fieldset>
                                <fieldset className="regInfoStack">
                                    <label htmlFor="lastName" className="lastName"> Last Name </label>
                                    <input ref={lastName} id="lastNameLabel" type="text" name="lastName" className="form-control form-name lastNameLabel" placeholder="Last name" required />
                                </fieldset>
                            </section>
                    </section>
                    <section className="usernameImage">
                        <div className="image">
                            <div className="uploadImg">Upload Image</div>
                                <input className="chooseFileBtn" type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <img src={imageURL} style={{ width: "100px" }} />
                                    )}
                        </div>
                        <div className="loginLeft">
                            <fieldset className="regInfoStack">
                                <label htmlFor="username" className="userName"> Username </label>
                                <input ref={username} type="text" name="username" id="userNameLabel" className="form-control form-username userNameLabel" placeholder="Username" required />
                            </fieldset>
                            <fieldset className="regInfoStack">
                                <label htmlFor="zip" className="zipCode">Zip Code</label>
                                <input ref={zip} type="text" name="zip" id="zipCodeLabel" className="form-control zipCodeLabel" placeholder="Zip Code" required />
                            </fieldset>
                            <fieldset className="regInfoStack">
                                <label htmlFor="inputEmail" className="emailAddress"> Email address </label>
                                <input ref={email} type="email" name="email" id="emailAddressLabel" className="form-control emailAddressLabel" placeholder="Email address" required />
                            </fieldset>
                            <fieldset className="regInfoStack">
                                <label htmlFor="inputStreetAddress" className="streetAddress"> Street address </label>
                                <input ref={streetAddress} type="text" name="streetAddress" id="streetAddressLabel" className="form-control streetAddressLabel" placeholder="Street address" required />
                            </fieldset>
                            <fieldset className="regInfoStack">
                                <label htmlFor="inputCity" className="city"> City </label>
                                <input ref={city} type="text" name="city" id="cityLabel" className="form-control cityLabel" placeholder="City" required />
                            </fieldset>
                            <fieldset className="regInfoStack">
                                <label htmlFor="inputFarmName" className="farmName"> Farm name </label>
                                <input ref={city} type="text" name="city" id="cityLabel" className="form-control cityLabel" placeholder="City" required />
                            </fieldset>
                        </div>
                </section>
                            <fieldset className="loginBtnFieldset">
                                <button className="loginBtn" type="submit"> Register </button>
                            </fieldset>
                
            </form>
        </section>
    )
}