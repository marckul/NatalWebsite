import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



const Row = (props) => (
  <div className={`row my-3 justify-content-${props.justifyContent}`}>
    {props.children}
  </div>
)

const CardTitle = ({children}) => (
  <h2 className="card-title">{children}</h2>
)
const CardText = ({children}) => (
  <p className="card-text text-justify">{children}</p>
)


// TODO
const Card = (props) => {
  
  return(
    <div className="d-flex col-md-6 col-lg-5 p-md-1">
      <div id={props.id} className="card flex-fill shadow mb-5 p-lg-3">
        <Link to={props.to} className="hover-light"><img src={props.src} alt={props.alt} className="card-img-top"/></Link>
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <div>{props.children}</div>
          <p className="card-text"><small className="text-muted font-italic">{props.small}</small></p>
        </div>
      </div>
    </div>
  )
}


export {Row, CardTitle, CardText, Card}
// export Row
// export CardTitle
// export CardText
// export Card