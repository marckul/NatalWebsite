import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'



const NavLink = (props) => (
  <li className="nav-item" ><Link className="nav-link" to={props.to}>{props.children}</Link></li>
)

const Header2 = ({ siteTitle }) => (
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
          <Scrollspy className="navbar-nav" items={ ['top', 'middle', 'section-3'] } currentClassName="active" offset={ -100 }>
            <li className="nav-item" ><a className="nav-link" href="#top">section 1</a></li>
            <li className="nav-item" ><a className="nav-link" href="#middle">section 2</a></li>
            <li className="nav-item" ><a className="nav-link" href="#section-3">section 3</a></li>
            <li className="nav-item" ><a className="nav-link" href="/kontakt">Kontakt</a></li>
          </Scrollspy>
          
          </div>
        </div>
      </div>
    </nav>
  </header>

)


Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}

export default Header2
