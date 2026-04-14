
import {
  LoginUserService,
  AuthorizeUserService,
  LogoutUserService,
} from "../../services/AuthService"
import { auth, } from "../types"

export const login = creds => {
  return dispatch => {

    dispatch({ type: auth.AUTH_LOGIN_PENDING, })

    LoginUserService(creds).then(res => {
      dispatch({
        type: auth.AUTH_LOGIN_SUCCESS,
        payload: res,
      })

    }, error => {
      let message
      if ("ERR_NETWORK" === error.code) {
        message = "Server unavailable."
      } else if (error?.response?.data?.message) {
        message = error.response.data.message
      } else {
        message = "Something went wrong. Please come back later."
      }
      dispatch({
        type: auth.AUTH_LOGIN_ERROR,
        payload: message,
      })
    })
  }
}

export const authorise = () => {
  return dispatch => {

    dispatch({ type: auth.AUTH_AUTHORISE_PENDING, })
    const tokenID = "admin-token"
    if (null === localStorage.getItem(tokenID)) {
      return dispatch({
        type: auth.AUTH_AUTHORISE_ERROR,
        payload: "Token not set.",
      })
    }

    AuthorizeUserService().then(res => {
      dispatch({
        type: auth.AUTH_AUTHORISE_SUCCESS,
        payload: res,
      })

    }, error => {
      if (401 === error.response.status) {
        localStorage.removeItem(tokenID)
        window.location = "/admin/user/login"
      }
      let message
      if ("ERR_NETWORK" === error.code) {
        message = "Server unavailable."
      } else if (error?.response?.data?.message) {
        message = error.response.data.message
      } else {
        message = "Something went wrong. Please come back later."
      }
      dispatch({
        type: auth.AUTH_AUTHORISE_ERROR,
        payload: message,
      })
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: auth.AUTH_LOGOUT_PENDING, })

    LogoutUserService().then(res => {
      dispatch({
        type: auth.AUTH_LOGOUT_SUCCESS,
        payload: null,
      })

    }, error => {
      let message
      if ("ERR_NETWORK" === error.code) {
        message = "Server unavailable."
      } else if (error?.response?.data?.message) {
        message = error.response.data.message
      } else {
        message = "Something went wrong. Please come back later."
      }
      dispatch({
        type: auth.AUTH_LOGOUT_ERROR,
        payload: message,
      })
    })
  }
}