import React from 'react'
import {Link} from 'gatsby' 
import { StaticImage } from "gatsby-plugin-image"

import facebookIcon1 from '../assets/icons/facebook.svg'


const Phone = (props) => {
  
  return(
    <a href={`tel:${props.tel}`} className="link-light text-nowrap mr-4 d-block">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
      <p className="ml-2 m-0 d-inline">{props.children}</p> 
    </a>
  )
}


const Footer = () => {
  return(
    <footer className="d-flex bg-dark text-white py-5">    
      <div className="container ">
        {/* <!-- <div className="col-md-2"> <h5>Kolumna 1</h5> </div> --> */}
        <div className="row  small justify-content-between lign-items-stretch">
          <div className="col-md px-5 my-2">
            <h4>Sprzedaż</h4>
            <ul>
              <li>kotły co</li>
              <li>grzejniki</li>
              <li>pompy ciepła</li>
              <li>zasobniki cwu</li>
              <li>panele fotowoltaiczne</li>
              <li>materiały instalacyjne</li>
            </ul>
          </div>
          <div className="col-md px-5 my-2">        
            <h4 className="d-block d-lg-none">Wykonawstwo-usługi</h4>
            <h4 className="d-none d-lg-block">Wykonawstwo&nbsp;-&nbsp;usługi</h4>
            <ul>
              <li>instalacje gazowe</li>
              <li>instalacje co</li>
              <li>instalacje wod-kan</li>
              <li>fotowoltaika</li>
              <li>wentylacja z rekuperacją</li>
              <li>instalacje elektryczne</li>
            </ul>    
          </div>
  
  
          <div className="col-md-12 col-lg-4 px-5 my-2">        
            <address>
              <div className="row justify-content-between">
                <div className="col-sm-6 pr-0">
                  <h4>Kontakt</h4>
                  Miejska 13, 44-200 Rybnik <br/>
                  Natalia Kula "Natal" PHU <br/>
                </div>            
                <div className="col-sm-6 py-3 text-center pl-0 d-none d-sm-block">  
                  <a className="" target="_blank" href="https://www.facebook.com/Natalia-Kula-Natal-PHU-144612016049541/">
                    <img  className="svg-file" src={facebookIcon1} alt="Facebok1" width="60" height="60" />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <h5>Telefon</h5>
                <Phone tel="500 087 801">500 087 801</Phone>
                <Phone tel="500 087 803">500 087 803</Phone>
                <Phone tel="32 42 31 129">32&nbsp;42&nbsp;31&nbsp;129 </Phone>
              </div> 
              <div className="col-xs-12 py-3 text-center pl-0 d-block d-sm-none mt-5">  
                <a className="" target="_blank" href="https://www.facebook.com/Natalia-Kula-Natal-PHU-144612016049541/">
                  <img  className="svg-file" src={facebookIcon1} alt="Facebok1" width="60" height="60" />
                </a>
              </div>       
            </address>
  
          </div>
          
  
        </div>{/* <!-- /row --> */}
        <p className="text-center" >Copyright &copy; 2021 NATAL INSTALACJE</p>
      </div>
      
    </footer>
  )
}



export default Footer
