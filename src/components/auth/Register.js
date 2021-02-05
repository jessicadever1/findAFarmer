import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

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
                            name: `${firstName.current.value} ${lastName.current.value}`
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
        <section className="container--register" style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <section className="reg">
                <h2 className="h3 mb-3 font-weight-normal">Get Started</h2>
                    <section className="form--reg">
                        <fieldset>
                            <label htmlFor="firstName"> First Name </label>
                            <input ref={firstName} type="text" name="firstName" className="form-control form-name" placeholder="First name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastName"> Last Name </label>
                            <input ref={lastName} type="text" name="lastName" className="form-control form-name" placeholder="Last name" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputEmail"> Email address </label>
                            <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                        </fieldset>
                        <fieldset className="loginBtnFieldset">
                            <button className="loginBtn" type="submit"> Log in </button>
                        </fieldset>
                    </section>
                </section>
            </form>
        </section>
    )
}