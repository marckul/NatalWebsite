import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Scrollspy from 'react-scrollspy'


import Layout from "../components/layout"
import Seo from "../components/seo"

// import Row from "../components/componentsBundle"
// import CardTitle from "../components/componentsBundle"
// import CardText from "../components/componentsBundle"
// import Card from "../components/componentsBundle"

import {Row, CardTitle, CardText, Card, Phone} from "../components/componentsBundle"
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
    <Layout id="index-page" currentPath={props.path}>
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
      <section id="kontakt" >
        <div  className="py-5 contact-section full-height d-flex flex-column justify-content-center" style={{backgroundImage: `url(${pipesImg})`}}>
          <div  className="container text-white py-5 my-5" >
            <div className="row col-12 col-xl-8 mx-auto contact-row ">
              <div className="col-12">
                <h1 className="display-2 text-left mb-5">Jak nas znaleźć?</h1>
              </div>
              <div className="col-md">
                <h2>Nasz adres</h2>
                <address className="">                      
                    Miejska 13, 44-200 Rybnik <br/>
                    Natalia Kula "Natal" PHU <br/>
                </address>  
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias non iure sed suscipit voluptatem facilis, minima praesentium amet reiciendis maiores voluptate ex quia saepe architecto odit doloribus qui eveniet quaerat quo laudantium? Commodi quibusdam facilis et facere cumque quod provident dolorem quia nobis repellat deleniti, ipsa illo doloremque natus nesciunt soluta, eaque consequuntur nihil delectus quidem? Sit id dolores et quisquam hic ab voluptas enim voluptatem veritatis quae similique voluptates cum, recusandae in, mollitia a illo. Corrupti harum laborum veritatis, aspernatur adipisci soluta quaerat, facere asperiores fuga est numquam omnis fugit eligendi ut aut exercitationem delectus porro error architecto nostrum aliquam et magnam. Magni et tempore, quod maxime nihil itaque harum. Iste harum, dolores eligendi provident qui autem commodi nemo laboriosam illum praesentium illo, cum ratione itaque. Possimus necessitatibus modi a autem fuga odit est ex neque nemo placeat. Quisquam voluptatem iste voluptate eligendi voluptatibus eos explicabo numquam perspiciatis sint blanditiis aliquam dicta, obcaecati dolorem, praesentium repellendus esse voluptas accusamus. Autem perferendis et, minus porro libero asperiores iste aliquid suscipit nam dignissimos iure reiciendis natus delectus ducimus perspiciatis odio explicabo quibusdam consequatur? Ab ullam et animi totam? Sed exercitationem perspiciatis magni soluta aspernatur consequuntur est illum sunt odio, distinctio, repellat cupiditate placeat molestias incidunt corporis beatae dolorum odit provident id quos voluptates perferendis. In delectus, sequi eos sint natus doloribus. Dolorem minus facilis, corrupti cum modi voluptatum vero at nostrum dolorum tempore ratione nihil quos debitis esse nisi cupiditate accusamus! Animi rerum quia, modi expedita laboriosam repellat necessitatibus adipisci explicabo nisi porro exercitationem commodi sint velit itaque cupiditate non rem, dicta, totam distinctio! Eveniet ducimus odit facilis at qui obcaecati omnis ratione accusantium magnam esse! Perspiciatis sit et cum! Veniam, eveniet! Officia, similique eius vel adipisci quos eum corrupti natus atque qui nihil itaque numquam veniam rerum aliquam cum?</p> */}

              </div>
              <div className="col-md flex-grow-0">
                <h2>
                  Telefon
                </h2>
                <div className="">
                  <Phone size="1em" tel="500 087 801">500 087 801</Phone>
                  <Phone size="1em" tel="500 087 803">500 087 803</Phone>
                  <Phone size="1em" tel="32 42 31 129">32&nbsp;42&nbsp;31&nbsp;129</Phone>
                </div>
                
                <div>
                  
                </div>

  
              </div>
            </div>
          </div>
        </div>
        <div className="embed-responsive map-iframe-mysizes  shadow-lg">
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3947.521810683705!2d18.540439660763354!3d50.09281379742586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x448e4c006b68ed07!2sSprzeda%C5%BC%20i%20wykonawstwo%20instalacji%20-%20Natal%20Instalacje!5e0!3m2!1spl!2spl!4v1622279430446!5m2!1spl!2spl" width="800" height="600" loading="lazy"></iframe>
          {/* <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.9226760850963!2d18.541558678448304!3d50.09207745939281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114ed847610965%3A0x448e4c006b68ed07!2ssprzeda%C5%BC%20i%20wykonawstwo%20instalacji%20Natal%20instalacje!5e0!3m2!1spl!2spl!4v1615914861528!5m2!1spl!2spl"></iframe> */}
        </div>

        
      </section>
      
      
      {/* <section id="kontakt" className="contact-section">
        <div id="main-wrapper" style={{backgroundImage: `url(${pipesImg})`}}>

          <div id="second-wrapper">
            <div id="main" className="container d-flex flex-column justify-content-center full-height shadow-none my-5 py-5">  
              <h1 className="display-3 text-left ">Jak nas znaleźć?</h1>
              <div className="row ">
                <div className="col-md-6 d-flex py-5">
                  <div className="mx-auto lead ">
                    <h2>Nasz adres</h2>
                    <address className="">                      
                        Miejska 13, 44-200 Rybnik <br/>
                        Natalia Kula "Natal" PHU <br/>
                    </address>        
                  </div>
                </div>

                <div className="col-md-6 d-flex py-5">
                  <div className="mx-auto lead">
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
        </div>   */}




      {/* </section> */}
    </Layout>
  )
}

export default IndexPage
