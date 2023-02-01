import React, { useEffect } from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import AOS from "aos"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/svg-injector/1.1.3/svg-injector.min.js"
          integrity="sha512-LpKoEmPyokcDYSjRJ/7WgybgdAYFsKtCrGC9m+VBwcefe1vHXyUnD9fTQb3nXVJda6ny1J84UR+iBtEYm3OQmQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/medium-zoom/1.0.8/medium-zoom.min.js"
          integrity="sha512-J3G1KdOKUuj92x5w2mV/7AmPckHbiTQdoPXd6qaeHemfcNOsuwFVQm851m+lLuJR33sGuz9TAzWtccXZOsFE0Q=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.3/plyr.min.js"
          integrity="sha512-vfpVlxMY9ryJFidrwKK2Nus5vQ5vGilRCjImLBYj3uoAz75crnSKM7zC3jFcmtCI7u58d9Cp0mEZmWwidm9xsg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js"
          integrity="sha512-h5Vv+n+z0eRnlJoUlWMZ4PLQv4JfaCVtgU9TtRjNYuNltS5QCqi4D4eZn4UkzZZuG2p4VBz3YIlsB7A2NVrbww=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
          integrity="sha512-fHXRw0CXruAoINU11+hgqYvY/PcsOWzmj0QmcSOtjlJcqITbPyypc8cYpidjPurWpCnlB8VKfRwx6PIpASCUkQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"></script>

        <script src={withPrefix("findeas.js")} type="text/javascript" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
