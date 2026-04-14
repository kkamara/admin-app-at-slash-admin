import React from 'react'
import { useSelector, } from "react-redux"
import { Helmet, } from "react-helmet"
import { appName, } from "../../../constants"
import Loading from "../../layouts/Loading"

import "./Navbar.scss"

function Navbar() {
  const state = useSelector(state => ({
    auth: state.auth,
  }))

  if (state.auth.loading) {
    return <div className="container home-container text-center">
      <Helmet>
        <title>Admin - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Loading/>
    </div>
  }

  return (
    <div className="main-header navbar-container">
      <div className="main-header-logo">
        {/* <!-- Logo Header --> */}
        <div className="logo-header" data-background-color="dark">

          <a href="index.html" className="logo">
            {appName} Admin
          </a>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>

        </div>
        {/* <!-- End Logo Header --> */}
      </div>
      {/* <!-- Navbar Header --> */}
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">

        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </div>
              <input type="text" placeholder="Search ..." className="form-control"/>
            </div>
          </nav>

          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                <i className="fa fa-search"></i>
              </a>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input type="text" placeholder="Search ..." className="form-control"/>
                  </div>
                </form>
              </ul>
            </li>
            
            <li className="nav-item topbar-user dropdown hidden-caret">
              <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <div className="avatar-sm">
                  <img src="/admin/dashboard/img/profile.jpg" alt="..." className="avatar-img rounded-circle"/>
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi,</span> <span className="fw-bold">{state.auth.data.user.firstName}</span>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg"><img src="/admin/dashboard/img/profile.jpg" alt="image profile" className="avatar-img rounded"/></div>
                      <div className="u-text">
                        <h4>{state.auth.data.user.firstName} {state.auth.data.user.lastName}</h4>
                        <small>Site Admin</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/error/not-found">
                      Account Setting
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href={process.env.REACT_APP_WEB_MAIN_ROOT_URL}>Back to main website</a>
                    <a className="dropdown-item" href="/admin/user/logout">Logout</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </div>
  )
}

export default Navbar