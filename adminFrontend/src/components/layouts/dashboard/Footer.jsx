import React from "react"
import { appName, } from "../../../constants"

import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href={process.env.REACT_APP_WEB_MAIN_ROOT_URL}>
                Main Website
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright ms-auto">
          2026
        </div>
      </div>
    </footer>
  )
}

export default Footer