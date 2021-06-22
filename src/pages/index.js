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
            <h1 className="display-3 ">Natal Instalacje</h1>
            <p className="lead-normal font-weight-bold">
              Zajmujemy się kompleksowym wykonawstwem robót instalacyjnych w domach, mieszkaniach, obiektach użyteczności publicznej i innych oraz sprzedażą materiałów instalacyjnych. 
              <br/>Nasze doświadczenie w branży sięga 30 lat.
            </p>
            <p className="lead-normal">
              Jesteśmy w stanie wykonać każdą instalację podejmując się nawet najtrudniejszych zadań. Współpracujemy również z zaufanymi projektantami instalacji, którzy projektują dla nas instalacje gazowe oraz inne, załatwiając wszelkie formalności za klienta, włącznie z nadzorem kierownika budowy.
            </p>
          </div>
      </section>

      <section id="oferta" className="container py-md-5 my-5">      
        <h1 className="display-3">Oferta</h1>
        <p className="lead-normal">Prowadzimy działalność w zakresie <strong>sprzedaży, wykonastwa i serwisu</strong> w poniższych dziedzinach</p>

        <Row justifyContent="around">
          <Card id="centralne-ogrzewanie" to="/oferta#centralne-ogrzewanie" src={gasBoiler} alt="image mockup" small=''>
            <CardTitle>Centralne Ogrzewanie</CardTitle>
            <CardText>
              W naszej ofercie znajdziecie państwo kotły kondensacyjne, pomy ciepła, ogrzewanie podłogowe oraz inne rozwiązania zapewniające właściwe ogrzewanie budynku, które stosuje się  w nowoczesnym budownictwie. 
            </CardText>
          </Card>
          <Card id="instalacje-wod-kan" to="/oferta#instalacje-wod-kan" src={tapSketch} alt="image mockup" small=''>
            <CardTitle>Instalacje WOD-KAN</CardTitle>
            <CardText>
              Wykonujemy przyłącza wodne i kanalizacyjne. Dzięki stałej współpracy z projektantami instalacji jesteśmy w stanie zapewnić również projekt wykonywanej instalacji przyłącza.
            </CardText>
          </Card>
          <Card id="fotowoltaika-i-wentylacja" to="/oferta#fotowoltaika-i-wentylacja" src={photovoltaicsSketch} alt="image mockup" small=''>
            <CardTitle>Fotowoltaika i Wentylacja</CardTitle>
            <CardText>
              Zajmujemy się sprzedażą i montażem ogniw fotowoltaicznych i solarów, a także instalacją systemów wentylacji z rekuperacją.
            </CardText>
          </Card>
          <Card id="roboty-ziemne" to="/oferta#roboty-ziemne" src={excavatorSketch} alt="image mockup" small=''>
            <CardTitle>Roboty Ziemne</CardTitle>
            <CardText>
              Oferujemy wynajem minikoparki  Kubota KX018-4  wraz z wykwalifikowanym operatorem. Wykonujemy wykopy zarówno pod instalacje wodno-kanalizacyjne, gazowe jak i inne wykopy związane z remontem i budową domu
            </CardText>
          </Card>    
        </Row>
      </section>  

      <section id="o-firmie"  className="container my-5 py-5">
        <h1 className="display-3">O firmie</h1>
        <div className="lead-normal">
          <p>
            Przedsiębiorstwo Natal PHU rozpoczęło swoją działalność w 1993 r. w Żorach od sprzedaży i montażu elektrycznych kabli grzewczych duńskiej firmy DEVI- wiodącego producenta tego produktu na świecie. W tym czasie byliśmy jednym z kilku dystrybutorów tego produktu w kraju a jedną z dwóch firm na śląsku. Z czasem w miarę rozwoju firmy, rozpoczęliśmy montaż ogrzewania podłogowego wodnego oraz wykonawstwo instalacji centralnego ogrzewania oraz gazu.
          </p>
          <p>
            Kolejnym krokiem było otwarcie sklepu z materiałami instalacyjnymi w Rybniku z roku na rok poszerzając asortyment i związując się z wiodącymi producentami na świecie. Obecnie zajmujemy się kompleksowym wykonawstwem robót instalacyjnych w obiektach użyteczności publicznej, mieszkaniowych i innych oraz sprzedażą materiałów instalacyjnych.
          </p>
          <p>
            Jesteśmy w stanie wykonać każdą instalację podejmując się nawet najtrudniejszych zadań. Współpracujemy z projektantami którzy projektują dla nas instalacje gazowe oraz inne załatwiając wszelkie formalności za klienta, włącznie z nadzorem kierownika budowy.
          </p>
          <p>
            Zlecone prace realizujemy terminowo, w najnowocześniejszych technologiach dostępnych na rynku. Zatrudniamy wysoko kwalifikowanych pracowników, z długoletnią praktyką zawodową, co pozwala na utrzymanie wysokiego poziomu wykonawstwa. Nasza firma posiada wszelkie wymagane uprawnienia do prowadzenia wykonywanych prac. Podczas realizacji prac instalacyjnych podejmujemy stałą współpracę ze zleceniodawcami w celu najefektywniejszej realizacji kontraktu.
          </p>
        </div>


      </section>
      <section id="godziny-otwarcia"  className="container my-5 py-5">
        <div className="row">

      </div>
      </section>

      <section id="kontakt" >
        <div  className="py-5 contact-section full-height d-flex flex-column justify-content-center" style={{backgroundImage: `url(${pipesImg})`}}>
          <div  className="container text-white py-5 my-5" >
            <div className="row mx-auto px-0 contact-row justify-content-between">
              <div className="col-12 ">
                <h1 className="display-2 text-left mb-5">Jak nas znaleźć?</h1>
              </div>
              <div className="col-md-4 col-lg-3 mb-5">
                <h2>Nasz adres</h2>
                <address className="">                      
                    Miejska 13, 44-200 Rybnik <br/>
                    Natalia Kula "Natal" PHU <br/>
                </address>  
              </div>
              <div className="col-md-3 col-lg-2 mb-5">
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
                                                  
              <div className=" col-md col-lg-5 " >
                <div className="openning-hours">
                  <h2 className="">Godziny otwarcia</h2>
                  <table className=" ">
                    <tbody>
                        <tr>
                          <th>poniedziałek</th>
                          <td>08:30–16:00</td>
                        </tr>
                        <tr>
                          <th>wtorek</th>
                          <td>08:30–16:00</td>
                        </tr>
                        <tr>
                          <th>środa</th>
                          <td>08:30–16:00</td>
                        </tr>
                        <tr>
                          <th>czwartek </th>
                          <td>08:30–16:00</td>
                        </tr>
                        <tr>
                          <th>piątek</th>
                          <td>08:30–16:00</td>
                        </tr>
                        <tr>
                          <th>sobota</th>
                          <td>09:00–12:00</td>
                        </tr>
                        <tr>
                          <th>niedziela </th>
                          <td>Zamknięte</td>
                        </tr>
                    </tbody>
                  </table>
                  <p className="mt-3 font-italic">W przypadku świąt godziny otwarcia mogły ulec zmianie.  
                    <a href="https://www.google.com/maps/place/Sprzeda%C5%BC+i+wykonawstwo+instalacji+-+Natal+Instalacje,+Miejska+13,+44-200+Rybnik,+Polska/@50.0921913,18.5426409,19z/data=!4m6!1m3!3m2!1s0x47114ed83d8ed535:0xe8c8f888d50c3781!2sNatal+Instalacje,+Miejska+13,+44-200+Rybnik,+Polska!3m1!1s0x47114ed847610965:0x448e4c006b68ed07" 
                    target="_blank" className="link-light"> Sprawdź tutaj</a>
                  </p>
                </div>
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
