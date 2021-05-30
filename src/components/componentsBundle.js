import * as React from 'react'
// import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from 'gatsby';



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
        <AnchorLink to={props.to} className="hover-light"><img src={props.src} alt={props.alt} className="card-img-top"/></AnchorLink>
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <div>{props.children}</div>
          <p className="card-text"><small className="text-muted font-italic">{props.small}</small></p>
        </div>
      </div>
    </div>
  )
}


const GoBackLink = () => {

  // https://stackoverflow.com/questions/53134784/css-transition-to-original-state-after-mouseleave
  return(
    <a onClick={() => navigate(-1)} className="fake-link arrow-link pr-5 pb-3">Powrót</a>
  )
}


const Phone = (props) => {
  let propsSize = "";
  if (props.size === undefined) {
    propsSize = "16"
  } else {
    propsSize = props.size;
  }
  
  // debugger;

  return(
    <a href={`tel:${props.tel}`} className="link-light text-nowrap mr-4 d-block">
      <svg xmlns="http://www.w3.org/2000/svg" width={propsSize} height={propsSize} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
      <p className="ml-2 m-0 d-inline">{props.children}</p> 
    </a>
  )
}


const JumbotronHero = ({title, children}) => {
  return(
    <div className={`jumbotron jumbotron-fluid jumbotron-hero d-flex flex-column justify-content-center my-0  {ofertaStyles.jumbotron}`} >
      <div class="container">
        <div className="row">
          <div className="col-md">
            <h1 className="display-2">{title}</h1>
            <p className="lead font-weight-normal">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export {Row, CardTitle, CardText, Card, GoBackLink, Phone, JumbotronHero}
// export Row
// export CardTitle
// export CardText
// export Card