import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src={withPrefix("js/jquery.min.js")} type="text/javascript" />
        <script src={withPrefix("js/popper.min.js")} type="text/javascript" />
        <script
          src={withPrefix("js/bootstrap.min.js")}
          type="text/javascript"
        />
        <script
          src={withPrefix("js/svg-inject.min.js")}
          type="text/javascript"
        />
        <script src={withPrefix("js/aos.min.js")} type="text/javascript" />
        <script
          src={withPrefix("js/medium-zoom.min.js")}
          type="text/javascript"
        />
        <script src={withPrefix("js/plyr.min.js")} type="text/javascript" />
        <script src={withPrefix("js/swiper.min.js")} type="text/javascript" />

        <script
          src={withPrefix("js/jquery.waypoints.min.js")}
          type="text/javascript"
        />
        <script
          src={withPrefix("js/counterup.min.js")}
          type="text/javascript"
        />
        <script src={withPrefix("js/findeas.js")} type="text/javascript" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
