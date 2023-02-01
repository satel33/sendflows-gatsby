import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="space-3 pb-4 bg-primary-3 text-white link-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <p className="lead text-white">
            Ottieni tips gratuiti sul mondo delle automazioni. Nessuno spam.
          </p>
          <form id="newsletter" action="php/mailchimp.php" method="POST">
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="La tua email"
                required
              />
              <div className="input-group-append align-items-center">
                <button
                  id="newsletterBtnSubmit"
                  className="btn btn-primary rounded-right"
                  type="submit"
                  name="submit"
                >
                  Inizia
                </button>
                <button
                  id="newsletterBtnSending"
                  className="btn btn-primary d-none"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Iscrizione...</span>
                </button>
              </div>
            </div>
          </form>
          <div
            id="newsletterAlertSuccess"
            className="alert alert-success d-none"
            role="alert"
          >
            Grazie per esserti iscritto! 👾.
          </div>
          <div
            id="newsletterAlertError"
            className="alert alert-danger d-none"
            role="alert"
          >
            Iscrizione fallita, prova di nuovo!↩️
          </div>
        </div>
        <div className="col-4 col-lg-2 offset-lg-2 mt-5 mt-lg-0">
          <h5>Azienda</h5>
          <div className="row">
            <div className="col">
              <Link className="nav-link pl-0" to="/features">
                All Features
              </Link>
              <Link className="nav-link pl-0" to="/developers">
                Developers
              </Link>
              <Link className="nav-link pl-0" to="/blog">
                Blog
              </Link>
              <Link className="nav-link pl-0" to="/contact">
                Contact
              </Link>
              <Link className="nav-link pl-0" to="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-2 mt-5 mt-lg-0">
          <h5>Supporto</h5>
          <Link className="nav-link pl-0" to="/contact">
            Contact
          </Link>
          <Link className="nav-link pl-0" to="/contact">
            Help Center
          </Link>
          <h5 className="mt-4">Developers</h5>
          <Link className="nav-link pl-0" to="/docs">
            Docs
          </Link>
          <Link className="nav-link pl-0" to="/docs">
            APIs
          </Link>
        </div>
        <div className="col-4 col-lg-2 mt-5 mt-lg-0">
          <h5>Legale</h5>
          <Link className="nav-link pl-0" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="nav-link pl-0" to="/gdpr">
            GPDR
          </Link>
          <Link className="nav-link pl-0" to="/cookie-policy">
            Cookie
          </Link>
          <Link className="nav-link pl-0" to="/terms-and-conditions">
            Term of Use
          </Link>
          <Link className="nav-link pl-0" to="/forms">
            Modulistica
          </Link>
        </div>
      </div>
      <div className="row pt-5 pb-0">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
        <div className="col-auto">
          <div className="d-flex flex-column flex-sm-row align-items-center text-small">
            <div>
              <small>
                Copyright &copy; 2022 Sendflows, P.IVA IT 03043840648 | All
                right reserved. Coded and Design with Love.
              </small>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-column flex-sm-row align-items-center text-small">
            <div>
              {/* <!-- Nav Item --> */}
              <li className="no-list-style nav-item dropdown position-relative">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDemosDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  English
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDemosDropdown"
                >
                  <Link
                    className="text-dark dropdown-item d-flex align-items-center"
                    to="/en"
                  >
                    English
                  </Link>
                  <Link
                    className="text-dark dropdown-item d-flex align-items-center"
                    to="/it"
                  >
                    Italian
                  </Link>
                </div>
              </li>
              {/* <!-- End Nav Item --> */}
            </div>
          </div>
        </div>
        <div className="col-auto mt-3 mt-lg-0">
          <ul className="list-unstyled d-flex mb-0 mt-2 link-white">
            <li className="mx-3">
              <a
                href="https://github.com/sendflows"
                className="text-decoration-none"
                aria-label="Twitter"
              >
                <i className="ri-github-fill ri-lg"></i>
              </a>
            </li>

            <li className="mx-3">
              <a
                href="https://www.instagram.com/sendflows"
                className="text-decoration-none"
                aria-label="Behance"
              >
                <i className="ri-instagram-fill ri-lg"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://www.facebook.com/sendflows"
                className="text-decoration-none"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill ri-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
