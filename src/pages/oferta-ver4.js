/*
TO JEST NAJNOWSZA STRONA OFERTY

Tutaj powstaje wizualny projekt strony oferta
*/ 

import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import  { getRichTextRenderer, richTextRenderer, getOfferSectionByTitleID } from '../components/functions'
import Layout from '../components/layout'
import * as ofertaStyles from '../styles/oferta/oferta-ver4.module.css'

// import zaworyRysunek from '../assets/images/zawory-krawedzie2048x2048.jpg'
import zaworyRysunek from '../assets/images/offer-page/Rurki2-rysunek-mockup.jpg'
import pipes2Img from '../assets/images/natal-pipes-2.jpg'
import gasBoiler from '../assets/images/gas-boiler.png'




const getOfferSectionID = (edge) => {
  // Założenie tytuł sekcji nie powtarza się w sensie case insensitive

  return getOfferSectionByTitleID(edge.node.title, '-')
    
}

// const getOfferSectionByTitleID = (string = ' ', repl = '-') => {
//   let allWords = string.split(" ");
//   return allWords.join("-").toLowerCase();  
// }

const OfferPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStronaOfertySekcja (sort: {
        fields: sectionsPosition
        order: ASC
      }){
        edges {
          node {
            title
            
            offerSectionBody {
              raw

              references {
                ... on ContentfulAsset {
                  contentful_id
                  description
                  id
                  file {
                    __typename
                    url
                    fileName
                    details {
                      size
                    }
                    contentType
                  }
                }

                ... on ContentfulStronaOfertySekcja {
                  contentful_id
                  title
                }

                ... on ContentfulStronaOfertyPodstrona {
                  contentful_id
                  slug
                }

              }
              
            }

          }
        }
      }
    }
  `);




  

  let offerPageContent = data.allContentfulStronaOfertySekcja.edges.map( (edge) => {
    let title = edge.node.title;    
    let id = getOfferSectionID(edge);

    let richText = edge.node.offerSectionBody;

    // let richTextRenderer = getRichTextRenderer();
    richTextRenderer._constructor(edge.node.offerSectionBody, "/oferta")
    
    
        
    return(
      <section id={id}  className=""  >
        <div className="container">
          <h1 className="display-3">{edge.node.title}</h1>
          {documentToReactComponents(
            JSON.parse(richTextRenderer.richText.raw), 
            richTextRenderer.options
          )}
        </div>        
      </section>
    )

  })
  

  console.log(ofertaStyles);
  ofertaStyles.layoutClasses = "d-flex flex-column justify-content-center jumbotron jumbotron-fluid my-0"
  let colClass = `col-md flex-grow-1 ${ofertaStyles.colMd}`;

  return(
    <Layout id="oferta" className={`${ofertaStyles.oferta} `}>
      {/* {offerPageContent} */}
      <section id="nasza-oferta"  >
        <div className={`jumbotron jumbotron-fluid ${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle2}  ${ofertaStyles.mainOffer1} `} 
              style={{backgroundImage: `url(${zaworyRysunek})`}}
        >
          <div class="container">
            <div className="col-md-8">
              <h1 className="display-2 text-uppercase">Nasza Oferta</h1>
              <p className="lead font-weight-normal">Prowadzimy naszą działalność w dziedzinach związanych z budownictwem mieszkaniowym.</p>
            </div>
          </div>

        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle1}`} >
          <div className="container">
            <div className="row justify-content-around">
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Sprzedaż</h2>
                <ul>
                  <li>kotły co</li>
                  <li>gazowe </li>
                  <li>węglowe</li>
                  <li>grzejniki</li>
                  <li>pompy ciepła</li>
                  <li>zasobniki cwu </li>
                  <li>panele fotowoltaiczne </li>
                  <li>solary </li>
                  <li>materiały instalacyjne</li>
                </ul>
              </div>
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Wykonawstwo-usługi</h2>
                <ul>
                  <li>kotły co</li>
                  <li>gazowe </li>
                  <li>węglowe</li>
                  <li>grzejniki</li>
                  <li>pompy ciepła</li>
                  <li>zasobniki cwu </li>
                  <li>panele fotowoltaiczne </li>
                  <li>solary </li>
                  <li>materiały instalacyjne</li>
                </ul>
              </div>
            </div>

          </div>        
        </div>
      </section>  

      {/* =================
        WERSJA NR 2
       =================*/}
      <section id="nasza-oferta"  >
        <div className={`jumbotron jumbotron-fluid ${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle2}  ${ofertaStyles.mainOffer2} `} 
              style={{backgroundImage: `url(${pipes2Img})`}}
        >
          <div class="container">
            <div className="col-md-8">
              <h1 className="display-2 text-uppercase">Nasza Oferta</h1>
              <p className="lead font-weight-normal">Prowadzimy naszą działalność w dziedzinach związanych z budownictwem mieszkaniowym.</p>
            </div>
          </div>

        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle1}`} >
          <div className="container">
            <div className="row justify-content-around">
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Sprzedaż</h2>
                <ul>
                  <li>kotły co</li>
                  <li>gazowe </li>
                  <li>węglowe</li>
                  <li>grzejniki</li>
                  <li>pompy ciepła</li>
                  <li>zasobniki cwu </li>
                  <li>panele fotowoltaiczne </li>
                  <li>solary </li>
                  <li>materiały instalacyjne</li>
                </ul>
              </div>
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Wykonawstwo-usługi</h2>
                <ul>
                  <li>kotły co</li>
                  <li>gazowe </li>
                  <li>węglowe</li>
                  <li>grzejniki</li>
                  <li>pompy ciepła</li>
                  <li>zasobniki cwu </li>
                  <li>panele fotowoltaiczne </li>
                  <li>solary </li>
                  <li>materiały instalacyjne</li>
                </ul>
              </div>
            </div>

          </div>        
        </div>
      </section> 

      <section id="nasza-oferta2">

        <div className={`jumbotron jumbotron-fluid ${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle2} `} 
              // style={{backgroundImage: `url(${zaworyRysunek})`}}
        >
          <div class="container">
            {/* <img src={`${zaworyRysunek}`} alt=""/> */}
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-2">Centralne Ogrzewanie</h1>
                <p className="lead font-weight-normal">Prowadzimy naszą działalność w dziedzinach związanych z budownictwem mieszkaniowym.</p>
              </div>
              <div className="col-md-6">
                <img src={gasBoiler} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div  className={`${ofertaStyles.layoutClasses} ${ofertaStyles.ofertaStyle1}`} >
          <div className="container">
            <div className="row justify-content-around">
              <div className={`${colClass}`}>
                <h2 className="display-4">Kolumna 1</h2>
                <p>Libero perspiciatis numquam a reprehenderit aliquam architecto labore nisi accusantium dolor fugit mollitia consequuntur fugiat id inventore laborum, minus nostrum recusandae quidem, obcaecati ut! Excepturi, quae dicta. Cum eaque, dolor ut, ullam soluta voluptates iure quibusdam quaerat sunt, neque error illum itaque.</p>
              </div>
              
              <div className={`${colClass}`}>
                <h2 className="display-4">Kolumna 2</h2>
                <p>A quidem inventore iste obcaecati ex unde nobis dolor omnis, ratione quam, asperiores maxime nostrum. Dolor quae nihil perspiciatis sequi pariatur aperiam iusto earum omnis. Placeat optio voluptas dolor provident mollitia voluptate temporibus quo reiciendis culpa aliquam, consequuntur corporis. Odit, soluta ipsam?</p>
              </div>
              

            </div>


          </div>        
        </div>
      </section>          
    </Layout>
  )
}


export default OfferPage
