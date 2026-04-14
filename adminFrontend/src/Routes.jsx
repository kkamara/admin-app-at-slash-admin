import React from "react"
import { Routes, Route, } from "react-router-dom"

import Home from "./components/pages/HomeComponent"
import Login from "./components/pages/auth/LoginComponent"
import Logout from "./components/pages/auth/LogoutComponent"
import NotFound from "./components/pages/http/NotFoundComponent"

import { url, } from "./utils/config"
import DashboardTemplateRoute from "./DashboardTemplateRoute"

export default () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardTemplateRoute/>}>
          <Route path={url("/")} element={<Home />}/>
        </Route>
        <Route path={url("/user/login")} element={<Login />}/>
        <Route path={url("/user/logout")} element={<Logout />}/>
        <Route path={url("*")} element={<NotFound />}/>
      </Routes>
    </>
  )
}
