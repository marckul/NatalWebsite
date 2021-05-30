import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Scrollspy from 'react-scrollspy'


import Layout from "../components/layout"
import Seo from "../components/seo"

// import Row from "../components/componentsBundle"
// import CardTitle from "../components/componentsBundle"
// import CardText from "../components/componentsBundle"
// import Card from "../components/componentsBundle"

import {Row, CardTitle, CardText, Card} from "../components/componentsBundle"
import CarouselHero from '../components/CarouselHero'

/* IMAGES IMPORT */ 
import imageMockup from '../assets/img-mockup/img-placeholder-512x512.png'
import gasBoiler from '../assets/images/gas-boiler.png'
import tapSketch from '../assets/images/tap-sketch.png'
import excavatorSketch from '../assets/images/excavator-sketch.png'

import pipesImg from '../assets/images/natal-pipes.jpg'
import photovoltaicsSketch from '../assets/images/photovoltaics-sketch.jpg'




const IndexPage = (props) => {

  // debugger;

  return(
    <Layout id="index-page">
      <Seo title="Start"/>
      <section id="start">
        <CarouselHero />
          <div className="container py-md-5 my-5">
            <h1 className="display-4">Natal Instalacje</h1>
            <p className="lead">Tutaj powinien znaleźć się jakiś <strong>krótki</strong> slogan na temat firmy</p>
          </div>
      </section>

      <section id="oferta" className="container py-md-5 my-5">      
        <h1 className="display-3">Oferta</h1>
        <p className="lead">Prowadzimy działalność w zakresie <strong>sprzedaży, wykonastwa i serwisu</strong> w poniższych dziedzinach</p>

        <Row justifyContent="around">
          <Card id="centralne-ogrzewanie" to="/oferta#centralne-ogrzewanie" src={gasBoiler} alt="image mockup" small=''>
            <CardTitle>Centralne Ogrzewanie</CardTitle>
            <CardText>Dolorem labore facilis alias consequuntur, quas voluptates ratione, consequatur nobis quibusdam harum veritatis.</CardText>
          </Card>

          <Card id="instalacje-wod-kan" to="/oferta#instalacje-wod-kan" src={tapSketch} alt="image mockup" small=''>
            <CardTitle>Instalacje WOD-KAN</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem incidunt aperiam ratione autem a ullam debitis! Dolorem labore facilis alias consequuntur, quas voluptates ratione, consequatur nobis quibusdam harum veritatis.
            </CardText>
          </Card>

          <Card id="fotowoltaika-i-wentylacja" to="/oferta#fotowoltaika-i-wentylacja" src={photovoltaicsSketch} alt="image mockup" small=''>
            <CardTitle>Fotowoltaika i Wentylacja</CardTitle>
            <CardText>
              Est beatae libero quia non tempora perferendis fugiat maxime? Aliquid eaque cupiditate nemo quia ad dolores unde. Est, quia totam. Laudantium neque, quod ea architecto sint sed eaque, cumque repellendus voluptates cupiditate in aliquid.
            </CardText>
          </Card>

          <Card id="roboty-ziemne" to="/oferta#roboty-ziemne" src={excavatorSketch} alt="image mockup" small=''>
            <CardTitle>Roboty Ziemne</CardTitle>
            <CardText>
              Oferujemy wynajem minikoparki  Kubota KX018-4  wraz z operatorem.
            </CardText>
          </Card>    
        </Row>
      </section>  

      <section id="o-firmie"  className="container my-5 py-5">
        <h1 className="display-3">O firmie</h1>
        <p>Maiores rerum eum porro eius ipsa libero cupiditate voluptatum, perspiciatis nisi nobis molestiae aliquam minus corrupti explicabo autem, distinctio dolorem. Aut suscipit necessitatibus fuga aspernatur dicta ipsam quibusdam, repellat ratione. Animi cumque autem optio deserunt quo, a illo eos repellendus hic dolor vel eius repudiandae culpa cum. Rerum dicta deserunt in iusto laborum. Dicta debitis, amet nesciunt perferendis corrupti quaerat nihil inventore ipsum, earum exercitationem saepe placeat illo officiis aliquam et dolorem. Unde cum molestiae quos eum voluptatum error aperiam eos, voluptate quae necessitatibus. Aperiam quae corporis odio, voluptate voluptatem quidem autem alias nisi atque nesciunt praesentium quibusdam quo placeat ducimus deleniti? Tenetur, blanditiis provident exercitationem in magni tempora id esse explicabo minima reiciendis officia. Error suscipit architecto blanditiis.</p>
        <p> Enim fugit similique maxime dolorem totam aut natus iste debitis expedita dicta est exercitationem necessitatibus aspernatur molestiae, labore eius optio, at voluptatum vero, iusto corporis sapiente illo doloribus! Dignissimos qui perferendis eius eos ratione modi beatae libero minima tenetur, amet hic placeat explicabo voluptas impedit voluptatum deleniti nostrum alias aspernatur.</p>
      </section>

      {/* POSPRZATAC KONTAKT */}
      
      <section id="kontakt">
        <div id="main-wrapper" style={{backgroundImage: `url(${pipesImg})`}}>

          <div id="second-wrapper">
            <div id="main" className="container d-flex flex-column justify-content-center full-height shadow-none ">  

              <div className="row my-5 py-5">
                <div className="col-12">
                    <h1 className="display-3 text-left ">Jak nas znaleźć?</h1>
                    <p className="lead"></p>

                </div>
                
                <div className="col-md-6 d-flex py-5">
                  <div className="mx-auto lead font-weight-normal">
                    <h2>Nasz adres</h2>
                    <address>
                      
                        Miejska 13, 44-200 Rybnik <br/>
                        Natalia Kula "Natal" PHU <br/>
                      
                    </address>        
                  </div>
                  
                </div>

                <div className="col-md-6 d-flex py-5">
                  <div className="mx-auto lead font-weight-normal">
                    <h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      Telefon
                    </h2>
                    <ul className="">
                      <li >
                        <a href="tel:500 087 801" className="link-light mr-4">
                          500 087 801 
                        </a>
                      </li>
                      <li>
                        <a href="tel:500 087 803" className="link-light mr-4">
                          500 087 803 
                        </a>
                      </li>
                      <li>
                        <a href="tel:32 42 31 129" className="link-light text-nowrap mr-4">
                          32&nbsp;42&nbsp;31&nbsp;129 
                        </a>               
                      </li>
                    </ul>  
                  </div>

                </div>  
              </div>
            </div>
          </div>
        </div>   {/* <!-- #main-wrapper --> */}


        <div className="embed-responsive map-iframe-mysizes  shadow-lg">
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.9226760850963!2d18.541558678448304!3d50.09207745939281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114ed847610965%3A0x448e4c006b68ed07!2ssprzeda%C5%BC%20i%20wykonawstwo%20instalacji%20Natal%20instalacje!5e0!3m2!1spl!2spl!4v1615914861528!5m2!1spl!2spl"></iframe>
        </div>

      </section>
    </Layout>
  )
}

export default IndexPage
