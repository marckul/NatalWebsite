import * as React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { SmoothLink } from '../components/componentsBundle'
// https://www.npmjs.com/package/react-scrollspy
import Scrollspy from 'react-scrollspy'



/*
const NavLink = (props) => (
  <Link className="nav-link" activeClassName="active" to={props.to}>{props.children}</Link>
)
*/ 

const NavLinkActive = ({children, to, thisPath, currentPath}) => {
  // debugger;
  let isActiveClass = thisPath === currentPath ? "active" : "";
  return(
    <SmoothLink className={`nav-link ${isActiveClass}`} to={to}> {children}</SmoothLink>
  )
}

const NavLinkSpy = ({children, to}) => {
  // debugger;
  return(
    <SmoothLink className="nav-link" to={to}> {children}</SmoothLink>
  )
}


const NavBrand1 = () => (
  <Link className="navbar-brand " to="/">
    <span>Natal</span>
    <span>instalacje</span>
  </Link>
)


const Header = ({ siteTitle, currentPath }) => {
  // debugger;
  return(
    <header>
      <nav id="navbar-main" className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <NavBrand1/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <div className="navbar-nav ml-auto ">
              <Scrollspy className="navbar-nav"  items={['start', 'oferta', 'o-firmie', 'kontakt', 'strona-aktualnosci']} currentClassName="active" offset={-100}>
                <li className="nav-item order-1">
                  <NavLinkSpy className="nav-link" to="/#top">Start</NavLinkSpy> 
                  {/* // NavLinkSpy */}
                </li>
                <li className="nav-item order-2" >
                  <NavLinkActive currentPath={currentPath} thisPath="/oferta/" to="/oferta#top">Oferta</NavLinkActive>
                </li>
                <li className="nav-item order-3">
                  <NavLinkSpy className="nav-link" to="/#o-firmie">O firmie</NavLinkSpy>
                </li>
                <li className="nav-item order-5">
                  <NavLinkSpy className="nav-link" to="/#kontakt">Kontakt</NavLinkSpy>
                </li>
                <li className="nav-item order-4" >
                  <NavLinkActive currentPath={currentPath} thisPath="/aktualnosci/" to="/aktualnosci#top">Aktualności</NavLinkActive>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
