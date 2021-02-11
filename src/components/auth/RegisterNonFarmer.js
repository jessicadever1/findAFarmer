import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export const RegisterNonFarmer = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const zip = useRef()
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
                            imageURL: imageURL
                        })
                    })
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
        
        <section className="container--registerNonFarmer" style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--nonFarmerLogin" onSubmit={handleRegister}>
                
                <h2 className="h3 mb-3 font-weight-normal">Get Started</h2>
                    <section className="form--regNonFarmer">
                            <section className="firstNameLastName">
                                <fieldset className="regInfoStack">
                                    <label htmlFor="firstName"> First Name </label>
                                    <input ref={firstName} type="text" name="firstName" className="form-control form-name" placeholder="First name" required autoFocus />
                                </fieldset>
                                <fieldset className="regInfoStack">
                                    <label htmlFor="lastName"> Last Name </label>
                                    <input ref={lastName} type="text" name="lastName" className="form-control form-name" placeholder="Last name" required />
                                </fieldset>
                            </section>
                    </section>
                    <section className="usernameAndImage">
                        <fieldset className="regInfoStack">
                            <label htmlFor="username"> Username </label>
                            <input ref={username} type="text" name="username" className="form-control form-username" placeholder="Username" required />
                        </fieldset>
                        <div className="image">
                            <div>Upload Image</div>
                                <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <img src={imageURL} style={{ width: "100px" }} />
                                    )}
                        </div>
                    </section>
                    <fieldset>
                        <label htmlFor="zip"></label>
                        <input ref={zip} type="text" name="zip" className="form-control" placeholder="Zip Code" required />
                    </fieldset>
                    <fieldset className="regInfoStack">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                    </fieldset>
                    <fieldset className="loginBtnFieldset">
                        <button className="loginBtn" type="submit"> Register </button>
                    </fieldset>
                    
                
            </form>
        </section>
    )
}