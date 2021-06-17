import * as React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
// https://www.npmjs.com/package/react-scrollspy
import Scrollspy from 'react-scrollspy'



/*
const NavLink = (props) => (
  <Link className="nav-link" activeClassName="active" to={props.to}>{props.children}</Link>
)
*/ 

const MyAnchorLink = ({children, to, thisPath, currentPath}) => {
  // debugger;
  let isActiveClass = thisPath === currentPath ? "active" : "";
  return(
    <AnchorLink className={`nav-link ${isActiveClass}`} to={to}> {children}</AnchorLink>
  )
}

const NavBrand1 = () => (
  <Link className="navbar-brand " to="/">
    <span>Natal</span>
    <span>instalacje</span>
  </Link>
)

/*
const NavBrand2 = () => (
  <Link className="navbar-brand flex-row" to="/" style={{fontSize: '1rem'}}>
    <div style={{fontSize: '2.8em', fontWeight: 'bold', paddingBottom: '0.05em'}}>N</div> 
    <div>
    <span>atal</span>
    <span style={{fontSize: '.8em'}}>instalacje</span>
    </div>
  </Link>
)
*/ 


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
                  <AnchorLink className="nav-link" to="/#top">Start</AnchorLink>
                </li>
                <li className="nav-item order-2" >
                  <MyAnchorLink currentPath={currentPath} thisPath="/oferta/" to="/oferta#top">Oferta</MyAnchorLink>
                </li>
                <li className="nav-item order-3">
                  <AnchorLink className="nav-link" to="/#o-firmie">O firmie</AnchorLink>
                </li>
                <li className="nav-item order-5">
                  <AnchorLink className="nav-link" to="/#kontakt">Kontakt</AnchorLink>
                </li>
                <li className="nav-item order-4" >
                  <MyAnchorLink currentPath={currentPath} thisPath="/aktualnosci/" to="/aktualnosci#top">Aktualności</MyAnchorLink>
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
