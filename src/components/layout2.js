/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Scrollspy from 'react-scrollspy'


import Header2 from "./header2"
import Footer from "./footer"
import "../styles/layout.css"

const Layout2 = ({ children }) => {
  

  return (
    <>
      <span id="page-top"></span>
      <div className="main-Layout2-wrapper">
        <Header2 />

        <main style={{marginTop: '10rem'}} >
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}


export default Layout2
