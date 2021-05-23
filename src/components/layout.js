/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"


const Layout = ( props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <span id="page-top"></span>
      <div id={props.id} className={`main-layout-wrapper ${props.className}`}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="d-flex flex-column">
          {props.children}
        </main>
      </div>
      <div className="fixed-bottom bg-dark ">
        <CookieConsent 
          debug={true}
          disableStyles={true}
          style={{backgroundColor: "#242833"}}
          // buttonStyle={{ backgroundColor: "#ffffff ", backgroundColor: "#ffffff ", color: "black"}}
          // buttonStyle={{ border: "1rem #fff", backgroundColor: "transparent", color: "white"}}
          containerClasses="container  d-flex flex-row py-3 justify-content-between flex-wrap"
          contentClasses="text-white col-md"

          
          buttonWrapperClasses="cookie-consent-button d-flex flex-column justify-content-center col-sm-12 col-md"
          buttonClasses="btn btn-outline-light rounded-0"
          buttonText="Zgadzam się"

        >
            <p className="py-2 mr-5 m-0">Ta strona do działania używa plików cookie. Korzystając z niej zgadzasz się na ich użycie.</p>
        </CookieConsent>
      </div>

      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
