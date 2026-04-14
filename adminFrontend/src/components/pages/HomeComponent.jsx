import React from "react"
import { useSelector, } from "react-redux"
import { Helmet, } from "react-helmet"
import Loading from "../layouts/Loading"

import "./HomeComponent.scss"

export default function HomeComponent() {
  const state = useSelector(state => ({
    auth: state.auth,
  }))

  if (state.auth.loading) {
    return <div className="container home-container text-center">
      <Helmet>
        <title>Dashboard - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Loading/>
    </div>
  }

  return (
	<div className="container home-container">
	  <Helmet>
	    <title>Dashboard - {process.env.REACT_APP_NAME}</title>
	  </Helmet>
	  <div className="page-inner">
		<div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
		  <div>
			<h3 className="fw-bold mb-3">Admin</h3>
			<h6 className="op-7 mb-2">Welcome to your admin panel</h6>
		  </div>
		  {/* <div className="ms-md-auto py-2 py-md-0">
		    <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
		    <a href="#" className="btn btn-primary btn-round">Add Customer</a>
		  </div> */}
		</div>
	  </div>
	</div>
  )
}
