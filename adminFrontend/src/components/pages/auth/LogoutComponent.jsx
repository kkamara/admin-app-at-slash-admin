import React, { useEffect, } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { Helmet, } from "react-helmet"
import { appName, } from '../../../constants'
import { logout, } from '../../../redux/actions/authActions'
import Loading from '../../layouts/Loading'

export default function LogoutComponent() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)

  useEffect(() => {
    const token = localStorage.getItem("admin-token")
    if (token !== null) {
      dispatch(logout())
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("admin-token")
    if (null === token) {
      return navigate("/user/login")
    }
  }, [authState,])

  if (authState.loading) {
    return <>
      <Helmet>
        <title>Logout - {appName}</title>
      </Helmet>
      <div className="container logout-container text-center">
        <Loading />
      </div>
    </>
  }

  return null
}
