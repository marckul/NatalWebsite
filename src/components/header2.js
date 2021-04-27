import * as React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
// https://www.npmjs.com/package/react-scrollspy
import Scrollspy from 'react-scrollspy'




const NavLink = (props) => (
  <Link className="nav-link" activeClassName="active" to={props.to}>{props.children}</Link>
)

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar-main" className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <span>Natal</span>
          <span>instalacje</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <div className="navbar-nav ml-auto ">
            <Scrollspy className="navbar-nav" items={['start', 'oferta', 'o-firmie', 'kontakt']} currentClassName="active" offset={-100}>
              <li className="nav-item order-1">
                <AnchorLink className="nav-link" to="/#start">Start</AnchorLink>
              </li>
              <li className="nav-item order-3">
                <AnchorLink className="nav-link" to="/#o-firmie">O firmie</AnchorLink>
              </li>
              <li className="nav-item order-5">
                <AnchorLink className="nav-link order-4" to="/#kontakt">Kontakt</AnchorLink>
              </li>
              <li className="nav-item order-2">
                <Link className="nav-link" to="/oferta">Oferta</Link>
              </li>
              <li className="nav-item order-4">
                <NavLink className="nav-link" to="/aktualnosci">Aktualności</NavLink>
              </li>

            </Scrollspy>

          </div>
        </div>
      </div>
    </nav>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
