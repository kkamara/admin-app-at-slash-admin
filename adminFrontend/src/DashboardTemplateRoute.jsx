import React, { useEffect, } from "react"
import { Outlet, } from "react-router"
import { useDispatch, useSelector, } from "react-redux"
import { authorise, } from "./redux/actions/authActions"

import Sidebar from "./components/layouts/dashboard/Sidebar.jsx"
import Footer from "./components/layouts/dashboard/Footer.jsx"
import Navbar from "./components/layouts/dashboard/Navbar.jsx"

const DashboardTemplateRoute = ({ redirectPath, }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    auth: state.auth,
  }))

  useEffect(() => {
    dispatch(authorise())
  }, [])

  useEffect(() => {
    if (state.auth.error || null === localStorage.getItem("admin-token")) {
      localStorage.removeItem("admin-token")
      if (redirectPath) {
        window.location.href = redirectPath
      } else {
        window.location.href = "/admin/user/login"
      }
    }
  }, [state.auth])

  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="main-panel">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default DashboardTemplateRoute