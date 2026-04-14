import React from "react"

import "./Sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar sidebar-container" data-background-color="dark">
			<div className="sidebar-logo">
				{/* <!-- Logo Header --> */}
				<div className="logo-header" data-background-color="dark">

					<a href="/admin" className="logo">
						{/* <img src={logo} alt="navbar brand" className="navbar-brand header-logo" height="20"/> */}
						ADMIN
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
				{/* <!-- End Logo Header -->	 */}
			</div>	
			<div className="sidebar-wrapper scrollbar scrollbar-inner">
				<div className="sidebar-content">
					<ul className="nav nav-secondary">
						<li className="nav-item">
							<a href="/admin">
								<i className="fas fa-home"></i>
								<p>Admin</p>
							</a>
						</li>
						<li className="nav-section">
							<span className="sidebar-mini-icon">
								<i className="fa fa-ellipsis-h"></i>
							</span>
							<h4 className="text-section">Screens</h4>
						</li>
						<li className="nav-item">
							<a href="/admin/error/not-found">
								<i className="fas fa-download"></i>
								<p>Example Nav Link</p>
							</a>
						</li>
						<li className="nav-item">
							<a data-bs-toggle="collapse" href="#example">
								<i className="fas fa-book"></i>
								<p>Example Dropdown</p>
								<span className="caret"></span>
							</a>
							<div className="collapse" id="example">
								<ul className="nav nav-collapse">
									<li>
										<a href="/admin/error/not-found">
											<span className="sub-item">Sub-link 1</span>
										</a>
									</li>
									<li>
										<a href="/admin/error/not-found">
											<span className="sub-item">Sub-link 2</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
  )
}

export default Sidebar