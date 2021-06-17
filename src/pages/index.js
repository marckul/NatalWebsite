import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Row, CardTitle, CardText, Card, Phone} from "../components/componentsBundle"
import CarouselHero from '../components/CarouselHero'

/* IMAGES IMPORT */ 
import gasBoiler from '../assets/images/gas-boiler.png'
import tapSketch from '../assets/images/tap-sketch.png'
import excavatorSketch from '../assets/images/excavator-sketch.png'
import pipesImg from '../assets/images/natal-pipes.jpg'
import photovoltaicsSketch from '../assets/images/photovoltaics-sketch.jpg'

const IndexPage = (props) => {
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
                {/* <div></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="embed-responsive map-iframe-mysizes  shadow-lg">
          <iframe title="Mapa lokalizacji firmy Natal Instalacje" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3947.521810683705!2d18.540439660763354!3d50.09281379742586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x448e4c006b68ed07!2sSprzeda%C5%BC%20i%20wykonawstwo%20instalacji%20-%20Natal%20Instalacje!5e0!3m2!1spl!2spl!4v1622279430446!5m2!1spl!2spl" width="800" height="600" loading="lazy"></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
