import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch (`http://localhost:8014/users?email=${email.current.value}`)
        .then(res => res.json())
        .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("find-a-farm_user", exists.id)
                    history.push("/farms")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <section className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="userEntrance">
                <div className="form--login" onSubmit={handleLogin}>
                    <h2>Welcome Back!</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit" id="userLogin">
                            Log in
                        </button>
                    </fieldset>
                </div>
            </section>
        </section>
    )
}