import React, { useEffect, useState, } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { Helmet, } from "react-helmet"
import { login, authorise, } from "../../../redux/actions/authActions"
import { appName, } from "../../../constants"
import loginPhoto from "../../../assets/images/login-photo.png"
import ErrorComponent from "../../layouts/ErrorComponent"
import Loading from "../../layouts/Loading"

import "./LoginComponent.scss"

export default function LoginComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    auth: state.auth,
  }))

  useEffect(() => {
    dispatch(authorise())
  }, [])

  useEffect(() => {
    if (null !== state.auth.data) {
      window.location.href = "/admin"
    }
  }, [state.auth])

  const onFormSubmit = (e) => {
    e.preventDefault()

    dispatch(login({ email, password, }))

    setEmail("")
    setPassword("")
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  if (state.auth.loading) {
    return <div className="container login-container text-center">
      <Helmet>
        <title>Sign In - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Loading/>
    </div>
  }

  return <div className="container mt-4 mb-5 login-container">
    <Helmet>
      <title>Admin - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <div className="col-md-2 offset-md-5">
      <div className="login-photo-container">
        <img
          src={loginPhoto}
          alt="Login Photo"
          className="login-photo"
        />
      </div>
      <h3 className="login-lead fw-bold text-center mt-3 mb-0">Admin</h3>
      <form method="post" onSubmit={onFormSubmit}>
        <ErrorComponent error={state.auth.error}/>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            name="email" 
            className="form-control login-email-input"
            id="email"
            value={email}
            onChange={onEmailChange}
            type="text"
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password" 
            className="form-control login-password-input"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div className="login-buttons-container mt-3 text-end">
          <input 
            type="submit" 
            className="btn admin-success login-submit-button ms-4" 
          />
        </div>
      </form>
    </div>

    <footer className="col-md-2 offset-md-5 py-5 py-lg-5">
      <p>© {appName} 2026</p>
    </footer>
  </div>
}
