import { Link } from "gatsby"
import * as React from "react"
import { Logo } from "../utils/imgImport"

const Header = () => (
  <header>
    {/* <!-- Navbar --> */}
    <nav className="navbar fixed-top navbar-border navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        {/* <!-- Logo --> */}
        <Link
          className="navbar-brand order-lg-1 flex-grow-1"
          to="/"
          aria-label="Logo"
        >
          <img className="logo d-flex" src={Logo} alt="Logo" data-svg-inject />
        </Link>
        {/* <!-- End Logo --> */}

        {/* <!-- Navbar Action Button --> */}
        <div className="d-none d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-3 mr-lg-0">
          <a
            className="btn btn-primary d-inline-flex align-items-center"
            href="https://app.sendflows.io/users/register"
          >
            <i className="ri-shopping-cart-2-line ri-lg mr-2"></i>
            <span>Inizia Ora</span>
          </a>
        </div>
        {/* <!-- End Navbar Action Button --> */}

        {/* <!-- Navbar Toggler / Humberger Menu --> */}
        <button
          className="navbar-toggler d-lg-none d-flex align-items-center order-3 order-lg-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="ri-menu-3-fill ri-xl"></i>
        </button>
        {/* <!-- End Navbar Toggler / Humberger Menu --> */}

        {/* <!-- Navbar Menu --> */}
        <div
          className="collapse navbar-collapse order-3 order-lg-1 mr-lg-3"
          id="navbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Overview
              </Link>
            </li>

            <li className="nav-item dropdown position-relative">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDemosDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Funzioni
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDemosDropdown"
              >
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#email"
                >
                  <i className="ri-send-plane-line ri-lg mr-2"></i>
                  Email & SMS Marketing
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#whatsapp"
                >
                  <i className="ri-whatsapp-line ri-lg mr-2"></i>
                  Whatsapp Marketing
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#flow"
                >
                  <i className="ri-organization-chart ri-lg mr-2"></i>
                  Automation Flow
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#transactional-email"
                >
                  <i className="ri-mail-check-line ri-lg mr-2"></i>
                  Email Transazionali
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#transactional-sms"
                >
                  <i className="ri-chat-check-line ri-lg mr-2"></i>
                  SMS Transazionali
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/features#form"
                >
                  <i className="ri-survey-line ri-lg mr-2"></i>
                  Form Builder
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/developers" className="nav-link">
                Developers
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <a href="https://app.sendflows.io" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- End Navbar Menu --> */}
      </div>
    </nav>
    {/* <!-- End Navbar --> */}
  </header>
)

export default Header
